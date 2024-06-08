"use client";

import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="shadow-xl p-8 rounded-md flex text-black font-bold gap-3 justify-center items-center">
        <div className="flex flex-col text-center">

            <img
              className="rounded-full h-8 w-8 mx-auto"
              src={session?.user?.image}
            />
          <div>
             <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div>
            <span className="font-bold">{session?.user?.email}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
}
