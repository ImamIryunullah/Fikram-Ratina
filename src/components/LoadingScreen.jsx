import { motion } from "framer-motion";

const LoadingScreen = ({ progress }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center "
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center">
        {/* ROTATING RING */}
        <motion.div
          className="absolute w-44 h-44 rounded-full border border-[#d6c28f]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* SVG PROGRESS */}
        <svg width="160" height="160" className="rotate-[-90deg]">
          {/* Background Circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#d6c28f"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ ease: "easeOut" }}
          />
        </svg>

        {/* CENTER CONTENT */}
        <div className="absolute text-center">
          <motion.h1
            className="font-serif text-4xl tracking-wide text-[#d6c28f]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            F&nbsp;&nbsp;E
          </motion.h1>

          <p className="mt-2 text-[10px] tracking-[0.35em] uppercase text-white/40">
            Loading
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
