import { motion } from "framer-motion";

export default function HeroSection() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="relative min-h-screen px-6 py-12">
      <motion.div
        className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Arabic */}
        <motion.p
          variants={fadeUp}
          className="mb-4 text-lg md:text-xl text-white"
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>
        ```
        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mb-10 text-[11px] md:text-xs uppercase tracking-[0.45em] text-white/70"
        >
          Undangan Pernikahan
        </motion.p>
        {/* Photo */}
        <motion.div
          variants={fadeUp}
          className="relative mb-10 w-[240px] md:w-[320px] aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-[32px]"
        >
          <img
            src="/galeri/eb78eea9bf8c8e055c59ca249628bf69.webp"
            alt="Budi & Nabila"
            className="h-full w-full object-cover"
          />
        </motion.div>
        {/* Names */}
        <motion.div variants={fadeUp}>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-none">
            Budi
          </h1>

          <div className="my-3 text-2xl md:text-3xl text-white/80">&</div>

          <h1 className="font-serif text-5xl md:text-7xl text-white leading-none">
            Nabila
          </h1>
        </motion.div>
        {/* Divider */}
        <motion.div variants={fadeUp} className="my-8 flex items-center gap-4">
          <div className="h-px w-12 bg-white/30" />
          <span className="text-white/70">✦</span>
          <div className="h-px w-12 bg-white/30" />
        </motion.div>
        {/* Date */}
        <motion.div variants={fadeUp}>
          <p className="text-sm uppercase tracking-[0.35em] text-white/70">
            Jumat
          </p>

          <p className="mt-2 font-serif text-2xl md:text-3xl text-white">
            26 Juni 2026
          </p>
        </motion.div>
        {/* Quote */}
        <motion.p
          variants={fadeUp}
          className="mt-10 max-w-md text-sm md:text-base leading-relaxed text-white/75"
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu agar kamu cenderung dan merasa tenteram
          kepadanya."
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-2 text-xs tracking-[0.25em] uppercase text-white/50"
        >
          QS. Ar-Rum : 21
        </motion.p>
      </motion.div>
    </section>
  );
}
