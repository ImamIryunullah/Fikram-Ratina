import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Cover({ onOpen }) {
  return (
    <motion.section
      className="fixed inset-0 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background */}{" "}
      <img
        src="/galeri/pexels-dream_-makkerzz-1603229-30431565.webp"
        alt="Wedding Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      ```
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end items-center text-center px-6 pb-16 md:pb-24">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md"
        >
          <p
            className="
          text-xs
          md:text-sm
          tracking-[0.35em]
          uppercase
          mb-4
          text-white
        "
          >
            Undangan Pernikahan
          </p>

          <h1
            className="
          font-serif
          text-5xl
          md:text-7xl
          leading-none
          text-white
        "
          >
            Budi
          </h1>

          <div
            className="
          text-white
          text-xl
          md:text-2xl
          my-3
          font-light
        "
          >
            &
          </div>

          <h1
            className="
          font-serif
          text-5xl
          md:text-7xl
          leading-none
          text-white
        "
          >
            Nabila
          </h1>

          <p
            className="
          mt-6
          text-sm
          md:text-base
          tracking-[0.2em]
          text-white
        "
          >
            Jumat, 26 Juni 2026
          </p>

          <motion.button
            onClick={onOpen}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
          mt-8
          inline-flex
          items-center
          gap-3
          bg-white
          text-black
          px-8
          py-3
          rounded-full
          text-sm
          tracking-[0.15em]
          uppercase
          shadow-lg
        "
          >
            <FaEnvelopeOpenText />
            Buka Undangan
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
