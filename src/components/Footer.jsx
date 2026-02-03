import React from "react";

const Footer = () => {
  const newDate = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-slate-500">
        <span className="text-base font-semibold text-slate-700">
          Karm Pandya
        </span>
        <p>{newDate} Karm Pandya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
