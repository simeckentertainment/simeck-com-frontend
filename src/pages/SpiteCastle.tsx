import { Button } from "../components/ui/Button";
import { ShoppingCart, Eye, Users, Crown, Skull } from "lucide-react";
import { Card, CardContent, CardTitle, CardHeader } from "../components/ui/card";

import spiteCastleImg from "../assets/SpiteCastle/SpiteCastle2.png"

import MeetCharacter from "../components/ui/Carousel Components/SpiteCastle-MeetCharacters";

import aligatorImg from "../assets/SpiteCastle/aligator.png"
import ashladImg from "../assets/SpiteCastle/ashlad.png"
import beekeeperImg from "../assets/SpiteCastle/beekeeper.png"
import butlerImg from "../assets/SpiteCastle/butler.png"
import cheaufurrImg from "../assets/SpiteCastle/cheaufurr.png"
import chiefImg from "../assets/SpiteCastle/chief.png"
import coblerImg from "../assets/SpiteCastle/cobler.png"
import dukeImg from "../assets/SpiteCastle/duke.png"
import duchessImg from "../assets/SpiteCastle/duchess.png"
import gardnerImg from "../assets/SpiteCastle/gardner.png"
import generalImg from "../assets/SpiteCastle/general.png"

export function SpiteCastle() {

  const characters = [    
    {
      name: "duke",
      image: dukeImg,
    },
    {
      name: "duchess",
      image: duchessImg,
    },
    {
      name: "aligator",
      image: aligatorImg,
    },
    {
      name: "ashlad",
      image: ashladImg,
    },
    {
      name: "beekeeper",
      image: beekeeperImg,
    },
    {
      name: "butler",
      image: butlerImg,
    },
    {
      name: "cheaufurr",
      image: cheaufurrImg,
    },
    {
      name: "chief",
      image: chiefImg,
    },
    {
      name: "cobler",
      image: coblerImg,
    },
    {
      name: "gardner",
      image: gardnerImg,
    },
    {
      name: "general",
      image: generalImg,
    },
  ]

  const features = [
    {
      icon: <Users className="w-6 h-6"/>,
      title: "3-6 Players",
      description: "Perfect for destroying freindships... er, family game night!"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Betrayal Mechanics",
      description: "Trust no one! Even your best friends will stab you in the back"
    },
    {
      icon: <Skull className="w-6 h-6" />,
      title: "Ghostly Host",
      description: "The Duke and Duchess of Spite oversee your treacherous games"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Hidden Roles",
      description: "Everyone has secrets, and some are more deadly than others"
    },
  ];

  const whatInBox = [
    "1 Beautifully illustrated game board featuring the cursed castle",
    "6 Character cards with unique abilities and dark secrets",
    "54 Spite cards that fuel the betrayal",
    "48 Action cards for scheming and plotting",
    "30 Trust tokens (you'll lose them all)",
    "12 Betrayal markers",
    "2 Custom dice blessed by the Duke himself",
    "1 Comprehensive rulebook with lore and strategies"
  ];

  return (
    <div className="space-y-12 py-1">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-black rounded-3xl space-y-6 p-12 text-center items-center">
        {/* <Badge className="bg-red-600/80 text-white backdrop-blur-sm">
          👑 BOARD GAME OF BETRAYAL
        </Badge> */}
        <div className = "grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 items-center">
          <div className = "flex justify-center items-center text-center">
            <img src = { spiteCastleImg } />
          </div>
          <div className = "flex flex-col space-y-6 items-center justify-center text-center">
            <h2 className="text-white text-6xl hover:scale-105 transition-transform duration-300">
              Spite Castle
            </h2>
            <p className="text-white text-2xl max-w-2xl mx-auto leading-relaxed">
              Enter the cursed halls where friendship goes to die! 
              A deliciously spiteful board game where trust is a liability and betrayal is the only path to victory. 
              Can you survive the Duke and Duchess's twisted games?</p>
            <div className="flex sm:flex-row justify-center gap-4">
              <a
                href="https://www.thegamecrafter.com/games/spite-castle"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button size="lg" className="bg-gradient-to-br from-orange-500 to-purple-400 text-white hover:scale-105 transition-all duration-300">
                  <ShoppingCart className="w-5 h-5 mr-2"/>
                  Pre-Order Now
                </Button>
              </a>
              {/* <Button size="lg" variant="outline" className="border-white bg-gradient-to-br from-indigo-50 to-purple-50 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <Eye className="w-5 h-5 mr-2"/>
                Watch Gameplay
              </Button> */}
            </div>
          </div>
          
        </div>
        
        
      </div>

      {/* Game Overview */}
      <div className="bg-white border-4 border-purple-200 rounded-3xl space-y-8 py-8 px-6">
        <div className="text-center relative">
          <h3 className="text-purple-800 text-4xl relative">
            The Game of Noble Treachery
          </h3>
        </div>          
        <div className="space-y-8 text-lg relative leading-relaxed">
          <p className="text-gray-700">
            Welcome to Spite Castle, where the aristocratic ghosts of Duke and Duchess of Spite invite you to participate in their eternal game of backstabbing and betrayal. What starts as a friendly gathering quickly devolves into a cutthroat competition where your closest allies become your greatest enemies.
          </p>
          <p className="text-gray-700">
            Each player takes on the role of a noble guest in the castle, but beware – everyone has hidden agendas, secret allegiances, and a burning desire to see others fail. Use spite cards to sabotage your friends, form temporary alliances that you'll inevitably break, and navigate the treacherous social dynamics of undead nobility.
          </p>
          <p className="text-gray-700">
            Victory belongs to the most deviously strategic player, but be warned: winning at Spite Castle might cost you some real-world friendships! Perfect for those who enjoy psychological warfare with a side of supernatural charm.
          </p> 
       </div>
      </div>

      {/* Game Feature */}
      <div className="space-y-8">
        <h3 className="text-4xl text-center font-semibold bg-gradient-to-br from-orange-500 to-violet-400 bg-clip-text text-transparent relative">
          Game Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-4 border-indigo-200 hover:border-indigo-400 bg-gradient-to-br from-white to-orange-50 group hover:scale-105 hover:-rotate-1 transition-all duration-300">
              <CardHeader className="text-center gap-8">
                <div className="items-center mx-auto w-16 h-16 bg-purple-600 rounded-full justify-center relative flex text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-purple-800 text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700 leading-relaxed">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Character showcase */}
      <MeetCharacter characters = {characters} />

      {/* What is in the Box */}
      <div className="text-center bg-gradient-to-br from-white to-gray-50 border-4 border-purple-200 relative overflow-hidden space-y-12 p-6 rounded-xl">
        <h2 className="text-4xl text-purple-800">
          What's in the Box
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 relative gap-4">
          {whatInBox.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-white/80 rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 relative group">
              <div className="w-6 h-6 bg-purple-500 rounded-full text-white">
                {index + 1}
              </div>
              <span className="text-gray-700 group-hover:text-purple-700 transition-color duration-300">
                {item}
              </span>
            </div>
            
          ))}
        </div>        
      </div>

      {/* Order Section */}
      <div className="py-12 px-6 space-y-5 text-center bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 rounded-3xl border-4 border-orange-200 relative overflow-hidden">
          <h3 className="text-4xl text-white">Ready to Betray Your Friends?</h3>
          <p className="text-xl text-white mx-auto max-w-3xl mb-8 leading-relaxed">
            Pre-order Spite Castle today and be among the first to experience the most delightfully treacherous board game ever created.
            Warning: May cause temporary friendship damage!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="bg-orange-500 hover:bg-orange-700 text-white hover:gray-100 hover:scale-105 transition-all duration-300 relative">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Pre-order for $49.99
            </Button>
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white hover:gray-100 hover:scale-105 transition-1ll duration-300 relative">
              <Heart className="w-5 h-5 mr-2" />
              Add to Wishlist
            </Button> */}
            <p className="text-lg font-semibold italic text-white">--- COMING SOON ---</p>
          </div>          
          <p className="text-sm text-white">Expected shipping: Spring 2026 | Ages 14+ | 3-6 Players | 60-90 minutes</p>        
      </div>    
    </div>

  );
}