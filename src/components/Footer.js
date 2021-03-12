import React from "react";
import { Link } from "react-router-dom";
import * as icon from "react-icons/im";
import * as icon2 from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black h-auto md:h-72 p-8 text-white text-center text-base font-bold">
      <h1 className="text-2xl font-bold">Respect Our Vote !</h1>
      <div className="flex  flex-col md:flex-row items-start  md:items-center md:justify-between pt-8">
        <div className="flex flex-col items-start pb-5 md:pb-0">
          <Link>ABout us</Link>
          <Link>Policy</Link>
          <Link>Terms and Services</Link>
          <Link>ABout us</Link>
        </div>
        <div className="flex flex-col items-start  pb-5 md:pb-0">
          <Link>ABout us</Link>
          <Link>Policy</Link>
          <Link>Terms and Services</Link>
          <Link>ABout us</Link>
        </div>
        <div className="flex flex-col items-start  pb-5 md:pb-0">
          <Link>ABout us</Link>
          <Link>Policy</Link>
          <Link>Terms and Services</Link>
          <Link>ABout us</Link>
        </div>

        <div className="flex flex-col items-start  pb-5 md:pb-0 ">
          <Link>
            <div className="flex items-center   ">
              <icon.ImFacebook className="mr-2" />
              <div>Facebook</div>
            </div>
          </Link>
          <Link>
            <div className="flex items-center ">
              <icon.ImTwitter className=" mr-2" />
              <div> Twitter</div>
            </div>
          </Link>
          <a href="https://www.youtube.com">
            <div className="flex items-center ">
              <icon.ImYoutube className=" mr-2" />
              <div> Youtube</div>
            </div>
          </a>
          <a href="https://www.instagram.com">
            <div className="flex items-center  ">
              <icon.ImInstagram className=" mr-2" />
              <div> Instagram</div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center p-6">
        <div className="pr-3">2020 copy right reserved </div>
        <icon2.FaCopyright />
      </div>
    </div>
  );
};

export default Footer;
