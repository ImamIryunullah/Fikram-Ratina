import { motion } from "framer-motion";

const fadeItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function LoveStorySection() {
  return (
    <section className="relative px-6 py-28">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeItem}
          className="text-center mb-20"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            A Journey of Two Souls
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-16">
          {/* Item */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeItem}
            className="relative pl-10"
          >
            <span className="absolute left-0 top-1 text-[11px] tracking-widest text-[#d6c28f]">
              2019
            </span>
            <h3 className="font-serif text-xl text-white mb-3">
              The First Encounter
            </h3>
            <p className="text-sm leading-relaxed text-white/65">
              A simple meeting, an unspoken comfort. What began as a moment
              slowly became a place to return to.
            </p>
          </motion.div>

          {/* Item */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeItem}
            className="relative pl-10"
          >
            <span className="absolute left-0 top-1 text-[11px] tracking-widest text-[#d6c28f]">
              2021
            </span>
            <h3 className="font-serif text-xl text-white mb-3">
              Growing Together
            </h3>
            <p className="text-sm leading-relaxed text-white/65">
              Learning patience, understanding differences, and choosing each
              other — every single day.
            </p>
          </motion.div>

          {/* Item */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeItem}
            className="relative pl-10"
          >
            <span className="absolute left-0 top-1 text-[11px] tracking-widest text-[#d6c28f]">
              2026
            </span>
            <h3 className="font-serif text-xl text-white mb-3">
              Forever Begins
            </h3>
            <p className="text-sm leading-relaxed text-white/65">
              With gratitude and love, we choose to walk forward together —
              bound by a promise meant to last a lifetime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
