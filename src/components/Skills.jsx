import React from "react";
import htmllogo from "../assets/SkillsPhotos/html5-original.svg";
import csslogo from "../assets/SkillsPhotos/css3-original.svg";
import tailwindlogo from "../assets/SkillsPhotos/tailwind.svg";
import bootstraplogo from "../assets/SkillsPhotos/bootstrap.svg";
import jslogo from "../assets/SkillsPhotos/javascript-original.svg";
import reactlogo from "../assets/SkillsPhotos/react-original.svg";
import nodejslogo from "../assets/SkillsPhotos/nodejs-original.svg";
import expresslogo from "../assets/SkillsPhotos/express-original.svg";
import mongodblogo from "../assets/SkillsPhotos/mongodb-original.svg";
import typescriptlogo from "../assets/SkillsPhotos/typescript-original.svg";
import nextjslogo from "../assets/SkillsPhotos/nextjs-original.svg";
import postmanlogo from "../assets/SkillsPhotos/postman-original.png";

const skills = [
  { name: "HTML", logo: htmllogo },
  { name: "CSS", logo: csslogo },
  { name: "Tailwind", logo: tailwindlogo },
  { name: "Bootstrap", logo: bootstraplogo },
  { name: "JavaScript", logo: jslogo },
  { name: "React", logo: reactlogo },
  { name: "Next.js", logo: nextjslogo },
  { name: "Node.js", logo: nodejslogo },
  { name: "Express", logo: expresslogo },
  { name: "MongoDB", logo: mongodblogo },
  { name: "TypeScript", logo: typescriptlogo },
  { name: "Postman", logo: postmanlogo },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Tools and technologies
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <img src={skill.logo} alt={skill.name} className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-slate-700">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
