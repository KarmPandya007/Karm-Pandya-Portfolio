import React from "react";
import foodieshubphoto1 from "../assets/ProjectPhotos/foodieshubphoto1.png";
import mosointeriorphoto2 from "../assets/ProjectPhotos/mosointeriorphoto2.png";
import scenicphoto1 from "../assets/ProjectPhotos/scenicphoto1.png";
import bookhivephoto from "../assets/ProjectPhotos/BookHive Photo .png";

const projects = [
  {
    title: "Book Hive",
    description:
      "A library-management frontend demonstrating CRUD operations and UI patterns.",
    type: "Deployed Project",
    image: bookhivephoto,
    link: "https://book-hive-frontend-library-manageme.vercel.app/",
  },
  {
    title: "Scenic",
    description:
      "A creative media agency website built with React and Tailwind CSS.",
    type: "Personal Project",
    image: scenicphoto1,
    link: "https://scenic-react-tailwind.vercel.app/",
  },
  {
    title: "Foodie's Hub",
    description:
      "A React & Tailwind web app for exploring and cooking global recipes.",
    type: "Personal Project",
    image: foodieshubphoto1,
    link: "https://github.com/KarmPandya007/Foodies-Hub-React-Tailwind",
  },
  {
    title: "Moso Interior",
    description:
      "A modern React & Tailwind website showcasing home decor and furniture.",
    type: "Personal Project",
    image: mosointeriorphoto2,
    link: "https://github.com/KarmPandya007/Moso-Interior-React-Tailwind",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            A focused selection of recent builds across product design and
            frontend development.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {project.description}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => window.open(project.link)}
                    className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    View Project
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

export default Projects;
