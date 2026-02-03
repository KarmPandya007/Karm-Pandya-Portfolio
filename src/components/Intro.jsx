import React from "react";
import cv from "../assets/Karm Pandya Resume.pdf";

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
  const downloadcv = () => {
    window.open(cv);
  };

  return (
    <section id="home" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <span className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Portfolio
          </span>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Karm Pandya
            </h1>
            <p className="mt-3 text-lg font-medium text-slate-600 sm:text-xl">
              MERN Stack Developer
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-600">
            I build reliable full-stack products with clean UI, scalable APIs, and
            thoughtful user experiences. Focused on performance, maintainability,
            and shipping with confidence.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={cv}
              download
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
              onClick={downloadcv}
            >
              <i className="fa-solid fa-download"></i>
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="flex w-full max-w-md flex-1">
          <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Value proposition
              </h2>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Snapshot
              </span>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-400"
                  ></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-4 text-center"
                >
                  <p className="text-base font-semibold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
