"use client";

import { useState } from "react";
import { auth, db } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        email: email,
      });
      Swal.fire("Yeyyyyy akunnya dah jadi");
      router.push("/");
    } catch (err) {
      Swal.fire("Coba lagi abang ada yg salah");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        },
        { merge: true },
      );
      Swal.fire("Yeyyyyy akunnya dah jadi");
      router.push("/");
    } catch (err) {
      Swal.fire("Coba lagi abang ada yg salah");
    }
  };

  return (
    <div
      className="flex min-h-screen
     bg-white gap-6 w-screen items-center justify-center  "
    >
      <div className="hidden md:flex">
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
      <div className="flex flex-col  justify-center w-full md:w-[40%]  ">
        <div className="flex flex-col  px-16 py-10 text-black  ">
          <h1 className="text-3xl font-bold mb-2 text-center">Welcome</h1>
          <p className="mb-6 text-center">
            Please fill in your details to create a new account.
          </p>

          <form onSubmit={handleSignUp} className="space-y-4 ">
            <div className="flex flex-col gap-2">
              <label className="">Name</label>
              <input
                type="text"
                placeholder="Center your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="">Email</label>
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
              <label className="">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border rounded"
                required
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center mt-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            onClick={handleGoogleSignUp}
            className="w-full border border-gray-300 p-3 rounded flex items-center justify-center mt-4"
          >
            <Image
              src="/res/Google.png"
              alt="Google icon"
              width={20}
              height={20}
            />
            Sign Up with Google
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
