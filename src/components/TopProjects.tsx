import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { ImageWithFallback } from './ImageWithFallback';
import buttersImg from '../assets/top-projects/butters-jetpack.png';
import spiteImg from '../assets/top-projects/SpiteCastle1.png';
import fishImg from '../assets/top-projects/FishCatching1.png';
import fatButterHeadPeekImg from '../assets/web-absolute-png/FatButters.png';

export function TopProjects() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [headPosition, setHeadPosition] = useState({ left: 0, bottom: 0 });
  const projects = [
    {
      id: 'fat-butters',
      title: "Fat Butters' Jetpack Ride",
      image: buttersImg,
      description: "Motion-controlled 2.5D mobile adventure!",
      // bgColor: "from-green-700 via-emerald-700 to-teal-700",
      // bgColor: "from-cyan-600 via-blue-600 to-indigo-700"
      bgColor: "from-blue-500 via-cyan-500 to-indigo-600"
    },
    {
      id: "spite-castle",
      title: "Spite Castle",
      image: spiteImg,
      description: "A spooky board game of betrayal!",
      bgColor: "from-purple-600 via-fuchsia-600 to-indigo-700",
      // bgColor: "from-blue-600 via-cyan-600 to-indigo-700"
    },
    {
      id: "catch-night",
      title: "Catch of the Night",
      image: fishImg,
      description: "Coming Soon!",
      bgColor: "from-orange-700 via-red-700 to-purple-800",
    },
  ];

  useEffect(() => {
    const updatePosition = () => {
      const containerEl = containerRef.current;
      const cardEl = firstCardRef.current;

      if (!containerEl || !cardEl) {
        return;
      }

      const containerRect = containerEl.getBoundingClientRect();
      const cardRect = cardEl.getBoundingClientRect();

      const OFFSET_LEFT = -21;
      const OFFSET_BOTTOM = -54;

      const left = cardRect.left - containerRect.left + OFFSET_LEFT;
      const bottom = containerRect.bottom - cardRect.bottom + OFFSET_BOTTOM;

      setHeadPosition((prev) => {
        if (prev.left === left && prev.bottom === bottom) {
          return prev;
        }

        return { left, bottom };
      });
    };

    updatePosition();

    const handleResize = () => updatePosition();
    const handleScroll = () => updatePosition();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);

    const observers: ResizeObserver[] = [];

    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(updatePosition);

      if (firstCardRef.current) {
        resizeObserver.observe(firstCardRef.current);
      }

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      observers.push(resizeObserver);
    }

    const timeoutId = window.setTimeout(updatePosition, 150);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);

      observers.forEach((observer) => observer.disconnect());
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className = "bg-gradient-to-br from-[#5B9DD0] via-[#3A6E9E] to-cyan-500 border-b-8 border-gray-300 py-12 relative">
      {/* Mobile-only FatButters */}
      {/* Mobile-only FatButters at the Top */}
     
      {/* Mobile-only FatButters at the Bottom */}
      <div
        className="lg:hidden absolute z-10 pointer-events-none"
        style={{
          left: '0px',  // Change this value to shift horizontally (e.g. '10px', '-10px', etc.)
          bottom: '-4px', // Change this value to shift vertically (e.g. '10px', '-10px', etc.)
        }}
      >
        <img 
          src={fatButterHeadPeekImg} 
          alt="Fat Butters"
          className="h-24 w-auto "
          style={{ 
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
            objectFit: 'contain'
          }}
        />
      </div>

      <div ref={containerRef} className = "container relative mx-auto px-4 overflow-visible">
        <div className = "grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {projects.map((project, index) => (
            <div
              key = {project.id}
              className = "relative"
              ref = {index === 0 ? firstCardRef : undefined}
            >
              <Card
                className = {`relative overflow-visible cursor-pointer transform lg:hover:scale-110 lg:hover:-rotate-3 transition-all duration-300 shadow-2xl hover:shadow-3xl border-6 border-white rounded-3xl bg-gradient-to-br ${project.bgColor} group`}
                onClick = {() => navigate(`/${project.id}`)}
              >
                <div className = "relative aspect-video overflow-hidden rounded-[28px]">
                  <ImageWithFallback
                    src = {project.image}
                    alt = {project.title}
                    className = "w-full h-full object-cover transition-transform duration-500 rounded-[28px] lg:group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className = "absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 rounded-[28px]"
                  >
                  </div>

                  {/* Content */}
                  <div className = "absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className = "text-xl font-bold mb-2 transform lg:group-hover:translate-y-[-4px] transition-transform duration-300">{project.title}</h3>
                    <p className = "text-sm opacity-90 transform lg:group-hover:translate-y-[-4px] transition-transform duration-300">{project.description}</p>
                  </div>

                  {/* Fun border decoration */}
                  <div className = "absolute top-2 left-2 w-4 h-4 border-t-4 border-l-4 border-white opacity-80"></div>
                  <div className = "absolute bottom-2 right-2 w-4 h-4 border-b-4 border-r-4 border-white opacity-80"></div>
                </div>

                 {/* Characters hanging off the sides */}
                {/* {index === 0 && (
                  <div className="absolute -left-6 top-1/3 transform -translate-y-1/2">
                    <img 
                      src={fatButtersImg} 
                      alt="Fat Butters with Jetpack"
                      className="w-14 h-auto animate-pulse shadow-xl rounded-lg transform -rotate-12"
                      style={{ 
                        animationDelay: '0.8s',
                        filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.3))'
                      }}
                    /> */}
                    {/* Jetpack effects */}
                    {/* <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gradient-to-t from-blue-400 to-cyan-300 rounded-full animate-pulse opacity-70"></div>
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                    <img 
                      src={booBearImg} 
                      alt="Boo Bear Spooky"
                      className="w-12 h-auto animate-pulse shadow-xl rounded-lg transform rotate-6"
                      style={{ 
                        animationDelay: '1.2s',
                        filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.35)) hue-rotate(270deg) saturate(1.2)'
                      }}
                    />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute -right-6 top-2/3 transform -translate-y-1/2">
                    <img 
                      src={fatButtersImg} 
                      alt="Fat Butters Mystery"
                      className="w-11 h-auto animate-bounce shadow-xl rounded-lg transform rotate-12"
                      style={{ 
                        animationDelay: '1.5s',
                        filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.3)) opacity(0.8)'
                      }}
                    />
                    {/* Question mark effect */}
                    {/* <div className="absolute -top-2 -right-2 text-2xl animate-ping">❓</div>
                  </div>
                )} */}
              </Card>
            </div>
          ))}
        </div>
        
        {/* FatButter head peeking out at bottom-left of section - Desktop only */}
        <div 
          className="hidden lg:block absolute z-10 pointer-events-none"
          style={{ 
            left: `${headPosition.left}px`,
            bottom: `${headPosition.bottom}px`,
            height: '160px'
          }}
        >
          <img 
            src={fatButterHeadPeekImg} 
            alt="Butters poking his head out"
            className="h-full w-auto "
            style={{ 
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </section>
  );
}