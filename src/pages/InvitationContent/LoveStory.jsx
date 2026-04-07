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
            Their Journey
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            A Lifetime of Love
          </h2>
        </motion.div>

        {/* Story */}
        <div className="space-y-10 text-center">
          <motion.p
            variants={fadeItem}
            className="text-sm leading-relaxed text-white/65"
          >
            What began as two separate paths slowly became one shared journey.
            Through the seasons of life — in joy, in challenges, and in quiet
            moments — they continued walking side by side.
          </motion.p>

          <motion.p
            variants={fadeItem}
            className="text-sm leading-relaxed text-white/65"
          >
            Together they built a life filled with love, patience, faith, and
            countless memories that shaped the story they share today.
          </motion.p>

          <motion.p
            variants={fadeItem}
            className="text-sm leading-relaxed text-white/65"
          >
            This celebration is not only about the years that have passed, but
            about the beautiful journey that continues — hand in hand, heart
            with heart.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
