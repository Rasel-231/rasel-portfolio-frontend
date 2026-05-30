"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SkillSection() {
  const socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rasel-rasel-7707b240b",
      viewBox: "0 0 24 24",
      path: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-3.368-4-3.113-4 0v5.6h-3v-10h3v1.6c1.396-2.586 7-2.777 7 2.476v5.924z",
    },
    {
      name: "GitHub",
      link: "https://github.com/Rasel-231",
      viewBox: "0 0 24 24",
      path: "M12 .5C5.649.5.5 5.649.5 12c0 5.084 3.292 9.388 7.865 10.91.575.106.785-.25.785-.556 0-.274-.01-1.003-.015-1.97-3.197.694-3.87-1.542-3.87-1.542-.523-1.33-1.277-1.684-1.277-1.684-1.044-.714.08-.7.08-.7 1.154.082 1.76 1.185 1.76 1.185 1.026 1.76 2.69 1.252 3.35.957.104-.743.402-1.252.73-1.54-2.553-.29-5.238-1.276-5.238-5.678 0-1.254.448-2.28 1.183-3.083-.118-.29-.513-1.453.112-3.03 0 0 .964-.31 3.16 1.18a10.96 10.96 0 0 1 2.88-.388c.976.004 1.96.132 2.88.388 2.195-1.49 3.158-1.18 3.158-1.18.626 1.577.23 2.74.113 3.03.737.803 1.182 1.83 1.182 3.083 0 4.413-2.69 5.384-5.255 5.668.413.356.78 1.06.78 2.14 0 1.545-.014 2.792-.014 3.17 0 .308.208.667.79.553C20.71 21.383 24 17.08 24 12 24 5.649 18.351.5 12 .5z",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/nihon6825",
      viewBox: "0 0 24 24",
      path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/qr/6WJI3FBOMYBRL1",
      viewBox: "0 0 24 24",
      path: "M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.59 0 .34 5.24.34 11.7c0 2.06.54 4.07 1.57 5.85L0 24l6.65-1.86a11.66 11.66 0 0 0 5.41 1.38h.01c6.47 0 11.72-5.25 11.72-11.72a11.67 11.67 0 0 0-3.27-8.32z",
    },
  ];

  const skills = [
    { name: "MongoDB", link: "https://www.mongodb.com", border: "border-green-700", bg: "bg-green-900/20", text: "text-green-400" },
    { name: "Next.js", link: "https://nextjs.org", border: "border-gray-500", bg: "bg-gray-800/20", text: "text-gray-300" },
    { name: "React", link: "https://reactjs.org", border: "border-cyan-700", bg: "bg-cyan-900/20", text: "text-cyan-400" },
    { name: "Tailwind", link: "https://tailwindcss.com", border: "border-teal-700", bg: "bg-teal-900/20", text: "text-teal-400" },
    { name: "Node.js", link: "https://nodejs.org", border: "border-green-800", bg: "bg-green-900/20", text: "text-green-300" },
    { name: "PostgreSQL", link: "https://www.postgresql.org", border: "border-blue-700", bg: "bg-blue-900/20", text: "text-blue-400" },
    { name: "TypeScript", link: "https://www.typescriptlang.org", border: "border-blue-800", bg: "bg-blue-900/20", text: "text-blue-300" },
  ];

  return (
    <div className="flex flex-col gap-4 py-3">
      {/* Socials */}
      <div className="flex flex-wrap gap-3">
        {socials.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-700 hover:border-indigo-400 bg-gray-900/50 transition-colors"
          >
            <svg viewBox={item.viewBox} className="w-5 h-5" fill="currentColor">
              <path d={item.path} />
            </svg>
          </motion.a>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <motion.a
            key={i}
            href={skill.link}
            target="_blank"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-1.5 rounded-sm border ${skill.border} ${skill.bg} backdrop-blur-sm cursor-pointer shadow-lg`}
          >
            <span className={`text-xs font-bold uppercase tracking-wider ${skill.text}`}>
              {skill.name}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}