import {  Bell, Eye, Construction, Sparkles, Star, Zap } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { CardHeader } from "../components/ui/card"
import { CardTitle } from "../components/ui/card"
import { Card } from "../components/ui/card"
import { CardContent } from "../components/ui/card"

export function UnannouncedProject() {
  const teasers = [
    "A new character with magical abilities is joining our universe...",
    "The biggest adventure yet awaits in this upcoming project...",
    "Get ready for a completely new style of gameplay...",
    "Our most ambitious story is currently in development..."
  ]

  return (
    <div className="space-y-12">
       {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl space-y-6 py-12 text-center items-center">
        <Badge className="bg-white/20 text-white backdrop-blur-sm text-lg py-2 px-4">
          🔒 TOP SECRET PROJECT
        </Badge>
        <h2 className="text-white text-7xl hover:scale-105 transition-transform duration-300">Under Construction!</h2>
        <p className="text-white text-2xl max-w-3xl mx-auto leading-relaxed">Something AMAZING is brewing in the Simeck Entertainment labs! Our characters are working overtime to bring you the most spectacular adventure yet.</p>
        <div className="flex sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-gradient-to-br from-orange-500 to-purple-400 text-white hover:scale-105 transition-all duration-200">
            <Bell className="w-5 h-5 mr-2"/>
            Notify Me When Ready
          </Button>
          <Button size="lg" className="bg-white border-2 border-white hover:bg-white/10 hover:scale-105 transition-all duration-200">
            <Eye className="w-5 h-5 mr-2"/>
            Sneak Peek Gallery
          </Button>
        </div>
      </div>

      {/* Development Status Section*/}
      <Card className="bg-gradient-to-br from-white to-orange-50 border-4 border-orange-200 space-y-4">
        <CardHeader className="relative z-10 text-center">
          <CardTitle className="flex items-center justify-center gap-3 text-4xl text-purple-800">
            <Construction className="text-orange-600 w-8 h-8"/>
            Development Status
            <Construction className="text-orange-600 w-8 h-8"/>
          </CardTitle>
        </CardHeader>

        {/* progressbar */}
        <CardContent className="space-y-6">
          <div className="space-y-2 relative">
            <div className="justify-between flex">
              <span className="text-purple-800 text-lg">Character Design</span>
              <Badge className="bg-green-500 text-white">95% Complete</Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-100" style={{width: '95%'}}>
                <div className="bg-white/30 h-full rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
           
          <div className="space-y-2 relative">
            <div className="justify-between flex">
              <span className="text-purple-800 text-lg">Story Development</span>
              <Badge className="bg-blue-500 text-white">78% Complete</Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full transition-all duration-100" style={{width: '78%'}}>
                <div className="bg-white/30 h-full rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="space-y-2 relative">
            <div className="justify-between flex">
              <span className="text-purple-800 text-lg">Gameplay Mechanics</span>
              <Badge className="bg-yellow-500 text-white">62% Complete</Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-4 rounded-full transition-all duration-100" style={{width: '62%'}}>
                <div className="bg-white/30 h-full rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="space-y-2 relative">
            <div className="justify-between flex">
              <span className="text-purple-800 text-lg">Art & Animation</span>
              <Badge className="bg-purple-500 text-white">43% Complete</Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-4 rounded-full transition-all duration-100" style={{width: '43%'}}>
                <div className="bg-white/30 h-full rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>          
        

          <div className="text-center space-y-4">
            <p className="text-xl text-gray-700">
              Our team of dedicated developers (and occasionally helpful characters) are working around the clock!
            </p>
            <p className="text-lg text-purple-700">
              <strong>Estimated Release:</strong> Comming Soon
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Cryptic Clues & Teasers Section */}
      <div className="space-y-8">
        <h3 className="text-4xl text-center font-semibold bg-gradient-to-br from-orange-500 to-violet-400 bg-clip-text text-transparent relative">
          Cryptic Clues & Teasers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teasers.map((teaser, index) => (
            <Card key={index} className="border-4 border-pink-200 hover:border-pink-400 bg-gradient-to-br from-white to-orange-50 group hover:scale-105 hover:rotate-1 transition-all duration-300">
              <CardHeader className="text-center gap-8">
                <div className="items-center mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full justify-center relative flex text-white group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8"/>
                </div>
              </CardHeader>
              <CardContent className="text-center text-lg italic text-gray-700 leading-relaxed">
                "{teaser}"
              </CardContent>
            </Card>
          ))}
        </div>      
      </div>

      {/* Tell Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-4 border-indigo-200 relative overflow-hidden text-center space-y-12 p-6 rounded-xl">
        <h2 className="text-4xl text-purple-800">
          What We Can Tell You...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="items-center rounded-full text-white w-16 h-16 bg-purple-500 justify-center mx-auto flex p-1 shadow-lg z-10">
              <Star className="w-8 h-8"/>
            </div>
            <h3 className="text-purple-800 text-xl text-center">New Genre</h3>
            <p className="text-gray-700">
              This project explores a completely new genre for Simeck Enterainment!
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="items-center rounded-full text-white w-16 h-16 bg-orange-500 justify-center mx-auto flex p-3 shadow-lg">
              <Zap className="w-8 h-8"/>
            </div>
            <h3 className="text-purple-800 text-xl text-center">Bigger Cast</h3>
            <p className="text-gray-700 leading-relaxed">
              More characters than ever before will join this epic adventure!
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="items-center rounded-full text-white w-16 h-16 bg-green-500 justify-center mx-auto flex p-3 shadow-lg">
              <Sparkles className="w-8 h-8"/>
            </div>
            <h3 className="text-purple-800 text-xl text-center">Interactive Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Your choices will shape the narrative in unexpected ways!
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 px-6 space-y-5 text-center bg-gradient-to-r from-white to-orange-50 rounded-3xl border-4 border-orange-200 relative overflow-hidden">
          <h3 className="text-4xl text-purple-800">Can't Wait to Find Out More?</h3>
          <p className="text-xl text-gray-800 mx-auto max-w-3xl mb-8 leading-relaxed">
            Be the first to know when we reveal this mysterious project! Sign up for exclusive updates sneak peeks, ad maybe even some character sketches.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">          
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white hover:gray-100 hover:scale-105 transition-all duration-300 relative">
              <Bell className="w-5 h-5 mr-2" />
              Get Exclusive Updates
            </Button>
            <Button size="lg" className="bg-white border-1 border-purple-600 text-purple-800 hover:gray-100 hover:scale-105 transition-1ll duration-200 relative">
              <Star className="w-5 h-5 mr-2" />
              Follow Our Progress
            </Button>
          </div>          
          <p className="text-sm text-gray-600">
            We promise to keep it fun and never spam you with boring stuff!  
          </p>        
      </div>    
    </div>
  )
}