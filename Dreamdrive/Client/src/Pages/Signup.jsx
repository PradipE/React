import React from "react";
import Button from "../Component/Button";
function Signup() {
  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 ">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <form>
          <div className="">
            <label htmlFor="Username"
            className="block text-sm font-medium text-gray-700">
            Username
            </label>
            <input
            type="text"
            id="Username"
            name="Usename"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
            <label
            htmlFor="Confirmpassword"
            className="block text-sm font-medium text-gray-700"
            >
             Confirm Password
            </label>
            <input
            type="password"
            id="Confirmpassword"
            name="Confirmpassword"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className=" ml-8 mt-7">
            <Button text="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
