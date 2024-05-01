// src/components/SignupForm.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { api } from "~/utils/api";

interface SignupFormData {
  username: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const router = useRouter();

  const [signupFormData, setSignupFormData] = useState<SignupFormData>({
    username: "",
    password: "",
  });

  const signupHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const signUpMutaion = api.auth.signupMutation.useMutation({
    onSuccess: async () => {
      await router.push("/admin/editor");
    },
  });


  const onSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signUpMutaion.isLoading) {
      if (signupFormData.username && signupFormData.password) {
        signUpMutaion.mutate(signupFormData);
      }
    }
  };


  const [loginFormData, setloginFormData] = useState<SignupFormData>({
    username: "",
    password: "",
  });

  const loginHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setloginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginMutation = api.auth.loginMutation.useMutation({
    onSuccess: async (data) => {
      console.log(data);
      cookie.set("litwordRemembers", data.token, { expires: 1});
      await router.push("/admin/editor");
    },
  });

  const loginHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginMutation.isLoading) {
      if (loginFormData.username && loginFormData.password) {
        loginMutation.mutate(loginFormData);
      }
    }
  };

  return (
    <div className="flex h-screen flex-row items-center justify-evenly">
      <div className="w-1/5">
        <form
          onSubmit={onSignupSubmit}
          className="w-full border-2 border-black p-4"
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={signupFormData.username}
              onChange={signupHandle}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={signupFormData.password}
              onChange={signupHandle}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="w-1/5">
        <form
          onSubmit={loginHandleSubmit}
          className="w-full border-2 border-black p-4"
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={loginFormData.username}
              onChange={loginHandle}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginFormData.password}
              onChange={loginHandle}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignupForm;
