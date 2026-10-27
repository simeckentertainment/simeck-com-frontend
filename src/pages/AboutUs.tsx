import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/card"
import { Heart, Users, Sparkles, Coffee } from "lucide-react"
import { Badge } from "../components/ui/Badge"

export function AboutUs() {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Fun ChevronFirst",
      description: "We Believe entertainment should bring joy, laughter, and a healthy dose of silliness to everyone."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Our fans inspire us daily. Every character interaction and story arc is crafted with our community in mind."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creative Freedom",
      description: "We give our imagination free rein to create the most wonderfully weird and delightful experiences."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Caffeinated Creativity",
      description: "Powered by coffee, fueled by passion, and occasionally distracted by our own characters."
    },
  ];

  const teams = [
    {
      name: "The Creative Chaos Crew",
      role: "Game Developers & Storytellers",
      description: "A ragtag team of developers who believe that the best games come from the wackiest ideas.",
      icon: "🎮"
    },
    {
      name: "The Art Wizards",
      role: "Visual Artists & Character Designers",
      description: "The magical beings responsible for bringing our lovable characters to life in all their colorful glory.",
      icon: "🎨"
    },
    {
      name: "The Story Weavers",
      role: "Writers & Narrative Designers",
      description: "The masterminds behind every plot twist, character backstory, and witty dialogue line.",
      icon: "📚"
    }
  ];

  const studioFacts = [
    "We've consumed over 2,847 cups of coffee while developing our games (and counting!).",
    "Fat Butters was originally going to be a cat, but our office dog convinced us otherwise.",
    "Our whiteboard is 73% character doodles and 27% actual project planning.",
    'We hold weekly "Character Court" sessions where our creations get to voice complaints about their storylines.',
    "Every team member has accidentally named their real pets after our game characters at least once.",
    "Our office playlist is 90% video game soundtracks and 10% songs our characters would actually listen to."
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] relative overflow-hidden text-center text-white rounded-3xl space-y-6 p-12">
        <h1 className="text-6xl transform hover:scale-105 transition-transform duration-300 text-white">
          About Simeck Entertainment
        </h1>
        <div className="text-blue-50 text-lg max-w-5xl mx-auto leading-relaxed space-y-4">
          <p className="">
            Simeck Entertainment was born from a phone call between two friends with a wild idea: “Hey, wanna start an animation studio?”
            That call, back in 2013, set everything in motion.
            Within a year, Randy Simon and Carl Mineck packed up, teamed up, and officially launched Simeck Entertainment in Phoenix.
            The name itself is a playful portmanteau of their last names — a reminder that everything we do starts with collaboration and friendship.
          </p>
          <p>
            We began as an animation studio, experimenting with storytelling through moving pictures.
            Over the years, we’ve followed our curiosity and creativity into new worlds: first comics, and now games.
            Along the way, our mission has stayed the same — to create great art while treating people with compassion.
            We believe that when you care for your people, your people thrive.
          </p>
          <p>
            Our games and stories are colorful, silly, and family-friendly — made for kids, but always with a wink and a nod for the parents.
            We want our audience to walk away smiling, feeling like they’ve just had a genuinely fun time.
            Looking ahead, we’re excited to keep building games that spark joy, laughter, and connection.
            Simeck is more than just entertainment — it’s about play, kindness, and the belief that art can bring people together.

          </p>
        </div>        
      </div>

      {/* Our Story */}
      {/* <Card className="bg-gradient-to-br from-indigo-200 via-purple-100 to-blue-200 rounded-3xl relative overflow-hidden ">
        <CardHeader className="text-center relative">
          <CardTitle className="text-4xl text-purple-800">
            About Simeck Entertainment
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-6 text-lg">
          <p className="text-leading ">
            Simeck Entertainment was born from a phone call between two friends with a wild idea: “Hey, wanna start an animation studio?” 
            That call, back in 2013, set everything in motion. 
            Within a year, Randy Simon and Carl Mineck packed up, teamed up, and officially launched Simeck Entertainment in Phoenix. 
            The name itself is a playful portmanteau of their last names — a reminder that everything we do starts with collaboration and friendship.
          </p>
          <p>
            We began as an animation studio, experimenting with storytelling through moving pictures. 
            Over the years, we’ve followed our curiosity and creativity into new worlds: first comics, and now games. 
            Along the way, our mission has stayed the same — to create great art while treating people with compassion. 
            We believe that when you care for your people, your people thrive.
          </p>
          <p>
            Our games and stories are colorful, silly, and family-friendly — made for kids, but always with a wink and a nod for the parents. 
            We want our audience to walk away smiling, feeling like they’ve just had a genuinely fun time.
            Looking ahead, we’re excited to keep building games that spark joy, laughter, and connection. 
            Simeck is more than just entertainment — it’s about play, kindness, and the belief that art can bring people together.
          </p>
        </CardContent>
      </Card> */}

      {/* Company Value Section */}
      <div className="space-y-8">
        <h3 className="text-4xl text-center font-semibold bg-gradient-to-br from-orange-500 to-violet-400 bg-clip-text text-transparent relative">
          What We Believe in
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-4 border-pink-200 hover:border-pink-400 bg-gradient-to-br from-white to-orange-50 group hover:scale-105 hover:-rotate-1 transition-all duration-300">
              <CardHeader className="text-center gap-8">
                <div className="items-center mx-auto w-16 h-16 bg-purple-500 rounded-full justify-center relative flex text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <CardTitle className="text-purple-800 text-xl">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700 leading-relaxed">
                {value.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-8">
        <h3 className="text-4xl text-center font-semibold bg-gradient-to-br from-orange-500 to-violet-400 bg-clip-text text-transparent relative">
          Meet Our Chaotic Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <Card key={index} className="border-4 border-blue-200 hover:border-blue-400 bg-gradient-to-br from-white to-blue-50 group hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center gap-2">
                <div className="items-center mx-auto w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 text-3xl mb-4 rounded-full justify-center relative flex text-white group-hover:scale-110 transition-transform duration-300">
                  {team.icon}
                </div>
                <CardTitle className="text-purple-800 text-2xl">
                  {team.name}
                </CardTitle>
                <div>
                  <Badge className="bg-purple-500 text-white text-sm">
                    {team.role}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-center text-gray-700 leading-relaxed">
                {team.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Studio Facts Section */}
      <div className="bg-gradient-to-br from-white to-gray-50 border-4 border-purple-200 relative overflow-hidden space-y-8 p-6 rounded-xl">
        <h2 className="text-center text-4xl text-purple-800">
          Fun Studio Facts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          {studioFacts.map((item, index) => (
            <div key={index} className="flex items-start space-x-2 p-3 bg-white/80 rounded-lg relative ">
              <div className="w-7 h-7 rounded-full text-purple-600 font-medium text-lg flex items-center justify-center leading-none">
                {index + 1}.
              </div>
              <span className="text-gray-700 text-lg leading-relaxed">
                {item}
              </span>
            </div>

          ))}
        </div>
      </div>

      {/* Mission Section */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-white to-pink-50 border-4 border-pink-200 py-4">
        <CardHeader className="text-center">
          <CardTitle className="text-purple-800 text-4xl">
            Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-gray-700 text-xl max-w-4xl mx-auto mb-6 leading-relaxed">
            To create entertainment that makes people smile, laugh, and occasionally question their sanity (in the best possible way).
            We believe the world needs more joy, more silliness, and definitely more corgi characters with jetpacks.
          </div>
          <div className="text-purple-700 text-lg italic mb-4">
            "If we can make one person's day a little brighter with our wacky creations, then we've done our job. If we can make a million people smile, even better!"
          </div>
          <div className="text-gray-600 text-sm">
            - The Entire Simeck Entertainment Team (and Fat Butters)
          </div>
        </CardContent>
      </Card>

    </div>
  )
}