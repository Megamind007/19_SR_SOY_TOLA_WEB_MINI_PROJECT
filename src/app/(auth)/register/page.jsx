import { registerSevice } from "@/service/auth-service";
import Image from "next/image";
import React from "react";

const RegisterPage = () => {
  async function handlerRegisterInfo(registerInfo) {
    "use server";
    // console.log("registerInfo ", registerInfo);
    const newRegisterInfo = {
      firstname: registerInfo.get("firstname"),
      lastname: registerInfo.get("lastname"),
      gender: registerInfo.get("gender"),
      profile_url: registerInfo.get("profile_url"),
      email: registerInfo.get("email"),
      password: registerInfo.get("password"),
    };
    // console.log("New register info : ", newRegisterInfo);
    await registerSevice(newRegisterInfo);
  }

  return (
    <div className="flex justify-center items-end mt-[10%] overflow-hidden">
      <div className="pr-10">
        <Image
          className="pl-2"
          src="/assets/icons/logo.svg"
          width={150}
          height={300}
          alt="black star"
        />
        <form action={handlerRegisterInfo}>
          <div className="grid grid-cols-2 gap-5 space-x-3 justify-center overflow-hidden mt-5 ">
            {/* First Name */}
            <div className="pl-3 pr-2">
              <p className="mb-2">First Name</p>
              <input
                type="text"
                name="firstname"
                placeholder="Enter First Name"
                className="btn font-light text-start hover:bg-white input input-bordered w-80 "
                required
              />
            </div>
            {/* Last Name */}
            <div>
              <p className="mb-2">First Name</p>
              <input
                type="text"
                name="lastname"
                placeholder="Enter Last Name"
                className="btn font-light text-start input hover:bg-white input-bordered  w-80"
                required
              />
            </div>
            {/* Email */}
            <div>
              <p className="mb-2">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="btn font-light text-start input input-bordered hover:bg-white  w-80"
                required
              />
            </div>
            {/* Gender */}
            <div>
              <p className="mb-2">Gender</p>
              <select
                className="btn font-light text-start select hover:bg-white select-bordered w-96 max-w-xs"
                name="gender"
                required
              >
                <option disabled defaultValue="">
                  Gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            {/* Password */}
            <div>
              <p className="mb-2">Password</p>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="btn  font-light text-start hover:bg-white input input-bordered  w-80"
                required
              />
            </div>
            {/* Image */}
            <div>
              <p className="mb-2">Profile_Url</p>
              <input
                type="text"
                name="profile_url"
                placeholder="Enter Profile Url"
                className="btn font-light text-start hover:bg-white input input-bordered  w-80"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white btn hover:bg-blue-500 bg-blue-700 w-60 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="">
        <Image
          src="/assets/icons/sign-up.svg"
          width={400}
          height={300}
          alt="black star"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
