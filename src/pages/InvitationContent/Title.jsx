import { motion } from "framer-motion";

export default function HeroSection() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.6,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const photoReveal = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-12">
      {/* Vertical Line */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/10" />

      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-center text-center max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mb-6 text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/60"
        >
          Together with their families
        </motion.p>

        {/* Monogram */}
        <motion.h1
          variants={fadeUp}
          className="font-serif text-[72px] md:text-[120px] italic tracking-tight text-white leading-none"
        >
          F<span className="text-stone-300 mx-2">/</span>E
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="mx-auto my-12 h-px w-24 bg-white/30"
        />

        {/* PREWEDDING PHOTO */}
        <motion.div
          variants={photoReveal}
          className="relative mx-auto mb-16 w-[220px] md:w-[280px] aspect-[3/4] overflow-hidden rounded-[2.5rem] border border-white/15"
        >
          <img
            src="/galeri/prew.webp" // ganti dengan foto kamu
            alt="Prewedding"
            className="w-full h-full object-cover"
          />

          {/* Soft overlay supaya nyatu */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </motion.div>

        {/* Names */}
        <motion.p
          variants={fadeUp}
          className="font-serif text-xl md:text-2xl tracking-wide text-white"
        >
          Fakhri <span className="text-stone-300 mx-2">&</span> Evi
        </motion.p>

        {/* Date */}
        <motion.p
          variants={fadeUp}
          className="mt-6 tracking-[0.35em] text-xs md:text-sm text-white/80"
        >
          12 OCTOBER 2026
        </motion.p>
      </motion.div>
    </section>
  );
}
