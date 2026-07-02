import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 }, // Dikurangi efek y-nya agar transisi lebih smooth dan rapat
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const MapEmbed = ({ src }) => {
  return (
    // Margin atas diturunkan dari mt-10 ke mt-6 agar peta tidak terlalu jauh ke bawah
    <div className="overflow-hidden rounded-3xl mt-6">
      <iframe
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[280px] sm:h-[320px] md:h-[420px]"
      />
    </div>
  );
};

export default function EventSection() {
  return (
    // Padding vertikal dipangkas dari py-24 menjadi py-12 di mobile dan py-20 di desktop
    <section className="py-12 md:py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        {/* Jarak bawah dikurangi dari mb-16 menjadi mb-10 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-white/60 mb-2">
            Save The Date
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white">
            Waktu & Tempat Acara
          </h2>
        </motion.div>

        {/* Cards Container (Akad & Resepsi) */}
        {/* Jarak bawah dikurangi dari mb-16 menjadi mb-10, gap di mobile dirapatkan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {/* CARD 1: AKAD NIKAH */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center flex flex-col justify-between"
          >
            <div>
              <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-amber-400/80 mb-2 font-medium">
                ✦ Akad Nikah ✦
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                Sabtu
              </h3>

              <div className="font-serif text-5xl md:text-6xl font-bold mb-1 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                04
              </div>
              <div className="font-serif text-lg md:text-xl text-white/80 mb-4">
                Juli 2026
              </div>

              <p className="text-white/90 font-medium text-xs md:text-sm tracking-wide mb-4">
                Pukul 09:00 WITA
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="font-serif text-base md:text-lg text-white mb-1">
                Masjid Al-Marhamah
              </p>
              <p className="text-[11px] md:text-xs text-white/60 uppercase tracking-wider">
                Desa Soro-Melayu
              </p>
            </div>
          </motion.div>

          {/* CARD 2: RESEPSI */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center flex flex-col justify-between"
          >
            <div>
              <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-amber-400/80 mb-2 font-medium">
                ✦ Resepsi ✦
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                Minggu
              </h3>

              <div className="font-serif text-5xl md:text-6xl font-bold mb-1 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                05
              </div>
              <div className="font-serif text-lg md:text-xl text-white/80 mb-4">
                Juli 2026
              </div>

              <p className="text-white/90 font-medium text-xs md:text-sm tracking-wide mb-4">
                Pukul 15:00 WITA
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="font-serif text-base md:text-lg text-white mb-1">
                Kediaman Mempelai
              </p>
              <p className="text-[11px] md:text-xs text-white/60 leading-relaxed uppercase tracking-wider">
                Jalan Pantai Lariti <br />
                RT. 06 RW. 03 Desa Soro, Kec. Lambu
              </p>
            </div>
          </motion.div>
        </div>

        {/* Location Maps */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[10px] md:text-xs text-white/60 mb-1">
            Peta Lokasi
          </p>
          <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em] px-2">
            Desa Soro, Kecamatan Lambu, Kabupaten Bima
          </p>

          <MapEmbed src="https://maps.google.com/maps?q=Desa%20Soro%20Lambu%20Bima&t=&z=14&ie=UTF8&iwloc=&output=embed" />

          {/* Margin atas tombol dikurangi dari mt-8 menjadi mt-5 */}
          <a
            href="https://maps.google.com/?q=Desa+Soro+Lambu+Bima"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 text-[11px] md:text-xs tracking-[0.2em] uppercase border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300"
          >
            Lihat Lokasi di Google Maps →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
