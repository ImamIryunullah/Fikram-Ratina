import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
    },
  },
};

export default function ClosingSection() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Ornament */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {" "}
          <div className="h-px w-12 bg-white/20" />{" "}
          <span className="text-white/60">✦</span>{" "}
          <div className="h-px w-12 bg-white/20" />
        </motion.div>
        ```
        {/* Heading */}
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-[0.4em] text-xs text-white/60 mb-8"
        >
          Terima Kasih
        </motion.p>
        {/* Message */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg leading-8 text-white/75"
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu pada
          hari bahagia kami.
          <br />
          <br />
          Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </motion.p>
        {/* Salam */}
        <motion.p variants={fadeUp} className="mt-12 text-white/80 italic">
          Wassalamu'alaikum Warahmatullahi Wabarakatuh
        </motion.p>
        {/* Names */}
        <motion.div variants={fadeUp} className="mt-16">
          <h3 className="font-serif text-4xl md:text-5xl text-white">Budi</h3>

          <p className="my-4 text-xl text-white/60">&</p>

          <h3 className="font-serif text-4xl md:text-5xl text-white">Nabila</h3>
        </motion.div>
        {/* Footer */}
        <motion.p
          variants={fadeUp}
          className="mt-12 text-xs uppercase tracking-[0.3em] text-white/40"
        >
          26 Juni 2026 • Sape, Kabupaten Bima
        </motion.p>
        {/* Bottom Ornament */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <div className="h-px w-12 bg-white/20" />
          <span className="text-white/60">✦</span>
          <div className="h-px w-12 bg-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
