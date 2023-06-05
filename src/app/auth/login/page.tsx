'use client';

import Link from 'next/link';
import { GithubLogo, GoogleLogo } from '@phosphor-icons/react';
import { signIn } from 'next-auth/react';

const SignIn = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-primary focus:text-primary-focus text-5xl font-bold mb-5">Login</h1>
      <form className="form-control justify-center w-full max-w-md px-4 py-4">
        <label className="label">
          <span className="label-text text-xl font-medium">Email</span>
        </label>
        <input type="text" placeholder="Digite seu email" className="input input-bordered w-full " />
        <label className="label">
          <span className="label-text-alt text-error text-base">No mínimo 5 caracteres</span>
        </label>
        <label className="label">
          <span className="label-text text-xl font-medium">Senha</span>
        </label>
        <input type="password" placeholder="Digite sua senha" className="input input-bordered w-full " />
        <label className="label">
          <span className="label-text-alt text-error text-base">No mínimo 5 caracteres</span>
        </label>
        <button className="btn btn-primary font-bold text-xl">Submit</button>
      </form>
      <p className="mt-2 text-base">
        Novo no Smart Devs?
        <Link href="/auth/cadastro" className="link text-info hover:text-opacity-75 ml-2">
          Crie sua conta aqui.
        </Link>
      </p>
      <div className="divider">Ou continuar com</div>
      <div className="flex w-full max-w-md justify-around">
        <button onClick={() => signIn('github')} className="btn btn-neutral  w-5/12">
          <GithubLogo size={22} color="#cccccc" /> Github
        </button>
        <button onClick={() => signIn('google')} className="btn btn-neutral w-5/12">
          <GoogleLogo size={22} color="#cccccc" /> Google
        </button>
      </div>
    </section>
  );
};

export default SignIn;
