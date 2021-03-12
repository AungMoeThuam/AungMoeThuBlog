import React, { useMemo, useState } from "react";
import { GoDatabase } from "react-icons/go";
import home3 from "../assets/img/home3.jpg";

const Home = (props) => {
  const imgMemo = useMemo(
    () => (
      <div
        style={{
          backgroundImage: `url(${home3})`,
        }}
        className=" bg-cover bg-center md:bg-cover flex p-10 justify-center text-white items-center font-extrabold text-6xl h-screen "
      >
        <div className=" border-8 text-center rounded-2xl p-10 border-white hover:bg-white hover:text-gray-900 ">
          <h1>Hello Friends!</h1>
        </div>
      </div>
    ),
    [home3]
  );
  return <div> {imgMemo}</div>;
};

export default Home;
