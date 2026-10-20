import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/mstjulie",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.043.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .322.216.696.825.576C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
      ),
    },

    {
      name: "Facebook",
      href: "https://www.facebook.com/karima.yeasmin.504942",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.696 4.533-4.696 1.312 0 2.686.235 2.686.235v2.973h-1.514c-1.491 0-1.956.93-1.956 1.887v2.261h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      ),
    },

    {
      name: "Instagram",
      href: "https://www.instagram.com/karima55153/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mst-karima-yeasmin-25804a3b4/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 9h3.558v11.452H3.555V9zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-slate-950 w-full py-12 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-8">

        {/* Logo / Copyright */}
        <div className="space-y-4 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg font-bold text-slate-200"
          >
            JULIE_PORTFOLIO
          </motion.h2>

          <p className="font-sans text-xs uppercase tracking-widest text-slate-500">
            © 2026 JULIE_PORTFOLIO. All rights reserved. Built with precision.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full flex items-center justify-center text-slate-500 bg-slate-900 border border-white/10 hover:text-blue-400 hover:border-blue-400/40 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Social Names
        <div className="flex gap-5 flex-wrap justify-center">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-slate-500 hover:text-blue-400 transition-colors duration-200 text-sm"
            >
              {social.name}
            </motion.a>
          ))}
        </div> */}

      </div>
    </footer>
  );
};

export default Footer;