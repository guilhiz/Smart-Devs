'use client';

import { signIn } from 'next-auth/react';

import { GithubLogo, GoogleLogo } from '../Icons';

const OAuthButtons = () => {
  return (
    <div className="flex w-full max-w-md justify-around">
      <button onClick={() => signIn('github')} className="btn btn-neutral  w-5/12">
        <GithubLogo size={22} color="#cccccc" /> Github
      </button>
      <button onClick={() => signIn('google')} className="btn btn-neutral w-5/12">
        <GoogleLogo size={22} color="#cccccc" /> Google
      </button>
    </div>
  );
};

export default OAuthButtons;
