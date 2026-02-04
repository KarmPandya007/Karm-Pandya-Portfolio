import React, { useState } from "react";
import navlogo from "../assets/navlogo.jpg";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left"
        style={{ scaleX }}
      />
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <img
            src={navlogo}
            alt="Karm Pandya logo"
            className="h-9 w-9 rounded-full border border-slate-200 object-cover shadow-sm"
          />
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Karm Pandya
          </span>
        </motion.div>

        <div className="hidden items-center gap-8 text-sm font-bold text-slate-700 md:flex">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative transition-colors hover:text-blue-600 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-blue-600"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars-staggered"}`}></i>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200/80 bg-white overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-2 p-6 text-sm font-bold text-slate-700">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl px-4 py-3 transition-all hover:bg-slate-50 hover:text-blue-600 active:scale-95"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
