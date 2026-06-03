"use client";

import { useState } from "react";
import { Home, BookOpen, User } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { name: "Home", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Profile", icon: User },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-20 bg-zinc-950 border-r border-zinc-800 p-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className="relative w-full mb-3 p-3"
          >
            {active === item.name && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-zinc-800 rounded-xl"
              />
            )}

            <Icon className="relative z-10 mx-auto" />
          </button>
        );
      })}
    </nav>
  );
}