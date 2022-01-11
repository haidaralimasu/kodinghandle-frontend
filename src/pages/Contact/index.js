import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { createContact } from "../../helpers/core";
import { notifyContactSuccess, notifyCommentError } from "../../helpers/toast";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    createContact({ name, email, message })
      .then((data) => {
        console.log(data);
        //eslint-disable-next-line;
        if (data.name === name) {
          //eslint-disable-next-line;
          setValues({
            ...values,
          });
          notifyContactSuccess();
          setValues({
            name: "",
            email: "",
            message: "",
          });
        } else {
          setValues({
            ...values,
          });
          notifyCommentError();
        }
      })
      .catch((error) => notifyCommentError());
  };
  return (
    <div>
      <Helmet>
        <title>Koding Handle | Contact</title>
      </Helmet>

      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChange("name")}
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange("email")}
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="">
                  <label className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={handleChange("message")}
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              <div className="p-2 w-full">
                <button
                  onClick={onSubmit}
                  className="flex justify-center sub-btn mx-auto text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 w-full  rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
