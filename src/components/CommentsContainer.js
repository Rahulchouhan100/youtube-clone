import React from "react";
import profileImg from "../assests/profile-user.png";

const CommentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rahul Chouhan",
    text: "This episode is awesome 😁",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  // console.log();
  return (
    <>
      <div className="flex border gap-2 bg-gray-100 p-2 rounded-lg my-2">
        <img src={profileImg} alt="" className="w-7 h-7 rounded-full" />
        <div>
          <p className="font-semibold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, ind) => (
    <div>
      <Comment data={comment} key={ind} />
      <div className="pl-5 border-l-2 ml-5 ">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold mt-4">comments :</h1>
        <CommentList comments={CommentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
