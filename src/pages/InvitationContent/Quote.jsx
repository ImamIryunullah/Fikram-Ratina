import { motion } from "framer-motion";

export default function QuoteSection() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <section className="py-24 px-6">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Ornament */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4 mb-10"
        >
          {" "}
          <div className="h-px w-12 bg-white/20" />{" "}
          <span className="text-white/60 text-lg">✦</span>{" "}
          <div className="h-px w-12 bg-white/20" />
        </motion.div>
        ```
        {/* Heading */}
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-[0.4em] text-xs text-white/60 mb-8"
        >
          Firman Allah SWT
        </motion.p>
        {/* Arabic */}
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-4xl leading-loose text-white mb-8"
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
          لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً
        </motion.h2>
        {/* Translation */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg leading-8 text-white/80"
        >
          "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri agar kamu merasa
          tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
          sayang."
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-6 text-sm tracking-[0.3em] uppercase text-white/50"
        >
          QS. Ar-Rum : 21
        </motion.p>
        {/* Bottom Ornament */}
      </motion.div>
    </section>
  );
}
