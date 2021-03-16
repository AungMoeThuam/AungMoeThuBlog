import React, { useState } from "react";
import * as Ti from "react-icons/ti";
import * as Go from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../assets/svg/slack.svg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [slider, setSlider] = useState(false);

  return (
    <nav className=" flex justify-between  items-center py-2 px-2 shadow-md font-mono relative h-16  ">
      <div className=" text-xl font-bold px-5   ">
        <Link
          className="flex justify-between items-center hover:text-gray-400 "
          to="/AungMoeThuBlog/"
        >
          <div>
            <img src={logo} className=" border rounded-full p-1 w-10" />
          </div>
          <div className=" px-2  ">
            <h1>AMT</h1>
          </div>
        </Link>
      </div>

      <div
        onClick={() => setSlider(!slider)}
        className="md:hidden text-4xl cursor-pointer hover:text-yellow-500"
      >
        {slider ? <Go.GoX /> : <Ti.TiThMenu />}
      </div>
      <AnimatePresence>
        {" "}
        {slider ? <Dropdown setSlider={setSlider} /> : null}
      </AnimatePresence>

      <div className="hidden md:block ">
        <Link className="p-4 hover:text-gray-400 " to="/AungMoeThuBlog/">
          Home
        </Link>

        <Link className="p-4 hover:text-gray-400" to="/blogs">
          Blogs
        </Link>

        <Link className="p-4 hover:text-gray-400" to="/contact">
          Contact
        </Link>

        <Link className="p-4 hover:text-gray-400" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

const hover = "w-full hover:bg-yellow-400 p-4 ";
const item = [
  { name: "Home", animation: hover, to: "/AungMoeThuBlog/" },
  { name: "Blogs", animation: hover, to: "/blogs" },
  { name: "Contact", animation: hover, to: "/contact" },
  { name: "About", animation: hover, to: "/about" },
];

const Dropdown = ({ setSlider }) => {
  const a =
    "absolute top-16 left-0 w-full flex flex-col text-center border-yellow-500 border-b-4 bg-white  md:hidden  ";

  function setSlider2() {
    setSlider(false);
  }

  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -500, opacity: 0 }}
      transition={{ duration: 0.7 }}
      // onMouseLeave={() => {
      //   setSlider(false);
      // }}
      className={a}
    >
      {item.map((item, index) => {
        return (
          <DropdownItem
            name={item.name}
            key={index}
            to={item.to}
            OnClick={setSlider2}
            ClassName={item.animation}
          />
        );
      })}
    </motion.div>
  );
};

function DropdownItem({ to, ClassName, OnClick, name }) {
  return (
    <Link className={ClassName} onClick={OnClick} to={to}>
      {name}
    </Link>
  );
}
