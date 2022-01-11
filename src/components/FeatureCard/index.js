import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
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
      <div className="p-2 m-auto w-1/2"></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {posts.map((post, i) => {
              return (
                <div key={i} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={post.thumbnail}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {post.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{post.excerpt}</p>
                      <div className="flex items-center flex-wrap ">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Continue Reading
                        </Link>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          {moment(post.date_created).format("MMM DD, YYYY")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureCard;
