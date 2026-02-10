import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const GallerySection = () => {
  return (
    <section className="relative z-10 px-6 py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-7xl mx-auto"
      >
        {/* TITLE */}
        <motion.div variants={slideUp} className="mb-24 max-w-2xl">
          <p className="text-[11px] tracking-[0.6em] uppercase text-[#d6c28f]/80 mb-6">
            Our Moments
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">
            Potret <br /> Perjalanan Cinta
          </h2>
        </motion.div>

        {/* EDITORIAL GRID */}
        <motion.div
          variants={fade}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* IMAGE 1 – tall */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[520px] md:h-[640px] overflow-hidden rounded-[32px]"
          >
            <img src="/galeri/1.jpg" className="w-full h-full object-cover" />
          </motion.div>

          {/* IMAGE 2 – center highlight */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 1.2 }}
            className="relative h-[420px] md:h-[520px] md:mt-24 overflow-hidden rounded-[32px]"
          >
            <img
              src="/galeri/bali.jpg"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* IMAGE 3 – tall */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1.2 }}
            className="relative h-[520px] md:h-[640px] overflow-hidden rounded-[32px]"
          >
            <img src="/galeri/3.jpg" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        {/* BOTTOM ROW */}
        <motion.div
          variants={fade}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
        >
          {["/galeri/4.jpg", "/galeri/5.webp"].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 1.2 }}
              className="relative h-[420px] overflow-hidden rounded-[32px]"
            >
              <img src={img} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GallerySection;
