"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

import UserInfo from '../components/UserInfo'
export default function SignInBtn() {





  const { status } = useSession();
  return (
    <div className="">

      {status === "authenticated" ? (
        <div className="flex  justify-center items-center">
          <UserInfo/>
          <button
            onClick={() => signOut()}
            className="bg-slate-900 text-white px-6 py-2 rounded-md"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="font-bold px-6 py-2 rounded-md flex justify-center items-center align-middle gap-2">
          <img src="/google-logo.png" className="h-12 w-12" /><div className="bg-black px-4 py-2 rounded-lg">Sign In With Google</div>
        </button>
      )}
    </div>
  );










  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      <Image src="/google-logo.png" height={30} width={30} />
      <span className="bg-blue-500 text-white px-4 py-3">
        Sign in with Google
      </span>
    </button>
  );
}
