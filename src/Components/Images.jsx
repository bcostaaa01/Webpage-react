import React from "react";

export const Images = () => {
  const images = [
    {
      url: "https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/arnold-francisca-f77Bh3inUpE-unsplash.jpg",
    },
    {
      url: "https://cdn.vox-cdn.com/thumbor/QBd-weHk-R6U6dgcQ9PDapibjkc=/0x0:6454x4303/1200x800/filters:focal(2711x1636:3743x2668)/cdn.vox-cdn.com/uploads/chorus_image/image/70463229/shutterstock_1886570575.0.jpg",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/1680x560/970024.jpg?k=3948a48d073c6ce0255d3af13fcd321084fdd8d24ba66cc737f4d59db71e8aec&o=",
    },
    {
      url: "https://media.wired.com/photos/5955c3573ff99d6b3a1d165c/master/pass/books.jpg",
    },
    { url: "https://i.ytimg.com/vi/L1r_iMTRbFM/0.jpg" },
  ];

  return images.map((image) => {
    return (
      <>
        <img src={image.url} alt="" height={100} />
      </>
    );
  });
};
