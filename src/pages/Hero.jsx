import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Cover({ onOpen }) {
  return (
    <motion.section
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/galeri/cov.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        <p className="tracking-[0.3em] text-sm mb-6 uppercase">
          The Wedding Of
        </p>

        <h1 className="font-serif text-4xl md:text-6xl mb-4">
          Fakhri <span className="mx-3">&</span> Evi
        </h1>

        <p className="text-sm md:text-base tracking-widest mb-10">
          Minggu, 12 Oktober 2026
        </p>

        {/* Button */}
        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 border border-white px-8 py-3 tracking-widest uppercase text-sm hover:bg-white hover:text-black transition"
        >
          <FaEnvelopeOpenText className="text-lg transition group-hover:scale-110" />
          Buka Undangan
        </motion.button>
      </motion.div>

      {/* Credit / Creator */}
      <motion.div
        className="absolute bottom-6 text-xs tracking-widest text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        Created with love by{" "}
        <span className="font-semibold text-yellow-600">Jejak Momen</span>
      </motion.div>
    </motion.section>
  );
}
