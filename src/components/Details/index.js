import React, { useEffect, useState } from "react";
import { getPost } from "../../helpers/core";
import moment from "moment";
import parse from "html-react-parser";
import { Helmet } from "react-helmet";

const Details = ({ slug }) => {
  const [blog, setBlog] = useState({});
  const [error, setError] = useState("");

  const loadPost = () => {
    getPost(slug)
      .then((data) => {
        if (data.error) {
          setError(error);
          console.log(error);
        } else {
          setBlog(data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadPost();
  });

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  return (
    <div>
      <Helmet>
        <title>{blog.title}</title>
      </Helmet>

      <div className="bg-white mt-10 shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className=" overflow-hidden shadow-md mb-6">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                Haidarali
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">
                {moment(blog.date_created).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">
            {capitalizeFirstLetter(blog.title)}
          </h1>
          {/* <div dangerouslySetInnerHTML={createBlog()}></div> */}
          {parse(`${blog.content}`)}
        </div>
      </div>
    </div>
  );
};

export default Details;
