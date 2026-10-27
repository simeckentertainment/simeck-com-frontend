import { Badge } from "../components/ui/Badge"
// import { Button } from "../components/ui/Button"
import {  Gamepad2, Zap, Star, Users } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/card"

import fatbutterImg from "../assets/top-projects/butters-jetpack.png"
import spiteCastleImg from "../assets/top-projects/SpiteCastle.jpg"
import catchNightImg from "../assets/top-projects/FishCatching.png"
// import screamBubble from "../assets/ScreamBubble.png"
// import kissyFish from "../assets/KissyFish.png"

export function FatButters() {
  const features = [
    {
      icon: <Gamepad2 />,
      title: "Motion Controls",
      description: "Tilt your device to guide Fat Butters through the sky!"
    },
    {
      icon: <Zap />,
      title: "Jetpack Physics",
      description: "Realistic jetpack mechanics with boost, hover, and emergency landing modes"
    },
    {
      icon: <Star />,
      title: "Collectible Treats",
      description: "Gather dog treats, tennis balls, and squeaky toys for maximum points"
    },
    {
      icon: <Users />,
      title: "Character Buddies",
      description: "Team up with ScreamBubble and Kissyfish for special abilities"
    },
  ];

  const screenshots = [
    {
      image: catchNightImg,
      title: "Sky Adventure"
    },
    {
      image: spiteCastleImg,
      title: "Character Meet"
    },
    {
      image: fatbutterImg,
      title: "Fat Butters Action"
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-center text-white bg-gradient-to-br from-orange-400 via-yellow-400 to-red-500 rounded-3xl space-y-8 p-12">
        <Badge className="text-white bg-white/20 backdrop-blur-sm">
          🚀 MOBILE GAME
        </Badge>
        <h1 className="text-6xl transform hover:scale-105 transition-transform duration-300">
          Fat Butters' Jetpack Ride
        </h1>
        <p className="text-2xl max-w-3xl mx-auto leading-relaxed">
          Join our adorable tricolor corgi on the adventure of a life time!
          Soar through the skies with motion-controlled jetpack action in this wacky 2.5D mobile experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Button size="lg" className="bg-white text-orange-600 hover:gray-100 hover:scale-105 transition-all duration-200 relative">
            <Download className="w-5 h-5 mr-2"/>
            Download Now
          </Button>
          <Button size="lg" className="bg-gradient-to-br from-orange-500 to-purple-400 text-white hover:gray-100 hover:bg-white/10 hover:text-white hover:scale-105 transition-1ll duration-200 relative">
            <Smartphone className="w-5 h-5 mr-2"/>
            Watch Trailer
          </Button> */}
          <p className="text-lg font-semibold italic">--- COMING 2026 ---</p>
        </div>
      </div>

      {/* Game Features Section */}
      <div className="space-y-8">
          <h2 className="text-center text-4xl bg-gradient-to-br from-orange-500 to-violet-400 bg-clip-text text-transparent font-semibold relative">
            Game Features
          </h2>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group bg-gradient-to-br from-white to-orange-50 border-4 border-orange-200 hover:border-orange-400 hover:scale-105 hover:-rotate-1 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-purple-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-center leading-relaxed">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Screenshots Gallery Section */}
      <div className="space-y-8">
        <h2 className="text-center font-semibold bg-gradient-to-br from-orange-500 to-violet-400 bg-clip-text text-transparent relative text-4xl">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((screenshot) => (
            <Card className="overflow-hidden relative group border-4 border-yellow-200 hover:border-yellow-400 hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="overflow-hidden aspect-video bg-gradient-to-r from-white to-orange-200">
                <img src={screenshot.image} alt="screenshot.title" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="bg-white text-purple-800 text-lg text-center">
                {screenshot.title}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Character Spotlight Seciton */}
      {/* <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-4 border-purple-200 relative overflow-hidden text-center space-y-8 p-6 rounded-xl">
        <h2 className="text-4xl text-purple-800">
          Meet the Characters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="text-center space-y-4">
            <div className="items-center rounded-full w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 justify-center mx-auto flex p-1 border-3 border-white shadow-lg">
              <img src={fatbutterImg} alt="Fat Butters" className=""/>
            </div>
            <h3 className="text-purple-800 text-xl text-center">Fat Butters</h3>
            <p className="text-gray-700">Our brave tricolor corgi hero with a need for speed and an appetite for adventure!</p>
          </div>
          <div className="text-center space-y-4">
            <div className="items-center rounded-full w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 justify-center mx-auto flex p-3 border-3 border-white shadow-lg">
              <img src={screamBubble} alt="Fat Butters" className=""/>
            </div>
            <h3 className="text-purple-800 text-xl text-center">Scream Bubble</h3>
            <p className="text-gray-700">Our brave tricolor corgi hero with a need for speed and an appetite for adventure!</p>
          </div>
          <div className="text-center space-y-4">
            <div className="items-center rounded-full w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 justify-center mx-auto flex p-3 border-3 border-white shadow-lg">
              <img src={kissyFish} alt="Fat Butters" className=""/>
            </div>
            <h3 className="text-purple-800 text-xl text-center">Kissy Fish</h3>
            <p className="text-gray-700">Our brave tricolor corgi hero with a need for speed and an appetite for adventure!</p>
          </div>
        </div>
      </div> */}

      {/* Download Section */}
      <div className="py-12 px-6 space-y-4 text-center bg-gradient-to-r from-orange-100 to-yellow-100 rounded-3xl border-4 border-orange-200 relative overflow-hidden">
          <h3 className="text-4xl text-purple-800">Ready for Takeoff?</h3>
          <p className="text-xl text-gray-700 mx-auto max-w-3xl mb-8 leading-relaxed">Download Fat Butters' Jetpack Ride today and experience the most adorable aerial adventure on mobile!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">          
            {/* <Button size="lg" className="bg-orange-500 hover:bg-orange-700 text-white hover:gray-100 hover:scale-105 transition-all duration-200 relative">
              <Download className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-800 text-white hover:gray-100 hover:scale-105 transition-1ll duration-200 relative">
              <Download className="w-5 h-5 mr-2" />
              Download for Android
            </Button> */}
            <p className="text-md font-semibold italic">--- COMING 2026 ---</p>
          </div>          
          <p className="text-sm text-gray-700">Free to play with optional in-app purchase</p>        
      </div>    
    </div>
  )
}