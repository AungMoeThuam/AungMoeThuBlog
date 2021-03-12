import React, { useMemo } from "react";
import img1 from "../assets/svg/hello.svg";

const About = () => {
  const imgMemo = useMemo(
    () => <img src={img1} className=" w-auto h-auto " alt="img1" />,
    [img1]
  );
  return (
    <div className="flex justify-center py-10 ">
      <div className=" w-3/4 flex flex-col">
        <h1 className=" text-center text-5xl  font-bold">Hello Guys!</h1>
        <p className="text-justify text-2xl pt-5 pb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel id,
          repellendus quas perspiciatis ea repudiandae eius, dolore libero
          cupiditate unde explicabo inventore maxime officiis itaque. Itaque
          reiciendis facere eos nisi!
        </p>
        {imgMemo}
      </div>
    </div>
  );
};

export default About;
