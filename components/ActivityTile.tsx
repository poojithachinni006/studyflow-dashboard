"use client";

import { motion } from "framer-motion";

const activityLevels = [
  "bg-zinc-800",
  "bg-green-900",
  "bg-green-700",
  "bg-green-500",
  "bg-green-400",
];

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

export default function ActivityTile() {
  return (
    <motion.article
      variants={tileVariants}
      className="
      bg-gradient-to-br
      from-zinc-900
      to-zinc-950
      border border-zinc-800
      rounded-3xl
      p-6"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-lg">
          Activity
        </h2>

        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-lg bg-green-500 text-black text-xs font-medium">
            Month
          </button>

          <button className="px-3 py-1 rounded-lg bg-zinc-800 text-xs">
            Week
          </button>

          <button className="px-3 py-1 rounded-lg bg-zinc-800 text-xs">
            Year
          </button>
        </div>
      </div>

      {/* Heatmap */}
      <div className="flex gap-3">
        {/* Days */}
        <div className="flex flex-col justify-between text-xs text-zinc-500">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-5 gap-2">
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className={`
                h-5
                w-10
                rounded
                transition-all
                duration-300
                hover:scale-125
                cursor-pointer
                ${
                  activityLevels[
                    Math.floor(
                      Math.random() * activityLevels.length
                    )
                  ]
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-zinc-500">
          Last 30 days activity
        </p>

        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span>Less</span>

          <div className="flex gap-1">
            {activityLevels.map((color, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded ${color}`}
              />
            ))}
          </div>

          <span>More</span>
        </div>
      </div>
    </motion.article>
  );
}