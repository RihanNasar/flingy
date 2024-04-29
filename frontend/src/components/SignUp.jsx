import React from "react";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    image: null,
    email: "",
    password: "",
  });
  function checkPassword(password) {
    // Regular expressions for password criteria
    const lengthRegex = /^.{8,}$/; // Minimum 8 characters
    const lowercaseRegex = /[a-z]/; // At least one lowercase letter

    const digitRegex = /\d/; // At least one digit

    // Check if all criteria are met
    const isLengthValid = lengthRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);

    const hasDigit = digitRegex.test(password);

    return isLengthValid && hasLowercase && hasDigit;
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkPassword(formData.password)) {
      console.log(formData);
      try {
        const response = await fetch("/api/new-reg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Registration done");

          setFormData({
            name: "",
            bio: "",
            image: null,
            email: "",
            password: "",
          });
        } else {
          alert(`Failed to add employee: ${data.error}`);
        }
      } catch (error) {
        console.error("Error adding new member:", error);
        alert("Internal Server Error");
      }
      navigate("/feed");
    } else {
      alert(
        "Password must be at least 8 characters long and contain at least one lowercase letter and one digit."
      );
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <img
          src="/img/logo.png"
          alt=""
          className="m-auto h-16 bg-red-400 rounded-xl"
        />

        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full px-4 py-2.5 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
            placeholder="Pokar Jabeer"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Bio
          </label>
          <textarea
            id="bio"
            rows="3"
            name="bio"
            className="w-full px-4 py-2.5 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write a little about yourself"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-3 w-96">
          <label className="block mb-2 text-sm font-medium text-neutral-800 ">
            Add your Best Pic
          </label>
          <input
            className="relative my-5 block w-full min-w-0 flex-auto rounded border  border-none bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-red-500 file:px-3 file:py-[0.32rem] file:text-white file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
            type="file"
            name="image"
            onChange={handleFileChange}
            id="formFile"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
            placeholder="kaka@gmail.com"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            id="password"
            className="w-full px-4 py-2.5 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
