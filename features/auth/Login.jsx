"use client";

import { useState } from "react";
import { auth, db } from "@/config/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire("Alhamdulillah Login");
      router.push("/dashboard");
    } catch (err) {
      Swal.fire("Ga ada akun woy");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        Swal.fire("Alhamdulillah Login");
        router.push("/dashboard");
      } else {
        Swal.fire("Eh akunnya ga ada wey");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const resetPassword = async () => {
    if (!email) {
      alert("Please enter your email address to reset your password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-white gap-6 w-screen items-center justify-center">
      <div className="flex flex-col justify-center w-[40%]">
        <div className="flex flex-col px-16 py-10 text-black">
          <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
          <p className="mb-6 text-center">
            Please sign in to access your account.
          </p>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              onClick={resetPassword}
              className="text-right text-xs text-blue-500 cursor-pointer my-2"
            >
              Forgot Password
            </button>
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center mt-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full border border-gray-300 p-3 rounded flex items-center justify-center mt-4"
          >
            <Image
              src="/res/Google.png"
              alt="Google icon"
              width={20}
              height={20}
            />
            Sign In with Google
          </button>

          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="flex">
        <Image
          src="/res/sas.png"
          alt="Car"
          width={600}
          height={100}
          objectFit="cover"
          objectPosition="top"
          className="rounded-sm"
        />
      </div>
    </div>
  );
};
