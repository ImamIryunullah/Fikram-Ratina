import { motion } from "framer-motion";

export default function HeroSection() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative px-6 py-12 md:py-20 flex items-center justify-center">
      <motion.div
        className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Arabic */}
        <motion.p
          variants={fadeUp}
          className="mb-3 text-base md:text-xl text-white"
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mb-4 md:mb-6 text-[10px] md:text-xs uppercase tracking-[0.45em] text-white/70"
        >
          Undangan Pernikahan
        </motion.p>

        {/* Names (Ratina & Fikram) */}
        <motion.div variants={fadeUp} className="space-y-1 md:space-y-2">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-none">
            Ratina
          </h1>

          <div className="text-lg md:text-2xl text-white/70">&</div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-none">
            Fikram{" "}
            <span className="text-white/70 text-xl md:text-4xl">(Qa)</span>
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="my-4 md:my-6 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-white/30" />
          <span className="text-white/70 text-sm">✦</span>
          <div className="h-px w-12 bg-white/30" />
        </motion.div>

        {/* Tiga Rangkaian Acara (Akad, Kapanca, & Resepsi) */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 text-center"
        >
          {/* Info Akad */}
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-amber-400/80 font-medium">
              Akad Nikah
            </p>
            <p className="mt-0.5 font-serif text-base md:text-lg lg:text-xl text-white whitespace-nowrap">
              Sabtu, 04 Juli 2026
            </p>
          </div>

          {/* Pembatas 1 */}
          <div className="hidden md:block h-8 w-px bg-white/20" />

          {/* Info Kapanca */}
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-amber-400/80 font-medium">
              Acara Kapanca
            </p>
            <p className="mt-0.5 font-serif text-base md:text-lg lg:text-xl text-white whitespace-nowrap">
              Sabtu, 04 Juli 2026
            </p>
          </div>

          {/* Pembatas 2 */}
          <div className="hidden md:block h-8 w-px bg-white/20" />

          {/* Info Resepsi */}
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-amber-400/80 font-medium">
              Resepsi
            </p>
            <p className="mt-0.5 font-serif text-base md:text-lg lg:text-xl text-white whitespace-nowrap">
              Minggu, 05 Juli 2026
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
