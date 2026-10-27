import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { Calendar, Star, Heart, Download} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { useState } from "react"
import monsterMallImg from "../assets/MonsterMall/MonsterMall_avatar.png"
import monsterMallOneSheet from "../assets/MonsterMall/one-sheet/Monster Mall one-sheet.pdf"

import nataliaImg from "../assets/MonsterMall/MeetCast/Natalia.jpg"
import arianaImg from "../assets/MonsterMall/MeetCast/Arianna.jpg"
import graceImg from "../assets/MonsterMall/MeetCast/Grace.jpg"
import ulfricImg from "../assets/MonsterMall/MeetCast/Ulfric.jpg"
import nigelImg from "../assets/MonsterMall/MeetCast/Nigel.jpg"
import MeetCast from "../components/ui/Carousel Components/MonsterMall-MeetCast";

export function MonsterMall() {
  
  // return <h1>Monster Mall</h1>;
  const [liked, setLiked] = useState(false);
  const [minded, setMinded] = useState(false);

  const characters = [
    {
      name: "Natalia",
      age: "16",
      role: "New Mall Employee",
      description: "A regular human girl who just got her first job at the mysterious underground mall. She's discovering that 'customer service' takes on a whole new meaning when your customers are monsters!",
      personality: "Determined, adaptable, and surprisingly good at rolling with the supernatural punches.",
      image: nataliaImg
    },
    {
      name: "Grace",
      role: "Frankenstein's Monster",
      description: "A reanimated being with the soul of a Valley Girl. She's been working at the mall for decades but still hasn't quite figured out how modern technology works.",
      personality: "Bubbly, well-meaning, and accidentally destructive. She speaks in 90s slang despite being technically much older.",
      image: arianaImg
    },
    {
      name: "Arianna",
      role: "Sarcastic Goth Mermaid",
      description: "A mermaid who traded her tail for legs to work in fashion retail. She's deeply cynical about surface-dweller culture but secretly loves her job.",
      personality: "Sarcastic, witty, and protective of her friends despite her tough exterior. Expert in both underwater and underground fashion trends.",
      image: graceImg
    },
    {
      name: "Arianna",
      role: "",
      description: "",
      personality: "",
      image: ulfricImg
    },
    {
      name: "Arianna",
      role: "",
      description: "",
      personality: "",
      image: nigelImg
    },
  ];

  const chapters = [
    {
      chapter: 15,
      name: "The Coffee Shop Catastrophe",
      data: "2025-01-15",
      description: "When Grace accidentally enchants the espresso machine, the entire mall gets a caffeine-powered magical boost. Chaos ensures when the mannequins start dancing!"
    },
    {
      chapter: 14,
      name: "Fashion Emergency",
      data: "2025-01-10",
      description: "The mall's ountain starts overflowing, and Arianna discovers it's actually a portal to an underwater fashion district. Natalia gets her first lesson in aquatic retail."
    },
    {
      chapter: 13,
      name: "Grace's Guide to Customer Service",
      data: "2025-01-15",
      description: "Grace tries to help customers at the electronics store, but her valley Girl interpretation of tech support leads to some... interesting results."
    },
  ];
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 rounded-3xl p-12">
        {/* <Badge className="text-white bg-white/20 backdrop-blur-sm">
          📚 WEBCOMIC SERIES
        </Badge> */}
        <div className = "grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 items-center">
          <div className = "flex justify-center items-center text-center">
            <img src = { monsterMallImg } />
          </div>
          <div className = "flex flex-col space-y-6 items-center justify-center text-center text-white ">
            <h1 className="text-6xl transform hover:scale-105 transition-transform duration-300">
              Monster Mall
            </h1>
            <p className="text-xl max-w-5xl mx-auto leading-relaxed">
              And you thought YOUR workplace was full of monsters! <br />
              Retail has never been the sought-after dream job: cranky managers met by only even more cranky customers with poor compensation.
              For the teenage human Natalia however, she is literally working at a mall that caters to monsters!
              It's the hells of retail mixed with the absurdity of monsters! <br />
              Can Natalia survive her first job?
            </p>
            <div className="space-y-4 justify-center">
              <a
                href="https://www.webtoons.com/en/canvas/monster-mall/list?title_no=351908"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button size="lg" className="bg-gradient-to-br from-orange-400 to-purple-300 text-purple-500 hover:gray-100 hover:scale-105 transition-all duration-200 relative">
                  Go to Webtoon →
                </Button>
              </a>
              <a
                href={monsterMallOneSheet}
                download="MonsterMall_OneSheet"
                className="inline-block"
              >
                <Button size="lg" className="bg-white text-orange-600 hover:gray-100 hover:scale-105 transition-all duration-200 relative">
                  <Download className="w-5 h-5 mr-2"/>
                  Download Now
                </Button>
              </a>                
            </div>  
          </div> 
        </div>               
      </div>

      {/* Overview Section */}
      <Card className="relative overflow-hidden bg-white border-4 border-pink-200">
        <CardHeader className="text-center relative z-10">
          <CardTitle className="text-4xl text-purple-800 mb-4">
            Welcome to the Underground
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg leading-relaxed relative z-10">
          <p className="text-gray-700">
            When 16-year-old Natalia lands her first job, she expects the usual teenage retail experience: difficult customers, long hours, and learning to fold clothes properly. What she doesn't expect is for her workplace to be a massive underground mall populated entirely by monsters, supernatural beings, and creatures of the night.
          </p>
          <p className="text-gray-700">
            Between helping vampire fashionistas find the perfect gothic ensemble and assisting werewolves with seasonal wardrobe changes, Natalia discovers that monster customer service is surprisingly similar to human customer service – just with more magic, more chaos, and significantly more unusual return policies.
          </p>
          <p className="text-gray-700">
            With her new friends Grace (a Frankenstein's monster with Valley Girl energy) and Arianna (a sarcastic goth mermaid), Natalia navigates the supernatural retail world while learning that the underground mall holds secrets far more mysterious than its unusual customer base.
          </p>
        </CardContent>
      </Card>

      {/* CAST SECTION */}
      <MeetCast characters={characters} />

      {/* Latest Chapter */}
      <div className="space-y-8">
        <h3 className="text-4xl text-center font-semibold bg-gradient-to-br from-orange-500 to-violet-400 bg-clip-text text-transparent relative">
          Latest Chapters
        </h3>
        <div className="space-y-6">
          {chapters.map((chapter, index) => (
            <Card key={index} className="bg-gradient-to-r from-white to-blue-50 border-4 border-blue-200 hover:border-blue-400 hover:scale-102 transition-all duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge className="bg-blue-500 text-white">
                    Chapter {chapter.chapter}
                  </Badge>
                  <div className="flex text-gray-500 text-md items-center">
                    <Calendar className="w-5 h-5"/>
                    {new Date(chapter.data).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-2xl text-purple-800 hover:text-purple-600 transition-colors duration-200">
                  {chapter.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  {chapter.description}
                </p>
                <div className="justify-between flex">
                  <Button variant="ghost" size="sm"  className="text-purple-700 hover:text-purple-500 hover:scale-110 transition-transform duration-200">
                  </Button>
                  <div className="space-x-6">
                    <Button 
                      variant="ghost" 
                      size="sm"  
                      onClick={() => setLiked(!liked)}
                      className="hover:text-red-700 hover:scale-110 transition-all duration-200">
                      <Heart 
                        className={`stroke-red-500 w-4 h-4 transition-colors
                        ${liked ? "fill-pink-400" : "fill-transparent"}`}/>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setMinded(!minded)}
                      className="hover:text-yellow-700 hover:scale-110 transition-all duration-200 ">
                      <Star 
                        className={`stroke-yellow-500 w-4 h-4 transition-colors
                        ${minded ? "fill-yellow-300" : "fill-transparent"}`}
                        />
                    </Button>
                  </div>
                </div>
              </CardContent>
              
            </Card>
          ))}
        </div>
      </div>

      {/* Reading Info Section */}
      {/* <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-4 border-indigo-200 relative overflow-hidden text-center space-y-12 p-6 rounded-xl">
        <h2 className="text-3xl text-purple-800">
          Reading Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="items-center rounded-full text-white w-16 h-16 bg-green-500 justify-center mx-auto flex p-1 shadow-lg z-10">
              <Calendar className="w-8 h-8"/>
            </div>
            <h3 className="text-purple-800 text-xl text-center">Update Schedule</h3>
            <p className="text-gray-700">
              New chapters every Monday at 9 AM EST
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="items-center rounded-full text-white w-16 h-16 bg-blue-500 justify-center mx-auto flex p-3 shadow-lg">
              <BookOpen className="w-8 h-8"/>
            </div>
            <h3 className="text-purple-800 text-xl text-center">Total Chapters</h3>
            <p className="text-gray-700 leading-relaxed">
              15 chapters and counting!
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="items-center rounded-full text-white w-16 h-16 bg-purple-500 justify-center mx-auto flex p-3 shadow-lg">
              <Star className="w-8 h-8"/>
            </div>
            <h3 className="text-purple-800 text-xl text-center">Rating</h3>
            <p className="text-gray-700 leading-relaxed">
              All ages - Perfect for monster lovers!
            </p>
          </div>
        </div>
      </div> */}

      {/* Call to Action Section */}
      <div className="py-12 px-6 space-y-5 text-center bg-gradient-to-r from-white to-purple-50 rounded-3xl border-4 border-purple-200 relative overflow-hidden">
          <h3 className="text-4xl text-purple-800">Ready to Join the Adventure?</h3>
          <p className="text-xl text-gray-800 mx-auto max-w-3xl mb-8 leading-relaxed">
            Dive into Natalia's supernatural retail world! Follow the comic for weekly updates, character development, and plenty of monster mall mayhem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">          
            {/* <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white hover:gray-100 hover:scale-105 transition-all duration-300 relative">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Reading Now
            </Button>
            <Button size="lg" className="bg-white border-1 border-purple-600 text-purple-800 hover:gray-100 hover:scale-105 transition-1ll duration-200 relative">
              <Heart className="w-5 h-5 mr-2" />
              Subscribe for Updates
            </Button> */}
            <p className="text-md text-gray-700 font-semibold italic">--- COMING SOON ---</p>
          </div>          
          <p className="text-sm text-gray-600">
            Free to read • Updates every Monday • Join our community of monster mall fans!
          </p>        
      </div>    
    </div>
  )
}