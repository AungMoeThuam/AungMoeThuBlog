import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  const blog = [
    {
      id: 1,
      name: "aung moe thu",
      title:
        "loremLorem ipsum dolor sit amet consectetur adipisicing elit.Evenieta consectetur. Porro iusto nobis modi cum consequuntur aut dolorem esse, accusamus ad Sequi nobis culpa sint asperiores exercitationem estbcaecati?",
    },
    {
      id: 2,
      name: "aung moe",
      title:
        "loremLorem ipsum dolor sit amet consectetur adipisicing elit.Evenieta consectetur. Porro iusto nobis modi cum consequuntur aut dolorem esse, accusamus ad Sequi nobis culpa sint asperiores exercitationem estbcaecati?",
    },
    {
      id: 3,
      name: " moe thu",
      title:
        "loremLorem ipsum dolor sit amet consectetur adipisicing elit.Evenieta consectetur. Porro iusto nobis modi cum consequuntur aut dolorem esse, accusamus ad Sequi nobis culpa sint asperiores exercitationem estbcaecati?",
    },
  ];
  const [blogs, setBlogs] = useState(blog);

  function delBlogs(id) {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }
  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 1000, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=" h-auto text-4xl text-bold flex justify-center items-center"
    >
      <div className="border-2 mt-3 mb-3 rounded-2xl w-3/4 border-black p-10 ">
        <h1 className="text-center mb-10">Contact</h1>
        <AnimatePresence>
          {blogs.map((blog) => {
            return (
              <motion.div
                initial={{ y: -400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={blog.id}
                className="bg-yellow-500 p-2 m-1 rounded-2xl cursor-pointer text-sm md:text-lg"
                onClick={() => delBlogs(blog.id)}
              >
                <h1>{blog.name}</h1>
                <p>{blog.title}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Contact;
