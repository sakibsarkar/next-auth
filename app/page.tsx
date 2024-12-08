import { GoogleSignInButton } from "@/components/GoogleSignInButton";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession(authConfig);

  if (session?.user) return redirect("/auth");

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
      <GoogleSignInButton />
    </div>
  );
}
