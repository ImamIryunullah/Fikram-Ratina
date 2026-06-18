import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Cover({ onOpen }) {
  return (
    <motion.section
      className="fixed inset-0 z-50 bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md text-center"
        >
          {/* Arabic */}
          <p className="text-lg text-white mb-8">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>

          {/* Line */}
          <div className="w-16 h-px bg-white/30 mx-auto mb-8" />

          {/* Label */}
          <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-10">
            Undangan Pernikahan
          </p>

          {/* Names */}
          <h1 className="font-serif text-5xl md:text-6xl text-white">Budi</h1>

          <p className="my-4 text-white/70 text-xl">&</p>

          <h1 className="font-serif text-5xl md:text-6xl text-white">Nabila</h1>

          {/* Line */}
          <div className="w-16 h-px bg-white/30 mx-auto my-10" />

          {/* Date */}
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">
            Jumat
          </p>

          <p className="mt-3 text-xl text-white">26 Juni 2026</p>

          <p className="mt-2 text-sm text-white/60">Sape, Kabupaten Bima</p>

          {/* Button */}
          <button
            onClick={onOpen}
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              border
              border-white/20
              px-8
              py-3
              text-sm
              uppercase
              tracking-[0.2em]
              text-white
              hover:bg-white
              hover:text-black
              transition
            "
          >
            <FaEnvelopeOpenText />
            Buka Undangan
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
