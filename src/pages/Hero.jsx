import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Cover({ onOpen }) {
  return (
    <motion.section
      className="fixed inset-0 z-50 overflow-hidden bg-gray-900 select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Dimmer */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* ================= CORNER ORNAMENTS ================= */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Ornamen Pojok Kiri Atas */}
        <motion.img
          src="/ornamen/flower-top-left.png"
          alt="Corner Ornament"
          className="absolute top-0 left-0 w-36 sm:w-48 md:w-64 h-auto opacity-20 object-contain origin-top-left"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Ornamen Pojok Kanan Bawah */}
        <motion.img
          src="/ornamen/flower-bottom-right.png"
          alt="Corner Ornament"
          className="absolute bottom-0 right-0 w-36 sm:w-48 md:w-64 h-auto opacity-20 object-contain origin-bottom-right"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
      {/* ==================================================== */}

      {/* Content Container */}
      <div
        className="
          relative
          z-20
          flex
          h-full
          w-full
          items-center
          justify-center
          px-6
          py-4
        "
      >
        {/* Scroll wrapper cadangan untuk HP super pendek/kecil */}
        <div className="w-full max-w-lg max-h-full overflow-y-auto no-scrollbar">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center py-4"
          >
            {/* Arabic */}
            <p className="text-sm md:text-lg text-white/90 leading-relaxed tracking-wide">
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>

            {/* Ornament Center */}
            <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
              <div className="h-px w-14 bg-white/30" />
              <div className="h-2 w-2 rounded-full bg-white/70" />
              <div className="h-px w-14 bg-white/30" />
            </div>

            {/* Label */}
            <p className="mt-4 md:mt-6 text-[10px] md:text-[11px] uppercase tracking-[0.45em] text-white/60">
              The Wedding Of
            </p>

            {/* Names */}
            <div className="mt-6 md:mt-8 space-y-2 md:space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-white">
                Ratina
              </h1>

              <p className="text-lg md:text-xl text-white/70">&</p>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-white">
                Fikram{" "}
                <span className="text-white/70 text-2xl sm:text-3xl md:text-4xl">
                  (Qa)
                </span>
              </h1>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 my-6 md:my-8">
              <div className="h-px w-16 bg-white/30" />
              <div className="h-2 w-2 rounded-full bg-white/60" />
              <div className="h-px w-16 bg-white/30" />
            </div>

            {/* Date Info (Diubah Mencakup Dua Acara) */}
            <div className="space-y-2">
              <p className="uppercase tracking-[0.35em] text-[10px] md:text-xs text-amber-400 font-medium">
                Sabtu & Minggu
              </p>

              <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide">
                04 & 05 Juli 2026
              </h2>

              <p className="text-white/60 text-xs uppercase tracking-[0.15em]">
                Kecamatan Lambu, Kabupaten Bima
              </p>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpen}
              className="
                mt-8
                md:mt-10
                inline-flex
                w-full
                sm:w-auto
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
                px-10
                py-3.5
                text-xs
                md:text-sm
                uppercase
                tracking-[0.25em]
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              <FaEnvelopeOpenText className="text-base md:text-lg" />
              Buka Undangan
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
