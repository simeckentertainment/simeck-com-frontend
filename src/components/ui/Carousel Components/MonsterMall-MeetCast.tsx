import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../card";
import { useState } from "react";
import { motion } from "framer-motion";

const visibleCount = 3;
const cardWidth = 320; // width of each card
const gap = 32;        // space between cards

export default function MeetCast({ characters }: { characters: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = characters.length - visibleCount;

  const nextSlide = () => {
  setCurrentIndex((prev) => {
    const next = prev + 1;
    if (next > maxIndex) {
      // Jump back to 0 after the last visible card
      return 0;
    }
    return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      if (next < 0) {
        // Jump to last visible index
        return maxIndex;
      }
      return next;
    });
  };
  
  // Duplicate the list at both ends for seamless infinite looping
  const extendedCharacters = [
    ...characters.slice(-visibleCount), // last 3 in front
    ...characters,
    ...characters.slice(0, visibleCount), // first 3 at the end
  ];

  // Adjust visible offset (start shifted by visibleCount)
  const offsetIndex = currentIndex + visibleCount;

  return (
    <div className="space-y-10 relative">
      <h3 className="text-4xl text-center font-semibold bg-gradient-to-br from-orange-500 to-violet-400 bg-clip-text text-transparent">
        Meet the Cast
      </h3>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-purple-700" />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden w-full max-w-5xl">
          <motion.div
            className="flex gap-8"
            animate={{ x: -offsetIndex * (cardWidth + gap) }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{ width: "max-content" }}
          >
            {extendedCharacters.map((character, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-[#fdf6f0] to-[#fffaf7] hover:shadow-2xl transition-all duration-500 rounded-3xl w-80 flex-shrink-0"
              >
                <div className="relative">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="mx-auto h-96 w-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-4 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {character.name}
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-purple-700" />
        </button>
      </div>
    </div>
  );
}
