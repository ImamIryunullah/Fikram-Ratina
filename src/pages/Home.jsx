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
      <main className="relative min-h-screen text-white overflow-hidden bg-black">
        {/* GLOBAL BACKGROUND */}

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

            <EventSection />
            <ClosingSection />
          </motion.div>
        )}

        {opened && <AudioPlayer />}
      </main>
    </>
  );
};

export default Home;
