import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function CoupleSection() {
  return (
    <section className="relative py-12 px-6 overflow-hidden">
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="mb-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.6em] text-white/60 mb-6">
            The Couple
          </p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-white">
            Drs. Afan Christian <span className="italic text-stone-300">&</span>{" "}
            Meliana
          </h2>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          {/* Left – Groom (Dominant Portrait) */}
          <motion.div variants={fadeScale} className="md:col-span-7">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/galeri/afan.webp"
                alt="Afan"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div variants={fadeUp} className="mt-10">
              <h3 className="font-serif text-3xl md:text-4xl text-white">
                Drs. Afan Christian
              </h3>
            </motion.div>
          </motion.div>

          {/* Right – Bride (Refined Portrait) */}
          <motion.div variants={fadeScale} className="md:col-span-5">
            <motion.div variants={fadeUp} className="mb-10 max-w-sm">
              <h3 className="font-serif text-3xl md:text-4xl text-white">
                Meliana
              </h3>
            </motion.div>

            <div className="relative aspect-[2/3] overflow-hidden">
              <img
                src="/galeri/meliana.webp"
                alt="Meliana"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
