import React from "react";

const Hello = (props) => {
  return (
    <div className="bg-white shadow-2xl border rounded-lg w-96 h-72 m-1">
      <div className="text-lg font-extrabold border-b-2 p-3  bg-gray-50">
        <h1>{props.title}</h1>
      </div>
      <div className="p-3 grid grid-cols-1 text-justify ">
        <div>
          <p className="truncate ...">{props.des}</p>
        </div>

        <div className="self-end p-4 ">
          <button className="border rounded-lg p-2 focus:outline-none">
            explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hello;
