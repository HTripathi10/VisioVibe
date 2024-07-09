import React from "react";
import { FaUser } from "react-icons/fa";

const commentsData = [
  {
    name: "Harshit Tripathi",
    text: "hello hi how are you",
    replies: [],
  },
  {
    name: "Harshit Tripathi",
    text: "hello hi how are you",
    replies: [
      {
        name: "Harshit Tripathi",
        text: "hello hi how are you",
        replies: [],
      },
      {
        name: "Harshit Tripathi",
        text: "hello hi how are you",
        replies: [
          {
            name: "Harshit Tripathi",
            text: "hello hi how are you",
            replies: [],
          },
          {
            name: "Harshit Tripathi",
            text: "hello hi how are you",
            replies: [
              {
                name: "Harshit Tripathi",
                text: "hello hi how are you",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Harshit Tripathi",
    text: "hello hi how are you",
    replies: [],
  },
  {
    name: "Harshit Tripathi",
    text: "hello hi how are you",
    replies: [],
  },
  {
    name: "Harshit Tripathi",
    text: "hello hi how are you",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <FaUser className="text-2xl" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
