import React, { useRef } from "react";
import cv from "../assets/Karm Pandya Resume.pdf";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Animate } from "react-move";
import ParticlesBackground from "./ParticlesBackground";

const highlights = [
  "Product-ready UI with a clear design system.",
  "Performance-focused React builds and API integration.",
  "Collaborative delivery with clear documentation.",
];

const stats = [
  { label: "Projects shipped", value: "7+" },
  { label: "Core stacks", value: "MERN" },
  { label: "Availability", value: "Open" },
];

const Intro = () => {
  const container = useRef();
  const titleRef = useRef();

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
    });
  }, { scope: container });

  const downloadcv = () => {
    window.open(cv);
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" ref={container} className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-32">
      <ParticlesBackground />

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 lg:flex-row relative z-10">
        <motion.div
          className="flex flex-1 flex-col gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="w-2 h-[1px] bg-blue-600"></span>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-600">
              MERN Stack Expert
            </span>
          </motion.div>

          <div>
            <div className="overflow-hidden">
              <h1 ref={titleRef} className="text-7xl font-black tracking-tighter text-slate-900 sm:text-9xl leading-[0.8] mb-4">
                Karm <br className="hidden sm:block" /> Pandya
              </h1>
            </div>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-2xl font-bold text-slate-600 sm:text-4xl tracking-tight"
            >
              Architecting <span className="text-blue-600">Digital</span> Experiences.
            </motion.p>
          </div>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-lg leading-relaxed text-slate-500 font-medium"
          >
            I specialize in building robust full-stack applications that combine
            bulletproof backend logic with high-performance, fluid interfaces.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5 mt-4"
          >
            <motion.a
              href={cv}
              download
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-10 py-5 text-sm font-bold text-white shadow-2xl transition-shadow hover:shadow-blue-200"
              onClick={downloadcv}
            >
              <i className="fa-solid fa-download"></i>
              Get Resume
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center rounded-2xl border-2 border-slate-200 bg-white px-10 py-5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-blue-500 hover:text-blue-600"
            >
              View Work
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full max-w-md flex-1"
        >
          <div className="group relative w-full rounded-[3rem] border border-white/50 bg-white/40 p-10 shadow-3xl backdrop-blur-2xl transition-all hover:bg-white/60">
            <div className="absolute inset-0 rounded-[3rem] border border-blue-100/50 -z-10 bg-gradient-to-br from-blue-50/50 to-transparent"></div>

            <div className="flex items-center justify-between">
              <Animate
                start={{ opacity: 0, x: -20 }}
                enter={{ opacity: [1], x: [0], timing: { duration: 1000, delay: 1000 } }}
              >
                {(state) => (
                  <h2 style={{ opacity: state.opacity, transform: `translateX(${state.x}px)` }} className="text-2xl font-black text-slate-900 italic tracking-tighter">
                    Snapshot
                  </h2>
                )}
              </Animate>
              <div className="flex gap-1.5">
                {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>)}
              </div>
            </div>

            <ul className="mt-10 space-y-6 text-base text-slate-600 font-bold">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + (index * 0.15) }}
                  className="flex items-center gap-4 group/item"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <span className="group-hover/item:text-slate-900 transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + (index * 0.1) }}
                  className="flex flex-col gap-1"
                >
                  <p className="text-2xl font-black text-slate-900 tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-500/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
