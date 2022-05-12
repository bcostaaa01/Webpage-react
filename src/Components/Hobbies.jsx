import React from "react";

export const Hobbies = () => {
  const hobbies = [
    "Coding",
    "Listening to music",
    "Traveling",
    "Reading",
    "Kayaking",
  ];

  return hobbies.map((hobby, index) => {
    return (
      <div className="hobbies">
        <li key={index}>{hobby}</li>
      </div>
    );
  });
};
