import { motion } from "framer-motion";

const fadeSoft = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const MapEmbed = ({ src }) => {
  return (
    <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10">
      {/* Soft overlay supaya elegan */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

      <iframe
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[300px] md:h-[360px] grayscale contrast-105"
      />
    </div>
  );
};

export default function EventSection() {
  return (
    <section className="relative px-6 py-28">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSoft}
          className="text-center mb-24"
        >
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#d6c28f]/80 mb-4">
            The Event
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            Akad & Resepsi
          </h2>
        </motion.div>

        {/* Event List */}
        <div className="space-y-24">
          {/* Akad */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center"
          >
            <span className="block text-[11px] tracking-[0.5em] uppercase text-[#d6c28f] mb-6">
              Akad Nikah
            </span>

            <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-2">
              Sabtu
            </h3>

            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-6">
              12 Agustus 2026
            </p>

            <p className="font-serif text-5xl md:text-6xl font-light text-white mb-8">
              08.00 WIB
            </p>

            <div className="w-12 h-px bg-[#d6c28f]/60 mx-auto mb-8" />

            <p className="text-sm text-white/65 leading-relaxed">
              Masjid Penaraga
              <br />
              Kota Bima
            </p>

            {/* MAP */}
            <MapEmbed src="https://www.google.com/maps?q=Masjid+Penaraga+Kota+Bima&output=embed" />

            {/* CTA */}
            <a
              href="https://maps.app.goo.gl/BaaKBmPUWGJuBuA66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-[10px] tracking-[0.4em] uppercase border-b border-white/40 pb-2 hover:text-[#d6c28f] transition"
            >
              Buka di Google Maps
            </a>
          </motion.div>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-px h-24 bg-white/10" />
          </div>

          {/* Resepsi */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleFade}
            className="relative text-center"
          >
            <span className="block text-[11px] tracking-[0.5em] uppercase text-[#d6c28f] mb-6">
              Resepsi
            </span>

            <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-2">
              Sabtu
            </h3>

            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-6">
              12 Agustus 2026
            </p>

            <p className="font-serif text-5xl md:text-6xl font-light text-white mb-8">
              11.00 WIB
            </p>

            <div className="w-12 h-px bg-[#d6c28f]/60 mx-auto mb-8" />

            <p className="text-sm text-white/65 leading-relaxed mb-10">
              Paruga Na'e / Convention Hall
              <br />
              Kota Bima
            </p>

            <MapEmbed src="https://www.google.com/maps?q=-8.4578417,118.7349486&z=17&output=embed" />

            <a
              href="https://maps.app.goo.gl/Lt46JWAauWTRfgum6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-[10px] tracking-[0.4em] uppercase border-b border-white/40 pb-2 hover:text-[#d6c28f] transition"
            >
              Buka di Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
