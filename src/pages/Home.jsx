import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";
import { preloadImages } from "../utils/preloadImages";
import HeroSection from "./Hero";
import TitleSection from "./InvitationContent/Title";
import QuoteSection from "./InvitationContent/Quote";
import CoupleSection from "./InvitationContent/Couple";
import LoveStorySection from "./InvitationContent/LoveStory";
import EventSection from "./InvitationContent/Event";
import GallerySection from "./InvitationContent/Gallery";
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
      <main className="relative min-h-screen text-white overflow-hidden">
        {/* GLOBAL BACKGROUND */}
        <motion.div
          className="fixed inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: [1, 1.08],
          }}
          transition={{
            opacity: { duration: 1.8, ease: "easeOut" },
            scale: {
              duration: 30,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
        >
          <img
            src="/galeri/covver.webp"
            alt="Prewedding Background"
            className="w-[100%] h-[100%] object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        </motion.div>

        {/* HERO / COVER */}
        <AnimatePresence>
          {!opened && <HeroSection key="hero" onOpen={() => setOpened(true)} />}
        </AnimatePresence>

        {/* CONTENT */}
        {opened && (
          <motion.div
            className="relative z-10"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <TitleSection />
            <QuoteSection />
            <CoupleSection />
            <LoveStorySection />
            <EventSection />
            <GallerySection />

            <ClosingSection />
          </motion.div>
        )}

        {opened && <AudioPlayer />}
      </main>
    </>
  );
};

export default Home;
