"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const Logout = () => {
  const router = useRouter();
  return (
    <button
      className="text-white bg-red-400 py-[5px] px-[18px]"
      onClick={() => {
        signOut();
        router.push("/");
      }}
    >
      LOGOUT
    </button>
  );
};

export default Logout;
