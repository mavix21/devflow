'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import React from 'react';
import { toast } from 'sonner';

import ROUTES from '@/constants/routes';

import { Button } from '../ui/button';

export default function SocialAuthForm() {
  const handleSignIn = async (provider: 'github' | 'google') => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.error('Sign in failed: ', error);

      toast('Sign in failed', {
        description:
          error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };

  return (
    <div className='flex flex-wrap gap-2.5'>
      <Button
        className='background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-md px-4 py-3.5'
        onClick={() => handleSignIn('github')}
      >
        <Image
          src='/icons/github.svg'
          alt='Github logo'
          width={20}
          height={20}
          className='invert'
        />
        <span>Log in with Github</span>
      </Button>

      <Button className='background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-md px-4 py-3.5'>
        <Image
          src='/icons/google.svg'
          alt='Github logo'
          width={20}
          height={20}
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
}
