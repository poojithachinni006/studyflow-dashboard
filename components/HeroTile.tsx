"use client";

import { motion } from "framer-motion";

const tileVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function HeroTile() {
  return (
    <motion.article
      variants={tileVariants}
      className="
      relative
      overflow-hidden
      rounded-3xl
      p-8
      min-h-[280px]
      border border-zinc-800
      bg-gradient-to-br
      from-[#0f172a]
      via-[#111827]
      to-black"
    >
      
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl" />
      <div
  className="
  absolute
  inset-0
  opacity-5
  bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
  bg-[size:40px_40px]"
/>
     
      <div className="relative z-10 flex justify-between h-full">
        <div>
          <p className="text-green-400 font-medium mb-2">
            👋 Welcome Back
          </p>

          <h1 className="text-5xl font-normal leading-tight">
            Poojitha
          </h1>

          <p className="mt-4 text-zinc-400 max-w-md">
            Keep building your skills and stay consistent with your
            learning journey.
          </p>

          <button
            className="
            mt-6
            px-5
            py-3
            rounded-xl
            bg-green-500
            text-black
            font-medium
            hover:bg-green-400
            transition"
          >
            Continue Learning
          </button>
        </div>

       
        <div
          className="
          bg-white/5
          backdrop-blur-md
          border border-white/10
          rounded-2xl
          p-5
          w-48
          h-fit"
        >
          <p className="text-sm text-zinc-400">
            Weekly Goal
          </p>

          <h3 className="text-3xl font-semibold mt-2">
            70%
          </h3>


          <div className="mt-4 h-2 bg-zinc-800 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 1 }}
              className="
              h-full
              bg-green-500
              rounded-full"
            />
          </div>

          <p className="mt-3 text-sm text-green-400">
            On Track 🚀
          </p>
        </div>
        <div
          className="
          bg-white/5
          backdrop-blur-md
          border border-white/10
          rounded-2xl
          p-5
          w-48
          h-fit"
        >
          <p className="text-sm text-zinc-400">
            Courses Taken
          </p>

          <h3 className="text-3xl font-semibold mt-2">
            50%
          </h3>
          

          <div className="mt-4 h-2 bg-zinc-800 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 1 }}
              className="
              h-full
              bg-green-500
              rounded-full"
            />
          </div>

          <p className="mt-3 text-sm text-green-400">
            On Track 🚀
          </p>
        </div>
      </div>
    </motion.article>
  );
}
