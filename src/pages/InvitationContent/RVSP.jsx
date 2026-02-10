import { motion } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const RSVPSection = () => {
  const [form, setForm] = useState({
    name: "",
    attendance: "",
    guests: "1",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih atas konfirmasi kehadiran Anda 🤍");
  };

  return (
    <section className="relative z-10 px-6 py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={container}
        className="max-w-5xl mx-auto"
      >
        {/* HEADER */}
        <motion.div variants={item} className="text-center mb-32">
          <p className="text-[11px] tracking-[0.55em] uppercase text-[#d6c28f]/80 mb-8">
            RSVP
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-10">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-sm md:text-base text-white/55 max-w-2xl mx-auto leading-relaxed">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu.
          </p>
        </motion.div>

        {/* FORM CARD */}
        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="relative mx-auto max-w-4xl border border-white/10 rounded-[48px] px-10 md:px-16 py-20  "
        >
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {/* NAMA */}
            <div>
              <label className="block text-[11px] tracking-[0.4em] uppercase text-white/50 mb-4">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                className="w-full bg-transparent border-b border-white/25 py-3 text-base focus:outline-none focus:border-[#d6c28f] placeholder:text-white/25"
              />
            </div>

            {/* KEHADIRAN */}
            <div>
              <label className="block text-[11px] tracking-[0.4em] uppercase text-white/50 mb-4">
                Kehadiran
              </label>
              <select
                name="attendance"
                required
                value={form.attendance}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/25 py-3 text-base focus:outline-none focus:border-[#d6c28f]"
              >
                <option value="" disabled className="bg-black">
                  Pilih
                </option>
                <option value="Hadir" className="bg-black">
                  Hadir
                </option>
                <option value="Tidak Hadir" className="bg-black">
                  Tidak Hadir
                </option>
              </select>
            </div>

            {/* JUMLAH TAMU */}
            <div>
              <label className="block text-[11px] tracking-[0.4em] uppercase text-white/50 mb-4">
                Jumlah Tamu
              </label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/25 py-3 text-base focus:outline-none focus:border-[#d6c28f]"
              >
                <option value="1" className="bg-black">
                  1 Orang
                </option>
                <option value="2" className="bg-black">
                  2 Orang
                </option>
              </select>
            </div>

            {/* EMPTY SPACE (DESKTOP BALANCE) */}
            <div className="hidden md:block" />
          </div>

          {/* MESSAGE */}
          <div className="mt-20">
            <label className="block text-[11px] tracking-[0.4em] uppercase text-white/50 mb-6">
              Ucapan & Doa
            </label>
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="Tuliskan doa terbaik Anda"
              className="w-full bg-transparent border-b border-white/25 py-3 text-base focus:outline-none focus:border-[#d6c28f] placeholder:text-white/25 resize-none"
            />
          </div>

          {/* SUBMIT */}
          <div className="mt-24 text-center">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
              type="submit"
              className="px-16 py-4 text-[11px] tracking-[0.5em] uppercase border border-white/40 rounded-full hover:border-[#d6c28f] hover:text-[#d6c28f] transition"
            >
              Kirim Konfirmasi
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
