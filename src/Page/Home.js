import React, { useEffect, useState } from "react";
import home3 from "../assets/img/home3.jpg";
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => setTimeout(() => setLoading(false), 300), []);
  return (
    <div className=" w-screen  flex justify-center items-center  h-screen ">
      {loading === false ? (
        <div
          style={{
            backgroundImage: `url(${home3})`,
          }}
          className=" bg-cover w-full bg-center md:bg-cover flex p-10 justify-center text-white items-center font-extrabold text-6xl h-screen "
        >
          <div className=" border-8 text-center rounded-2xl p-10 border-white hover:bg-white hover:text-gray-900 ">
            <h1>Hello Friends!</h1>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Home;
