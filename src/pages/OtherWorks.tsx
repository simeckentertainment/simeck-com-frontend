import { ExternalLink } from 'lucide-react';

import mmbiImg from '../assets/OtherWorks/mmbi-image.png';
import cCityImg from '../assets/OtherWorks/ccity-image.png';
import protagonistImg from '../assets/OtherWorks/protagonist-image.png';
import steamPunchImg from '../assets/OtherWorks/steampunch-image.png';

import cCityImgSheet from '../assets/OtherWorks/C-City-Onesheet_V001_RSS.pdf';
import mmbiSheet from '../assets/OtherWorks/mmbi_OneSheet_V001_CAW.pdf';
import steamPunchSheet from '../assets/OtherWorks/Steampunch_onesheet_V03_CCM_r.pdf';
import protagonistSheet from '../assets/OtherWorks/Protagonist_OSHT_V01_RSS.pdf';
// import { use } from 'react';  
import { useNavigate } from 'react-router-dom';

export function OtherWorks() {
  const navigate = useNavigate();

  const otherWorks = [
    {
      id: 1,
      title: "Me, My Body, and I",
      image: mmbiImg,
      pdfLink: mmbiSheet,
      description: "You know you’ve lost control of your body when your organs become your imaginary “friends”."
    },
    {
      id: 2,
      title: "C City",
      image: cCityImg,
      pdfLink: cCityImgSheet,
      description: "A fight for survival in a dying world."
    },
    {
      id: 3,
      title: "SteamPunch",
      image: steamPunchImg,
      pdfLink: steamPunchSheet,
      description: "A story about Corey and Meep punching their way around the world, one steam blast at a time!"
    },
    {
      id: 4,
      title: "The Protagonist",
      image: protagonistImg,
      pdfLink: protagonistSheet,
      description: "Leave her alone or she'll f̶̖͇̳̬̪͙̰̺͚̙͂i̴̝͉͐̅̀̍̔́̾̋̋͊͐͜͠g̷̡͔̜̻̙̫̳̤̭̜̩̻̋͒̄̄̿͂̕h̷̜́̈́̕͘ṫ̶̜̰͎̯̦̼̩͂̋̔̋̓̿͘͜͝͝-̶̢̨̥͔̹͙̟̝̗͇̿̀̋̔͐́̃͜b̵̗̺͗̍̽ą̷̙̹̖̹̳̞̭̻̱͋̊͊̓̅͐̀͆̚̕͝ç̴̘̘̦͇̟̝̌̽̇̋̅̑̕͝͠͝͝k̶̡̛͕̲͐̽͗̿́̓̊̿͑̃̆́͠͝."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center py-12 relative">
        <div className="relative inline-block">
          <h1 className="text-6xl text-white mb-4 transform hover:scale-105 transition-transform duration-300" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(91,157,208,0.6)' }}>
            Other Works
          </h1>
          {/* Boo Bear hanging off the title */}
          {/* <div className="absolute -right-12 -top-4">
            <img 
              src={booBear} 
              alt="Boo Bear"
              className="w-20 h-auto animate-bounce shadow-2xl rounded-lg transform rotate-12"
              style={{ 
                animationDelay: '0.5s',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))'
              }}
            />
          </div> */}
        </div>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-shadow-sm">
          Explore our diverse portfolio of creative projects and intellectual properties.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {otherWorks.map((work) => (
          <a
            key={work.id}
            href={work.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-[#5B9DD0] hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:rotate-1"
          >
            {/* Character decorations on cards */}
            {/* {index % 2 === 0 && (
              <div className="absolute -top-4 -right-4 z-20">
                <img 
                  src={fatButters} 
                  alt="Fat Butters"
                  className="w-16 h-auto animate-bounce shadow-xl rounded-lg transform rotate-12"
                  style={{ 
                    animationDelay: `${index * 0.3}s`,
                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
                  }}
                />
              </div>
            )}
            {index % 2 === 1 && (
              <div className="absolute -top-3 -left-3 z-20">
                <img 
                  src={booBear} 
                  alt="Boo Bear"
                  className="w-14 h-auto animate-pulse shadow-xl rounded-lg transform -rotate-12"
                  style={{ 
                    animationDelay: `${index * 0.4}s`,
                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))'
                  }}
                />
              </div>
            )} */}

            {/* Image Container */}
            <div className="relative aspect-video bg-gradient-to-br from-[#5B9DD0] to-[#3A6E9E] overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A52]/90 via-[#3A6E9E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <div className="flex items-center space-x-2 text-white">
                  <ExternalLink className="w-6 h-6" />
                  <span className="text-lg">View Onesheet PDF</span>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 bg-gradient-to-br from-white to-cyan-50 relative">
              {/* Sparkle decoration */}
              <div className="absolute top-4 right-4 w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-yellow-400 text-2xl animate-pulse">✨</div>
              </div>

              <h3 className="text-2xl mb-2 text-[#1E3A52] group-hover:text-[#5B9DD0] transition-colors duration-300">
                {work.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {work.description}
              </p>

              {/* Click indicator */}
              <div className="mt-4 flex items-center text-[#3A6E9E] group-hover:text-cyan-500 transition-colors duration-300">
                <span className="text-sm">Click to view details</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Playful corner decoration */}
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-[#5B9DD0] rounded-full opacity-40 group-hover:opacity-80 group-hover:scale-150 transition-all duration-300 blur-sm"></div>
          </a>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center py-12 bg-gradient-to-r from-[#5B9DD0] to-[#3A6E9E] rounded-3xl border-4 border-white/50 relative overflow-hidden mt-12 max-w-4xl mx-auto">
        {/* Background decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-cyan-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 left-8 w-4 h-4 bg-yellow-300 rounded-full opacity-60 animate-ping"></div>
        
        {/* Fat Butters decoration */}
        {/* <div className="absolute -bottom-2 -right-2">
          <img 
            src={fatButters} 
            alt="Fat Butters"
            className="w-24 h-auto animate-bounce shadow-xl rounded-lg transform rotate-6"
            style={{ 
              animationDelay: '0.8s',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))'
            }}
          />
        </div> */}

        <h3 className="text-3xl text-white mb-4 relative z-10" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.3)' }}>
          Interested in Our Work?
        </h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto relative z-10 text-lg">
          Want to learn more about any of these projects? Get in touch with us to discuss collaborations, licensing, or just to chat about our creative endeavors!
        </p>
        <div className="relative z-10">
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-[#1E3A52] px-8 py-3 rounded-full hover:bg-cyan-100 hover:scale-105 transition-all duration-200 shadow-xl border-2 border-white/80"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
