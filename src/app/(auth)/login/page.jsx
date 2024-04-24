"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import login from "../../../../public/assets/icons/login.svg";
import logo from "../../../../public/assets/icons/logo.svg";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  //user login
  async function handleUserLogin(userInfo) {
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };
    // next auth service
    const res = await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    if (res.ok) {
      router.push("/todo-list");
    }
    // console.log("Res : ", res);
  }

  return (
    <section>
      <div className="flex flex-col justify-center lg:flex-row h-lvh w-[90%] mx-auto space-x-60 overflow-hidden">
        <div className="grid card rounded-box ">
          <div className="mt-20">
            <Image src={logo} width={150} height={100} />
          </div>
          <div className="">
            <div className="ml-10">
              <h3 className=" font-bold text-2xl">Login</h3>
              <form action={handleUserLogin}>
                {/* Email */}
                <input
                  type="email"
                  name="email"
                  className="btn input font-light text-start hover:bg-white shadow-sm text-sm border border-slate-300  mt-5 rounded-lg block w-full p-2.5"
                  placeholder="Email"
                  required
                />
                {/* Password */}
                <input
                  type="password"
                  name="password"
                  className="btn input  font-light hover:bg-white text-start shadow-sm text-sm mt-5 border-slate-300  rounded-lg block w-full p-2.5"
                  placeholder="Password"
                  required
                />
                {/* Btn login */}
                <button
                  onClick={() => handleUserLogin}
                  type="submit"
                  className="text-white btn mt-5 hover:bg-blue-500 bg-blue-700 w-full font-medium rounded-lg text-sm text-center"
                >
                  Login
                </button>
              </form>
              <div className="flex max-w-sm mx-auto mt-3 justify-start">
                <p className="text-gray text-sm  ">Don't have account yet?</p>
                <Link
                  href={"/register"}
                  className="text-blue-700 pl-1 text-sm font-semibold"
                >
                  Register Now!
                </Link>
              </div>
              <div className="flex max-w-sm mx-auto pt-10 ">
                <button class="btn px-4 py-2 border flex w-96 justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt=""
                  />
                  <span>Login with Google</span>
                </button>
              </div>
            </div>
          </div>
          <p className="text-gray text-sm mt-10">
            Copyright © 2024 - All right reserved
          </p>
        </div>

        <div className="grid card  rounded-box place-items-center">
          <Image src={login} width={400} />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
