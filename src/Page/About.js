import React, { useMemo, useEffect, useState } from "react";
import img1 from "../assets/svg/hello.svg";
import CircularProgress from "@material-ui/core/CircularProgress";
import { motion } from "framer-motion";

const About = () => {
  const [loading, setLoading] = useState(true);

  const imgMemo = useMemo(
    () => <img src={img1} className=" w-auto h-96 " alt="img1" />,
    [img1]
  );
  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 1000, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=" h-screen   flex justify-center items-center"
    >
      <div className="flex justify-center py-10 bg-yellow-400 h-full ">
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
    </motion.div>
  );
};

export default About;
