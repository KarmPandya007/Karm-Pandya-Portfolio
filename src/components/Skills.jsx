import React from "react";
import { motion } from "framer-motion";
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
import githublogo from "../assets/SkillsPhotos/githublogo.svg";
import gitlogo from "../assets/SkillsPhotos/gitlogo.png";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 cursor-default"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 transition-colors group-hover:bg-blue-600/10">
        <img src={skill.logo} alt={skill.name} className="h-7 w-7 transition-all duration-300" />
      </div>
      <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-50 py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-600">
            Stack
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
            My Creative <span className="text-blue-600">Toolkit</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            A curated selection of technologies I use to build scalable,
            high-performance digital products.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
