import React, { useState, useEffect } from "react";
import { getComments } from "../../helpers/core";
import moment from "moment";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  const loadAllComments = () => {
    getComments(slug)
      .then((data) => {
        if (data.error) {
          setError(error);
          console.log(error);
        } else {
          setComments(data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadAllComments();
  });

  return (
    <div>
      {comments.length > 0 ? (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>

          {comments.map((comment, index) => {
            return (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4">
                  <span className="font-semibold">{comment.user}</span> on{" "}
                  {moment(comment.date_created).format("MMM DD, YYYY")}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">
                  {comment.comment}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Comments;
