import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CoupleSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gray-900">
      {/* ================= CSS ORNAMEN BACKGROUND (NON-GAMBAR) ================= */}
      {/* Efek Lingkaran Cahaya Lembut di Kiri & Kanan */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-xs text-white/50 mb-3">
            Mempelai Wanita & Pria
          </p>
          {/* Ornamen Garis & Titik Minimalis */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-white/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
            <div className="h-px w-8 bg-white/20" />
          </div>
        </motion.div>

        {/* Grid Konten MempelaI */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-16">
          {/* MempelaI Wanita */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex-1 w-full text-center group"
          >
            {/* Ornamen Bingkai Geometris Pengganti Foto */}
            <div className="relative mx-auto mb-8 w-24 h-24 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-transform duration-500 group-hover:scale-105">
              <span className="font-serif text-3xl text-white/30 group-hover:text-white/60 transition-colors">
                R
              </span>
              {/* Garis Aksen Sudut Bingkai Luar */}
              <div className="absolute -inset-2 rounded-full border border-dashed border-white/5 scale-90 group-hover:scale-100 transition-transform duration-700" />
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
              Ratina
            </h3>

            {/* Pembatas Nama */}
            <div className="w-12 h-[2px] bg-white/20 mx-auto my-4" />

            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-sm mx-auto font-light">
              Putri dari Bapak{" "}
              <span className="font-medium text-white">A. Hemon</span> dan Ibu{" "}
              <span className="font-medium text-white">Ratnah</span>
            </p>
            <p className="text-xs text-white/50 mt-2 tracking-wider uppercase">
              Desa Soro, Kec. Lambu
            </p>
          </motion.div>

          {/* Ampersand (&) Divider Tengah */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative flex items-center justify-center py-4"
          >
            {/* Garis Vertikal Ornamen (Hanya muncul di Layar Desktop) */}
            <div className="hidden md:block absolute top-[-60px] bottom-[-60px] w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

            <div className="relative z-10 font-serif text-3xl md:text-4xl italic text-white/40 bg-gray-900 px-4 py-2">
              &
            </div>
          </motion.div>

          {/* MempelaI Pria */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex-1 w-full text-center group"
          >
            {/* Ornamen Bingkai Geometris Pengganti Foto */}
            <div className="relative mx-auto mb-8 w-24 h-24 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-transform duration-500 group-hover:scale-105">
              <span className="font-serif text-3xl text-white/30 group-hover:text-white/60 transition-colors">
                F
              </span>
              {/* Garis Aksen Sudut Bingkai Luar */}
              <div className="absolute -inset-2 rounded-full border border-dashed border-white/5 scale-90 group-hover:scale-100 transition-transform duration-700" />
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
              Fikram
            </h3>

            {/* Pembatas Nama */}
            <div className="w-12 h-[2px] bg-white/20 mx-auto my-4" />

            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-sm mx-auto font-light">
              Putra dari Bapak{" "}
              <span className="font-medium text-white">Ridwan</span> dan Ibu{" "}
              <span className="font-medium text-white">Siti Ri</span>
            </p>
            <p className="text-xs text-white/50 mt-2 tracking-wider uppercase">
              Desa Naru Timur, Kec. Sape
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
