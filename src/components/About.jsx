import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const contact = {
  email: "karmpandya007@gmail.com",
  phone: "+91 9878051490",
  location: "Ahmedabad, Gujarat, India",
  linkedin: "linkedin.com/in/karm-pandya-055ba9363",
};

const topSkills = ["Web Engineering", "Next.js", "Technical Project Leadership", "Full-stack Arch", "Database Optimization"];

const summary = [
  "Backend-focused full-stack developer with hands-on experience building reliable, scalable web applications.",
  "Comfortable owning the stack, with strength in backend architecture, API design, and efficient data handling.",
  "Delivers modern, responsive interfaces that integrate cleanly with production systems.",
  "Driven by continuous learning, collaboration, and practical problem-solving.",
];

const experience = [
  {
    company: "TechStack India",
    role: "MERN Stack Developer",
    dates: "Sept 2025 - Present",
    location: "Ahmedabad, India",
  },
  {
    company: "GDG (Google Developers Group)",
    role: "Web Lead",
    dates: "Feb 2024 - Present",
    location: "Ahmedabad, India",
    highlights: [
      "Led web initiatives, mentored peers, and delivered community-facing projects.",
      "Collaborated across Web Development and Artificial Intelligence programs.",
      "Organized technical workshops for 500+ attendees.",
    ],
  },
  {
    company: "RAPYD",
    role: "Web Development Intern",
    dates: "July 2025 - Sept 2025",
    location: "Ahmedabad, India",
  },
  {
    company: "Way To Code Technologies",
    role: "React Developer",
    dates: "Jan 2025 - June 2025",
    location: "Ahmedabad, India",
    highlights: [
      "Built production-ready interfaces with React and Next.js.",
      "Optimized frontend performance and Core Web Vitals.",
    ],
  },
];

const education = [
  {
    school: "Silver Oak University",
    program: "B.Tech, Computer Engineering",
    dates: "2023 - 2027",
  },
  {
    school: "National High School",
    program: "Higher Secondary (HSC)",
    dates: "2021 - 2023",
  },
];

const About = () => {
  const containerRef = useRef();
  const leftColRef = useRef();
  const rightColRef = useRef();

  useGSAP(() => {
    const leftItems = leftColRef.current.children;
    const rightItems = rightColRef.current.children;

    gsap.from(leftItems, {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: leftColRef.current,
        start: "top 85%",
      }
    });

    gsap.from(rightItems, {
      x: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rightColRef.current,
        start: "top 85%",
      }
    });

  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="bg-white py-16 sm:py-20 lg:py-32 overflow-hidden relative">
      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div ref={leftColRef} className="space-y-10">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-xs font-black uppercase tracking-[0.4em] text-blue-600"
              >
                Information
              </motion.span>
              <h2 className="mt-4 text-5xl font-black tracking-tight text-slate-900 sm:text-7xl">
                The <span className="text-blue-600">Profile</span>.
              </h2>
              <p className="mt-6 text-lg text-slate-500 font-medium leading-relaxed">
                A dedicated engineer focused on bridging the gap between complex
                backend systems and intuitive user interfaces.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10 shadow-2xl shadow-slate-200/50">
              <h3 className="text-xl font-black text-slate-900 mb-8 border-b border-slate-200 pb-4">
                Connect Directly
              </h3>
              <dl className="space-y-6">
                {[
                  { label: "Email", value: contact.email, icon: "fa-envelope" },
                  { label: "Phone", value: contact.phone, icon: "fa-phone" },
                  { label: "Location", value: contact.location, icon: "fa-location-dot" },
                ].map((item) => (
                  <div key={item.label} className="group">
                    <dt className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</dt>
                    <dd className="flex items-center gap-3 text-slate-900 font-bold group-hover:text-blue-600 transition-colors">
                      <i className={`fa-solid ${item.icon} text-slate-300 group-hover:text-blue-500 transition-colors`}></i>
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-2xl shadow-slate-200/50">
              <h3 className="text-xl font-black text-slate-900 mb-8 border-b border-slate-200 pb-4">Core Focus</h3>
              <div className="flex flex-wrap gap-3">
                {topSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: "#eff6ff", color: "#2563eb" }}
                    className="rounded-xl border border-slate-100 bg-white px-5 py-3 text-xs font-black text-slate-600 shadow-sm transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div ref={rightColRef} className="space-y-12">
            <div className="rounded-[2.5rem] bg-slate-900 p-10 sm:p-12 shadow-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-blue-500"></span>
                Professional Summary
              </h3>
              <ul className="space-y-6 text-slate-300">
                {summary.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <i className="fa-solid fa-code text-blue-500 mt-1"></i>
                    <span className="text-base font-medium leading-relaxed tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-10 pl-4 border-l-4 border-blue-600">Experience</h3>
              <div className="space-y-8">
                {experience.map((role) => (
                  <div key={`${role.company}-${role.role}`} className="group relative bg-white rounded-3xl p-8 border border-slate-50 shadow-xl shadow-slate-100/50 hover:border-blue-100 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-black text-slate-900">{role.role}</h4>
                        <p className="text-blue-600 font-black text-sm uppercase tracking-widest">{role.company}</p>
                      </div>
                      <div className="text-xs font-black text-slate-400 bg-slate-50 px-4 py-2 rounded-full whitespace-nowrap">
                        {role.dates}
                      </div>
                    </div>
                    {role.highlights && (
                      <ul className="space-y-3">
                        {role.highlights.map((h) => (
                          <li key={h} className="text-sm text-slate-500 font-medium flex gap-3">
                            <span className="text-blue-400">â€¢</span> {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-10 pl-4 border-l-4 border-slate-200">Education</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {education.map((item) => (
                  <div key={item.school} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                    <h4 className="text-lg font-black text-slate-900 mb-2">{item.school}</h4>
                    <p className="text-sm text-slate-600 font-bold mb-4">{item.program}</p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
                      {item.dates}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
