// src/components/SignupForm.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface SignupFormData {
  username: string;
  password: string;
}

const SignupForm: React.FC = () => {
const [formData, setFormData] = useState<SignupFormData>({
    username: '',
    password: '',
});

const router = useRouter();

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.username == "lalitx17" && formData.password == "1234") {
      router.push("/admin/editor").catch((err) => console.error(err));
    } else {
        formData.username == "" || formData.password == "" ? alert("Please fill all the fields") : alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit} className='border-2 border-black w-1/5 p-4'>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-semibold text-gray-600">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
