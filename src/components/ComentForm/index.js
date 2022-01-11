import React, { useState } from "react";
import { createComment } from "../../helpers/core";
import { notifyCommentSuccess, notifyCommentError } from "../../helpers/toast";
import { useHistory } from "react-router-dom";

const CommentForm = ({ slug }) => {
  const [values, setValues] = useState({
    comment: "",
  });
  const router = useHistory();

  const { comment } = values;

  const handleChange = (comment) => (event) => {
    setValues({ ...values, [comment]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    createComment({ comment }, slug)
      .then((data) => {
        console.log(data);
        // eslint-disable-next-line
        if (data == comment.comment) {
          setValues({
            ...values,
            comment: "",
          });
          notifyCommentSuccess();
          router.go();
          setValues({ comment: "" });
        } else {
          setValues({
            ...values,
          });
          setValues({ comment: "" });
          notifyCommentSuccess();
        }
      })
      .catch((err) => notifyCommentError());
  };

  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Leave a Comment
        </h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea
            // value={formData.comment}
            // onChange={onInputChange}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            name="comment"
            value={comment}
            onChange={handleChange("comment")}
            placeholder="Comment"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"></div>

        <div className="mt-8">
          <button
            type="button"
            onClick={onSubmit}
            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
