import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const GiftSection = () => {
  return (
    <section className="relative z-10 px-6 py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-5xl mx-auto"
      >
        {/* TITLE */}
        <motion.div variants={fadeUp} className="text-center mb-28">
          <p className="text-[11px] tracking-[0.6em] uppercase text-[#d6c28f]/80 mb-6">
            Wedding Gift
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-8">
            Tanda Kasih
          </h2>

          <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            Kehadiran dan doa restu Anda merupakan kebahagiaan terbesar bagi
            kami. Namun apabila berkenan, tanda kasih dapat disampaikan melalui:
          </p>
        </motion.div>

        {/* LUXURY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* BANK */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[36px] p-12 border border-white/10 "
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#d6c28f] mb-8">
              Transfer Bank
            </p>

            <h3 className="font-serif text-3xl font-light mb-4">BCA</h3>
            <p className="text-xl tracking-widest mb-2">1234567890</p>
            <p className="text-sm text-white/60 mb-10">a.n. Ahmad Fauzan</p>

            <button
              onClick={() => navigator.clipboard.writeText("1234567890")}
              className="text-[10px] tracking-[0.4em] uppercase border-b border-white/40 pb-2 hover:text-[#d6c28f] transition"
            >
              Salin Rekening
            </button>
          </motion.div>

          {/* ADDRESS */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[36px] p-12 border border-white/10"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#d6c28f] mb-8">
              Kado Fisik
            </p>

            <h3 className="font-serif text-3xl font-light mb-6">
              Alamat Pengiriman
            </h3>

            <p className="text-sm text-white/70 leading-relaxed mb-10">
              Jl. Soekarno Hatta
              <br />
              Kecamatan Raba
              <br />
              Kota Bima, 84113
            </p>

            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  "Jl. Soekarno Hatta, Kecamatan Raba, Kota Bima, 84113"
                )
              }
              className="text-[10px] tracking-[0.4em] uppercase border-b border-white/40 pb-2 hover:text-[#d6c28f] transition"
            >
              Salin Alamat
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GiftSection;
