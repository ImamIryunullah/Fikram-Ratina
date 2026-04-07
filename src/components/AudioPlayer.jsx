import React, { useState, useRef, useEffect } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current
        ?.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    };

    window.addEventListener("click", playAudio, { once: true });
    return () => window.removeEventListener("click", playAudio);
  }, []);

  const toggleAudio = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <audio ref={audioRef} src="/sounds/2.mp3" loop preload="auto" />

      <button
        onClick={toggleAudio}
        className="group flex items-center gap-4 px-5 py-3 rounded-full
        bg-black/40 backdrop-blur-md border border-white/10
        hover:border-[#d6c28f]/50 transition-all duration-500 shadow-2xl"
      >
        {/* ICON */}
        <div className="text-[#d6c28f]">
          {isPlaying ? <FaMusic /> : <FaPause />}
        </div>

        {/* SONG TITLE */}
        <div className="w-28 overflow-hidden hidden md:block">
          <p
            className={`text-[11px] tracking-widest uppercase whitespace-nowrap
            transition-opacity duration-500 ${
              isPlaying ? "opacity-60" : "opacity-30"
            } animate-marquee`}
          >
            50th Anniversary
          </p>
        </div>

        {/* VISUALIZER */}
        <div className="flex items-end gap-[3px] h-4">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={`w-[2px] rounded-full bg-[#d6c28f] ${
                isPlaying ? `animate-bar bar-${i}` : "h-1 opacity-40"
              }`}
            />
          ))}
        </div>
      </button>

      <style jsx>{`
        @keyframes bar {
          0%,
          100% {
            height: 4px;
          }
          50% {
            height: 14px;
          }
        }
        .animate-bar {
          animation: bar 1.2s ease-in-out infinite;
        }
        .bar-1 {
          animation-delay: 0s;
        }
        .bar-2 {
          animation-delay: 0.2s;
        }
        .bar-3 {
          animation-delay: 0.4s;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
