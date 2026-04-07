import { motion } from "framer-motion";

const fadeCurtain = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const ClosingSection = () => {
  return (
    <section className="relative z-10 px-6 mt-12 mb-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* SMALL OPENING */}
        <motion.p
          variants={fadeCurtain}
          className="text-[11px] tracking-[0.45em] uppercase text-white/40 mb-20"
        >
          With Gratitude
        </motion.p>

        {/* MESSAGE */}
        <motion.p
          variants={fadeCurtain}
          className="text-sm md:text-base leading-relaxed text-white/65 mb-24"
        >
          Dengan penuh rasa syukur atas kasih dan penyertaan Tuhan
          <br />
          dalam perjalanan hidup pernikahan kami,
          <br />
          kami mengundang Bapak/Ibu/Saudara/i
          <br />
          untuk turut hadir dalam perayaan
          <br />
          50 Tahun Pernikahan kami.
          <br />
          <br />
          Kehadiran serta doa yang tulus
          <br />
          akan menjadi sukacita dan berkat
          <br />
          bagi kami dan keluarga.
        </motion.p>

        {/* NAMES */}
        <motion.h3
          variants={fadeCurtain}
          className="font-serif text-4xl md:text-5xl font-light leading-tight"
        >
          Drs. Afan Christian
          <span className="block italic text-[#d6c28f] my-6">&</span>
          Meliana
        </motion.h3>

        {/* SIGNATURE LINE */}
        <motion.p
          variants={fadeCurtain}
          className="mt-24 text-[11px] tracking-[0.4em] uppercase text-white/45"
        >
          Celebrating 50 Years of Love
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ClosingSection;
