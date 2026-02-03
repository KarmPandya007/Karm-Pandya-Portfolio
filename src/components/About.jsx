import React from "react";

const contact = {
  email: "karmpandya007@gmail.com",
  phone: "+91 9878051490",
  location: "Ahmedabad, Gujarat, India",
  linkedin: "linkedin.com/in/karm-pandya-055ba9363",
};

const topSkills = ["Web Engineering", "Next.js", "Technical Project Leadership"];

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
    dates: "September 2025 - Present (6 months)",
    location: "Ahmedabad, Gujarat",
  },
  {
    company: "Google Developers Group",
    role: "Web Lead",
    dates: "February 2024 - Present (2 years)",
    location: "Ahmedabad, Gujarat",
    highlights: [
      "Led web initiatives, mentored peers, and delivered community-facing projects.",
      "Collaborated across Web Development and Artificial Intelligence programs.",
      "Organized and supported multiple technical events and workshops.",
    ],
  },
  {
    company: "RAPYD",
    role: "Web Development Intern",
    dates: "July 2025 - September 2025 (3 months)",
    location: "Ahmedabad, Gujarat",
  },
  {
    company: "Way To Code Technologies LLP",
    role: "React Developer",
    dates: "January 2025 - June 2025 (6 months)",
    location: "Ahmedabad, Gujarat",
    highlights: [
      "Built real-world projects with React and Next.js using component-based architecture.",
      "Focused on responsive design, Tailwind CSS, and Bootstrap for clean UI delivery.",
      "Strengthened analytical problem-solving and full-stack fundamentals.",
    ],
  },
  {
    company: "ExploitXplorers",
    role: "Technical Lead",
    dates: "April 2024 - January 2025 (10 months)",
    location: "Ahmedabad, Gujarat",
  },
];

const education = [
  {
    school: "Silver Oak University",
    program: "Bachelor of Technology - BTech, Computer Engineering",
    dates: "August 2023 - 2027",
  },
  {
    school: "National High School Ahmedabad",
    program: "Higher Secondary Education",
    dates: "June 2021 - March 2023",
  },
  {
    school: "Asia English School",
    program: "Secondary Education",
    dates: "June 2010 - April 2021",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.5fr]">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Karm Pandya
              </h2>
              <p className="mt-2 text-base text-slate-600 sm:text-lg">
                Backend-Focused Full-Stack Developer | Node.js, Express, Python,
                FastAPI | MongoDB & SQL | React, Next.js | Web Lead @ GDG | AI
                Enthusiast
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Contact
              </h3>
              <dl className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Email</dt>
                  <dd className="text-right font-medium text-slate-700">
                    {contact.email}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Phone</dt>
                  <dd className="text-right font-medium text-slate-700">
                    {contact.phone}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Location</dt>
                  <dd className="text-right font-medium text-slate-700">
                    {contact.location}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">LinkedIn</dt>
                  <dd className="text-right font-medium text-slate-700">
                    {contact.linkedin}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Top skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Summary</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {summary.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-400"
                    ></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Experience
              </h3>
              <div className="mt-4 space-y-5">
                {experience.map((role) => (
                  <div key={`${role.company}-${role.role}`}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {role.role}
                        </p>
                        <p className="text-sm text-slate-600">{role.company}</p>
                      </div>
                      <div className="text-xs text-slate-500 sm:text-right">
                        <p>{role.dates}</p>
                        <p>{role.location}</p>
                      </div>
                    </div>
                    {role.highlights && (
                      <ul className="mt-3 space-y-2 text-sm text-slate-600">
                        {role.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-300"
                            ></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Education</h3>
              <div className="mt-4 space-y-4 text-sm text-slate-600">
                {education.map((item) => (
                  <div key={item.school}>
                    <p className="font-semibold text-slate-900">{item.school}</p>
                    <p>{item.program}</p>
                    <p className="text-xs text-slate-500">{item.dates}</p>
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
