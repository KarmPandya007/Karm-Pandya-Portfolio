import React from "react";
import foodieshubphoto1 from "../assets/ProjectPhotos/foodieshubphoto1.png";
import mosointeriorphoto2 from "../assets/ProjectPhotos/mosointeriorphoto2.png";
import scenicphoto1 from "../assets/ProjectPhotos/scenicphoto1.png";
import bookhivephoto from "../assets/ProjectPhotos/BookHive Photo .png";
import crudapisphoto from "../assets/ProjectPhotos/crudapisphoto.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Book Hive",
    description:
      "A library-management system built using Next.js, ShadCN, Express and MongoDB demonstrating CRUD operation with Authentication and UI patterns.",
    type: "Library",
    image: bookhivephoto,
    link: "https://book-hive-frontend-library-manageme.vercel.app/",
  },
  {
    title: "Scenic",
    description:
      "Premium React, Tailwind CSS 4, and Lucide agency site with elite glassmorphic aesthetics. Cinematic UX powered by GSAP and Framer Motion.",
    type: "Creative Agency",
    image: scenicphoto1,
    link: "https://scenic-react-tailwind.vercel.app/",
  },
  {
    title: "CRUD APIs",
    description:
      "Production-style CRUD REST API using Node.js and Express.js, focusing on scalable architecture, clean routing, middleware patterns, and backend best practices.",
    type: "Crud APIs with Authentication and Rate limiting",
    image: crudapisphoto,
    link: "https://github.com/KarmPandya007/Express-crud-apis",
  },
  {
    title: "Foodie's Hub",
    description:
      "A React & Tailwind web app for exploring and cooking global recipes.",
    type: "Web App",
    image: foodieshubphoto1,
    link: "https://github.com/KarmPandya007/Foodies-Hub-React-Tailwind",
  },
  {
    title: "Moso Interior",
    description:
      "A modern React & Tailwind website showcasing home decor and furniture.",
    type: "E-commerce",
    image: mosointeriorphoto2,
    link: "https://github.com/KarmPandya007/Moso-Interior-React-Tailwind",
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
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16 sm:py-20 lg:py-32 relative">
      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-600">
            Showcase
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
            Selected <span className="text-blue-600">Artworks</span>.
          </h2>
          <p className="mt-6 text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Every project is a fusion of clean architecture and expressive design,
            built to solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-10 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/50 transition-all hover:border-blue-100 hover:shadow-blue-500/10"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.open(project.link)}
                    className="bg-white text-slate-900 px-8 py-3 rounded-2xl text-sm font-bold shadow-xl flex items-center gap-2"
                  >
                    View Project <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </motion.button>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-10">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                    {project.type}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-slate-500 font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex gap-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-100"></div>)}
                  </div>
                  <i className="fa-solid fa-code text-slate-200"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
