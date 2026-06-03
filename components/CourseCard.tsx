"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface Props {
  title: string;
  progress: number;
  icon_name: string;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function CourseCard({
  title,
  progress,
  icon_name,
}: Props) {
  const Icon =
    (Icons as any)[icon_name] ||
    Icons.BookOpen;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow:
          "0px 0px 30px rgba(16,185,129,0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      p-6
      bg-gradient-to-br
      from-zinc-900
      via-zinc-900
      to-black
      border border-zinc-800"
    >
     
      <div
        className="
        absolute
        inset-0
        opacity-40
        bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_40%)]
      "
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Top Row */}
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-xl bg-emerald-500/10">
            <Icon
              size={24}
              className="text-emerald-400"
            />
          </div>

          <span
            className="
            px-3
            py-1
            rounded-full
            bg-emerald-500/10
            text-emerald-400
            text-xs"
          >
            In Progress
          </span>
        </div>

      
        <h3
          className="
          mt-5
          text-[20px]
          font-normal
          leading-tight"
        >
          {title}
        </h3>

       
        <p
          className="
          mt-2
          text-sm
          text-zinc-400"
        >
          20 Lessons
        </p>

        <div className="mt-6">
          <div className="h-2 bg-zinc-800 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 1,
              }}
              className="
              h-full
              bg-emerald-500
              rounded-full"
            />
          </div>

          <div className="flex justify-between mt-3">
            <span className="text-sm text-zinc-400">
              Progress
            </span>

            <span className="text-sm text-emerald-400 font-medium">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
