import React, { useState } from "react";

function SignUp() {
  return (
    <>
      <form className="max-w-md mx-auto my-10 bg-red-500 p-10 rounded-lg">
        <div className="my-5">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-white "
          >
            Your name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Pokar Jabeer"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-white "
          >
            Your Bio
          </label>
          <textarea
            id="message"
            rows="3"
            className="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write a little about yourself"
          ></textarea>
        </div>
        <div className="mb-3 w-96">
          <label className="block mb-2 text-sm font-medium text-white ">
            Add your Best Pic
          </label>
          <input
            className="relative my-5 block w-full min-w-0 flex-auto rounded border  border-none bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-white file:px-3 file:py-[0.32rem] file:text-red-500 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
            type="file"
            id="formFile"
          />
        </div>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-white "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-white "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default SignUp;
