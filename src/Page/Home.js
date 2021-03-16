import React, { useEffect, useState } from "react";
import home3 from "../assets/img/home3.jpg";
import CircularProgress from "@material-ui/core/CircularProgress";
import { motion } from "framer-motion";

const Home = (props) => {
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 1000, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="   flex justify-center items-center  h-screen "
    >
      <div
        style={{
          backgroundImage: `url(${home3})`,
        }}
        className=" bg-cover w-full bg-center md:bg-cover flex p-10 justify-center text-white items-center font-extrabold  text-3xl md:text-6xl h-screen "
      >
        <div className=" border-8 text-center rounded-2xl p-10 border-white hover:bg-white hover:text-gray-900 transition transform hover:scale-125 duration-300">
          <h1>Hello Friends!</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
