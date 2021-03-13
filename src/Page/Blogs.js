import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Blogs = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => setTimeout(() => setLoading(false), 300), []);
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
    <div className="h-screen w-screen flex justify-center items-center">
      {loading === false ? (
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
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

const Button = ({ name, action }) => {
  return (
    <button
      onClick={action}
      className="py-2 w-28 h-12 px-4 shadow-md  rounded-full bg-red-600 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-black hover:bg-red-light focus:outline-none active:shadow-none"
    >
      {name}
    </button>
  );
};

export default Blogs;
