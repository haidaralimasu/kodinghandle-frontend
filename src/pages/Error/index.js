import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>Koding Handle | Error</title>
      </Helmet>

      <div
        class="
    flex
    items-center
    justify-center
    w-screen
    h-screen
bg-indigo-600
  "
      >
        <div class="px-40 py-20 bg-white rounded-md shadow-xl">
          <div class="flex flex-col items-center">
            <h1 class="font-bold text-indigo-700 text-9xl">404</h1>

            <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span class="text-indigo-700">Oops!</span> Page not found
            </h6>

            <p class="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              to="/"
              class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
