import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden ">
      {/* Ambient Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full " />
      </div>

      {/* Floating Dust */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        <div className="w-full h-full bg-[url('/galeri/grain.avif')] opacity-10" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-2xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Ornament Circle */}
        <motion.div
          variants={fadeUp}
          className="relative inline-flex items-center justify-center mb-12"
        >
          <div className="absolute w-64 h-64 rounded-full border border-white/20" />
          <div className="absolute w-80 h-80 rounded-full border border-white/10" />

          {/* FE Logo */}
          <h2 className="font-serif text-6xl md:text-8xl text-white tracking-tight italic relative z-10">
            F<span className="text-stone-300 mx-1">/</span>E
          </h2>
        </motion.div>

        {/* Date */}
        <motion.p
          variants={fadeUp}
          className="text-white/80 tracking-[0.35em] text-xs md:text-sm mb-6"
        >
          12 • OCTOBER • 2026
        </motion.p>

        {/* Caption */}
        <motion.p
          variants={fadeUp}
          className="text-white/70 uppercase tracking-[0.5em] text-[10px] md:text-xs"
        >
          The Wedding of Fakhri & Evi
        </motion.p>
      </motion.div>
    </section>
  );
}
