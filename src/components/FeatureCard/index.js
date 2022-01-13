import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFeaturedPosts } from "../../helpers/core";

const FeatureCard = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);

  const loadAllPosts = () => {
    getFeaturedPosts()
      .then((data) => {
        if (data.error) {
          setError(error);
          console.log(error);
        } else {
          setPosts(data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // eslint-disable-next-line
    loadAllPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        {posts.map((post, i) => {
          return (
            <div
              key={i}
              className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
            >
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={post.thumbnail}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {post.title}
                </h1>
                <p className="mb-8 leading-relaxed">{post.excerpt}</p>
                <div className="flex justify-center">
                  <Link to={`blog/${post.slug}`}>
                    <button className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FeatureCard;
