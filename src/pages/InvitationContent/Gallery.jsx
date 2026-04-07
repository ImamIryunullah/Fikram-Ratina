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
            <img
              src="/galeri/image1.webp"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* IMAGE 2 – center highlight */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 1.2 }}
            className="relative h-[420px] md:h-[520px] md:mt-24 overflow-hidden rounded-[32px]"
          >
            <img
              src="/galeri/image2.webp"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* IMAGE 3 – tall */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1.2 }}
            className="relative h-[520px] md:h-[640px] overflow-hidden rounded-[32px]"
          >
            <img
              src="/galeri/covver.webp"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GallerySection;
