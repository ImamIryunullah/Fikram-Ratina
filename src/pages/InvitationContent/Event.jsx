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
            The Celebration
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            50th Wedding Anniversary
          </h2>
        </motion.div>

        {/* Event */}
        <div className="space-y-24">
          {/* Thanksgiving Service */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center"
          >
            <span className="block text-[11px] tracking-[0.5em] uppercase text-[#d6c28f] mb-6">
              Thanksgiving Service
            </span>

            <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-2">
              Saturday
            </h3>

            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-6">
              2 May 2026
            </p>

            <p className="font-serif text-5xl md:text-6xl font-light text-white mb-8">
              18.30 WITA
            </p>

            <div className="w-12 h-px bg-[#d6c28f]/60 mx-auto mb-8" />

            <p className="text-sm text-white/65 leading-relaxed">
              Gereja Kemah Injil Ekklesia Bima
              <br />
              Jl. Martadinata No. 20 Tanjung
              <br />
              Kota Bima
            </p>

            <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.2299458569314!2d118.71879177501226!3d-8.450713091589366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db58bcb16477c75%3A0x5fd2f1c7c3af6faf!2sGereja%20Kemah%20Injil%20Ekklesia%20Bima!5e1!3m2!1sen!2sid!4v1775480220655!5m2!1sen!2sid" />

            <a
              href="https://maps.app.goo.gl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-[10px] tracking-[0.4em] uppercase border-b border-white/40 pb-2 hover:text-[#d6c28f] transition"
            >
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
