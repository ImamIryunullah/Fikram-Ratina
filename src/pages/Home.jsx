import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";
import { preloadImages } from "../utils/preloadImages";
import HeroSection from "./Hero";
import TitleSection from "./InvitationContent/Title";
import QuoteSection from "./InvitationContent/Quote";
import CoupleSection from "./InvitationContent/Couple";
import EventSection from "./InvitationContent/Event";
import ClosingSection from "./InvitationContent/Closing";
import AudioPlayer from "../components/AudioPlayer";

const Home = () => {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = [
      "/galeri/taman.jpg",
      "/galeri/1.jpg",
      "/galeri/2.webp",
      "/galeri/3.jpg",
      "/galeri/4.jpg",
      "/galeri/5.webp",
      // Memastikan ornamen ikut masuk preload agar langsung muncul tanpa kedip
      "/ornamen/flower-top-left.png",
      "/ornamen/flower-bottom-right.png",
    ];

    preloadImages(images, setProgress).then(() => {
      setTimeout(() => setLoading(false), 600); // biar elegan
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
  }, [opened]);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen progress={progress} />}
      </AnimatePresence>

      <main className="relative min-h-screen text-white overflow-hidden bg-gray-900">
        {/* ================= STATIC GLOBAL ORNAMENTS ================= */}
        {/* Menggunakan `fixed` agar posisinya terkunci di layar dan tidak ikut naik saat di-scroll */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Bunga Pojok Kiri Atas */}
          <motion.img
            src="/ornamen/flower-top-left.png"
            alt="Static Flower Left"
            className="absolute top-0 left-0 w-36 sm:w-48 md:w-64 h-auto opacity-20 object-contain origin-top-left"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Bunga Pojok Kanan Bawah */}
          <motion.img
            src="/ornamen/flower-bottom-right.png"
            alt="Static Flower Right"
            className="absolute bottom-0 right-0 w-36 sm:w-48 md:w-64 h-auto opacity-20 object-contain origin-bottom-right"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
        {/* ========================================================== */}

        {/* HERO / COVER */}
        <AnimatePresence>
          {!opened && <HeroSection key="hero" onOpen={() => setOpened(true)} />}
        </AnimatePresence>

        {/* CONTENT */}
        {opened && (
          <motion.div
            className="relative z-10" // Menggunakan z-10 agar berada di atas ornamen static (z-0)
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <TitleSection />
            <QuoteSection />
            <CoupleSection />
            <EventSection />
            <ClosingSection />
          </motion.div>
        )}

        {/* AUDIO PLAYER */}
        {opened && <AudioPlayer />}
      </main>
    </>
  );
};

export default Home;
