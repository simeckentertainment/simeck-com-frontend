import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../card";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Character {
  image: string;
  name: string;
}

interface Props {
  characters: Character[];
  gap?: number; // default 32
}

export default function MeetCast({ characters, gap = 32 }: Props) {
  const [visibleCount, setVisibleCount] = useState(5);
  const [cardWidth, setCardWidth] = useState(200);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update visibleCount based on window width
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(2);       // sm
      else if (width < 768) setVisibleCount(3);  // md
      else if (width < 1024) setVisibleCount(4); // lg
      else setVisibleCount(5);                   // xl+

      // Dynamically compute card width so all fit in view
      const containerWidth = Math.min(width * 0.9, 1200); // limit max width
      setCardWidth((containerWidth - gap * (visibleCount - 1)) / visibleCount);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [gap, visibleCount]);

  const maxIndex = characters.length - visibleCount;
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));

  const extendedCharacters = [
    ...characters.slice(-visibleCount),
    ...characters,
    ...characters.slice(0, visibleCount),
  ];
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

        {/* Carousel */}
        <div className="overflow-hidden w-full max-w-6xl">
          <motion.div
            className="flex justify-center"
            animate={{ x: -offsetIndex * (cardWidth + gap) }}
            transition={{ type: "spring", stiffness: 120, damping: 25 }}
            style={{ 
              width: "max-content", 
              columnGap: `${gap}px`,
              paddingRight: `${gap / 2}px`,
              // paddingLeft: `${gap / 2}px`, 
            }}
          >
            {extendedCharacters.map((char, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-[#fdf6f0] to-[#fffaf7] hover:shadow-2xl transition-all duration-500 rounded-3xl flex-shrink-0`}
                style={{ width: cardWidth }}
              >
                <div className="relative">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="mx-auto h-72 w-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {char.name}
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
