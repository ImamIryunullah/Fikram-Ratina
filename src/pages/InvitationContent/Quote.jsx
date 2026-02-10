import { motion } from "framer-motion";

export default function QuoteSection() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative py-12 px-6 overflow-hidden">
      <motion.div
        className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left – Vertical Accent */}
        <motion.div variants={fadeUp} className="hidden md:flex justify-center">
          <div className="h-40 w-px bg-white/20" />
        </motion.div>

        {/* Right – Content */}
        <div className="space-y-10">
          {/* Small Heading */}
          <motion.p
            variants={fadeUp}
            className="text-[11px] uppercase tracking-[0.5em] text-white/60"
          >
            A Sacred Beginning
          </motion.p>

          {/* Statement */}
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl md:text-4xl leading-relaxed text-white"
          >
            Two souls,
            <br />
            one journey,
            <br />
            <span className="italic text-stone-300">
              united by love and promise.
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div variants={fadeUp} className="w-24 h-px bg-white/30" />

          {/* Footnote */}
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.3em] uppercase text-white/50"
          >
            With gratitude and joy
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
