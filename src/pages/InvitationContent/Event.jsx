import { motion } from "framer-motion";

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

const MapEmbed = ({ src }) => {
  return (
    <div className="overflow-hidden rounded-3xl mt-10">
      {" "}
      <iframe
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[320px] md:h-[420px]"
      />{" "}
    </div>
  );
};

export default function EventSection() {
  return (
    <section className="py-24 px-6">
      {" "}
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {" "}
          <p className="uppercase tracking-[0.4em] text-xs text-white/60 mb-4">
            Save The Date{" "}
          </p>
          ```
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Waktu & Tempat Acara
          </h2>
        </motion.div>

        {/* Date Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-sm text-white/60 mb-4">
            Jumat
          </p>

          <h3 className="font-serif text-7xl md:text-8xl text-white leading-none">
            26
          </h3>

          <p className="font-serif text-2xl md:text-3xl text-white mt-4">
            Juni 2026
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-12 bg-white/20" />
            <span className="text-white/60">✦</span>
            <div className="h-px w-12 bg-white/20" />
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-white/60 mb-4">
            Lokasi Acara
          </p>

          <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Sape, Kabupaten Bima
          </h3>

          <p className="text-white/70 leading-8">
            Kecamatan Sape
            <br />
            Kabupaten Bima
            <br />
            Nusa Tenggara Barat
          </p>

          <MapEmbed src="https://maps.google.com/maps?q=Sape%20Kabupaten%20Bima&t=&z=13&ie=UTF8&iwloc=&output=embed" />

          <a
            href="https://maps.google.com/?q=Sape,Kabupaten+Bima"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-sm tracking-[0.2em] uppercase"
          >
            Lihat Lokasi →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
