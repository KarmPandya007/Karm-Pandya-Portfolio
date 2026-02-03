import React from "react";
import blog1photo from "../assets/BlogPhotos/blog1photo.png";
import blog2photo from "../assets/BlogPhotos/blog2photo.png";

const blogs = [
  {
    title: "7 Best Tips for React Developers to Write Clean and Efficient Code",
    type: "React",
    image: blog1photo,
    link: "https://medium.com/@karmpandya14/7-best-tips-for-react-developers-to-write-clean-and-efficient-code-b46a6c9fe7a7",
  },
  {
    title: "Master the S.O.L.I.D. Principles: Write Cleaner and Smarter Code",
    type: "Architecture",
    image: blog2photo,
    link: "https://medium.com/@karmpandya14/master-the-s-o-l-i-d-principles-write-cleaner-smarter-code-d1c58f04fd69",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Blogs
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Writing and insights
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Notes on front-end craftsmanship, systems thinking, and developer
            productivity.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:flex-row"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover md:h-auto md:w-60"
              />
              <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {blog.type}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {blog.title}
                  </h3>
                </div>
                <div>
                  <button
                    onClick={() => window.open(blog.link)}
                    className="inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    Read Blog
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
