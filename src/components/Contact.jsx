import React from "react";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "LinkedIn",
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/in/karm-pandya-055ba9363/",
  },
  {
    label: "GitHub",
    icon: "fa-github",
    link: "https://github.com/KarmPandya007?tab=repositories",
  },
  {
    label: "X",
    icon: "fa-x-twitter",
    link: "https://x.com/KarmPandya1411",
  },
  {
    label: "Instagram",
    icon: "fa-instagram",
    link: "https://www.instagram.com/kpandya_14/?hl=en",
  },
  {
    label: "WhatsApp",
    icon: "fa-whatsapp",
    link: "https://wa.me/918780543490",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[3rem] border border-slate-100 bg-slate-50 p-8 shadow-3xl sm:p-20 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-100 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-200 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity"></div>

          <div className="relative z-10">
            <div className="text-center">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-600">
                Inquiry
              </span>
              <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-7xl leading-tight">
                Let's Build Your <span className="text-blue-600">Vision</span>
              </h2>
              <p className="mt-8 text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                Searching for a dedicated developer to bring your next big idea to life?
                Let's start a conversation.
              </p>
            </div>

            <form className="mt-16 grid gap-8">
              <div className="grid gap-8 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-2xl border border-transparent bg-white px-8 py-5 text-sm font-bold text-slate-700 shadow-sm focus:border-blue-500 focus:ring-8 focus:ring-blue-500/5 focus:outline-none transition-all placeholder:text-slate-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-2xl border border-transparent bg-white px-8 py-5 text-sm font-bold text-slate-700 shadow-sm focus:border-blue-500 focus:ring-8 focus:ring-blue-500/5 focus:outline-none transition-all placeholder:text-slate-300"
                />
              </div>
              <textarea
                placeholder="What's on your mind?"
                rows={4}
                className="rounded-2xl border border-transparent bg-white px-8 py-5 text-sm font-bold text-slate-700 shadow-sm focus:border-blue-500 focus:ring-8 focus:ring-blue-500/5 focus:outline-none transition-all placeholder:text-slate-300"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-[1.5rem] bg-slate-900 px-12 py-5 text-sm font-black text-white shadow-2xl transition-all hover:bg-blue-600 md:w-fit flex items-center justify-center gap-3"
              >
                Assemble Project
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </motion.button>
            </form>

            <div className="mt-20 flex flex-col items-center gap-8 text-sm font-black text-slate-400">
              <div className="flex items-center gap-6 w-full">
                <span className="h-[1px] flex-1 bg-slate-100"></span>
                <span className="uppercase tracking-[0.3em] text-[10px]">Or find me on</span>
                <span className="h-[1px] flex-1 bg-slate-100"></span>
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                {contacts.map((contact, index) => (
                  <motion.button
                    key={contact.label}
                    whileHover={{ y: -5, backgroundColor: "#0f172a", color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(contact.link)}
                    className="inline-flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-8 py-4 text-xs font-black text-slate-600 shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200"
                  >
                    <i className={`fa-brands ${contact.icon} text-lg`}></i>
                    {contact.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
