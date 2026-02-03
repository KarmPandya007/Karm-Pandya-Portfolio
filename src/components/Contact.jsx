import React from "react";

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
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-12">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Let's build something together
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Have a project in mind or want to collaborate? Send a message and
              I'll get back to you.
            </p>
          </div>

          <form className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800 md:w-fit"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 flex flex-col items-center gap-3 text-sm text-slate-600">
            <span>Or connect with me:</span>
            <div className="flex flex-wrap justify-center gap-3">
              {contacts.map((contact) => (
                <button
                  key={contact.label}
                  onClick={() => window.open(contact.link)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
                >
                  <i className={`fa-brands ${contact.icon}`}></i>
                  {contact.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
