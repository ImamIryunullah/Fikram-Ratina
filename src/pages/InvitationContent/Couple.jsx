import { motion } from "framer-motion";

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
      duration: 0.8,
    },
  },
};

export default function CoupleSection() {
  return (
    <section className="py-24 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-20">
          {" "}
          <p className="uppercase tracking-[0.4em] text-xs text-white/60 mb-4">
            Mempelai{" "}
          </p>
          ```
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Budi & Nabila
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-white/20" />
            <span className="text-white/60">✦</span>
            <div className="h-px w-12 bg-white/20" />
          </div>
        </motion.div>

        {/* Couple Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Groom */}
          <motion.div variants={fadeUp} className="text-center">
            <div className="overflow-hidden rounded-t-[999px] rounded-b-[24px] mb-8">
              <img
                src="/galeri/472ff3d6dbfb12a3a68fc470dbc88173.webp"
                alt="Budi"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Budi
            </h3>

            <p className="text-white/70 text-sm leading-7">
              Putra Pertama dari
              <br />
              Bapak Ahmad & Ibu Siti
            </p>
          </motion.div>

          {/* Bride */}
          <motion.div variants={fadeUp} className="text-center">
            <div className="overflow-hidden rounded-t-[999px] rounded-b-[24px] mb-8">
              <img
                src="/galeri/ec7fb18ee2a6b5082595b67995fb013a.webp"
                alt="Nabila"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Nabila
            </h3>

            <p className="text-white/70 text-sm leading-7">
              Putri Pertama dari
              <br />
              Bapak Hidayat & Ibu Rahma
            </p>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.div variants={fadeUp} className="text-center mt-20">
          <p className="text-white/70 max-w-xl mx-auto leading-8">
            Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud
            menyelenggarakan acara pernikahan putra-putri kami.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
