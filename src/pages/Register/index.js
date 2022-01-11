import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { LockClosedIcon } from "@heroicons/react/solid";
import { signup } from "../../helpers/auth";
import {
  notifyRegisterError,
  notifyRegisterSuccess,
} from "../../helpers/toast";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
    success: false,
    error: "",
  });

  const router = useHistory();

  const { username, email, first_name, last_name, password, password2 } =
    values;

  const handleChange = (username) => (event) => {
    setValues({ ...values, error: false, [username]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({
      username,
      email,
      password2,
      password,
      first_name,
      last_name,
    })
      .then((data) => {
        console.log(data);
        if (data.email === email) {
          setValues({
            ...values,
            username: "",
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            password2: "",
            success: true,
          });
          notifyRegisterSuccess();
          router.push("/login");
        } else {
          setValues({
            ...values,
            error: true,
            success: false,
          });
          notifyRegisterError();
        }
      })
      .catch((err) => notifyRegisterError(err));
  };

  return (
    <div>
      <Helmet>
        <title>Koding Handle | Register</title>
      </Helmet>

      <div
        style={{ marginBottom: "2em" }}
        className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register Now !
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"> </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Username
                </label>
                <input
                  id="name"
                  name="name"
                  value={username}
                  onChange={handleChange("username")}
                  type="name"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Firstname
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  value={first_name}
                  onChange={handleChange("first_name")}
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Firstname"
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Lastname
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  value={last_name}
                  onChange={handleChange("last_name")}
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Lastname"
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange("email")}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange("password")}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password2}
                  onChange={handleChange("password2")}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Comfirm Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between"></div>

            <div>
              <button
                type="submit"
                onClick={onSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
