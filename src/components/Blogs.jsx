import React from "react";
import blog1photo from "../assets/BlogPhotos/blog1photo.png";
import blog2photo from "../assets/BlogPhotos/blog2photo.png";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "7 Best Tips for React Developers to Write Clean and Efficient Code",
    type: "React Engineering",
    image: blog1photo,
    link: "https://medium.com/@karmpandya14/7-best-tips-for-react-developers-to-write-clean-and-efficient-code-b46a6c9fe7a7",
  },
  {
    title: "Master the S.O.L.I.D. Principles: Write Cleaner and Smarter Code",
    type: "System Architecture",
    image: blog2photo,
    link: "https://medium.com/@karmpandya14/master-the-s-o-l-i-d-principles-write-cleaner-smarter-code-d1c58f04fd69",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Blogs = () => {
  return (
    <section id="blogs" className="bg-slate-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-600">
            Insights
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
            Latest from the <span className="text-blue-600">Forge</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Thought leadership on modern web architecture and developmental efficiency.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.title}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/50 transition-all hover:border-blue-100 md:flex-row h-full"
            >
              <div className="overflow-hidden md:w-80">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-64 w-full object-cover transition-transform duration-1000 group-hover:scale-105 md:h-full"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-blue-500"></span>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                      {blog.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                </div>
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(blog.link)}
                    className="inline-flex items-center gap-3 rounded-xl bg-slate-50 px-8 py-4 text-sm font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-900 hover:text-white"
                  >
                    Dive In
                    <i className="fa-solid fa-arrow-right-long text-xs"></i>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
