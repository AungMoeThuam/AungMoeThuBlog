import React, { useState } from "react";

const Blogs = () => {
  const [item, setItem] = useState(true);
  const a =
    "border-2 rounded-2xl bg-yellow-500 border-black p-10 hover:bg-black hover:text-white ";
  const [i, setI] = useState(a);
  function deleteItem() {
    setI(
      a +
        "transform  translate-y-full transition duration-700 all-ease-out opacity-10"
    );
  }
  function resetItem() {
    setItem(true);
    setI(a);
  }
  return (
    <div className="h-screen text-4xl text-bold flex justify-center items-center">
      <div>
        <Button action={deleteItem} name="Delete " />
        <Button action={resetItem} name="Reset " />
      </div>

      {item ? (
        <div onTransitionEnd={() => setItem(false)} className={i}>
          <h1>Blogs</h1>
        </div>
      ) : null}
    </div>
  );
};

const Button = ({ name, action }) => {
  return (
    <button
      onClick={action}
      className="p-5 border-2 text-center  w-52 border-black rounded-2xl focus:outline-none"
    >
      {name}
    </button>
  );
};

export default Blogs;
