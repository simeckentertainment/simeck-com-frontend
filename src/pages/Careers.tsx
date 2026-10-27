import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { SearchIcon, Coffee, Heart, Users, Sparkle, Briefcase, Mail } from "lucide-react"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button";


export function Careers() {
  const perks = [
    {
      icon: <Coffee className="w-6 h-6" />,
      name: "Unlimited Coffee",
      description: "Fuel your creativity with our premium coffee bar (and emergency energy drinks)",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      name: "Unlimited Coffee",
      description: "Fuel your creativity with our premium coffee bar (and emergency energy drinks)",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Unlimited Coffee",
      description: "Fuel your creativity with our premium coffee bar (and emergency energy drinks)",
    },
    {
      icon: <Sparkle className="w-6 h-6" />,
      name: "Unlimited Coffee",
      description: "Fuel your creativity with our premium coffee bar (and emergency energy drinks)",
    },
  ];

  const futureRoles = [
    "Game Programmer (Unity/C#)",
    "2D/3D Character Artist", 
    "UI/UX Designer",
    "Comic Artist & Illustrator",
    "Sound Designer & Composer",
    "Community Manager",
    "Quality Assurance Tester",
    "Marketing & Social Media Specialist"
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 relative">
        <div className="relative inline-block">
          <h1 className="text-6xl text-purple-300 mb-4 transform hover:scale-105 transition-transform duration-300 text-shadow-lg">
            Join Our Wacky Team!
          </h1>
        </div>
        <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed text-shadow-sm">
          While we're not currently hiring, we're always excited to meet talented, passionate, 
          and slightly eccentric individuals who might want to help us create the next generation of delightfully weird entertainment!
        </p>
      </div>

      {/* Current Opening Section */}
      <Card className="bg-white border-4 border-purple-200 relative overflow-hidden space-y-4">
        <CardHeader className="text-center relative space-y-4">
          <div className="w-20 h-20 flex items-center justify-center mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-full text-white">
            <SearchIcon className="w-8 h-8"/>
          </div>
          <CardTitle className="text-4xl text-purple-800">
            No Current Openings
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-6 text-center">
          <p className="text-leading text-center text-xl">
            Our team is currently at full capacity (and our office coffee machine can only handle so much!), 
            but that doesn't mean we're not interested in hearing from amazing talent.
          </p>
          <p className="text-leading text-center text-xl">
            We're a small but mighty studio, and when we do grow, we want to make sure we find the perfect people 
            who share our passion for creating wonderfully weird and heartwarming entertainment.
          </p>
          <Badge className="bg-orange-500 text-white text-lg px-4 py-2">
            Status: Team Complete (For Now!)
          </Badge>
        </CardContent>
      </Card>

      {/* Future Members section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {perks.map((perk, index) => (
          <Card key={index} className="overflow-hidden relative border-4 border-purple-200 hover:border-purple-400 bg-white hover:-rotate-1 hover:scale-105 transition-all duration-300 group">
            <CardHeader className="text-center space-y-4">
              <div className="items-center mx-auto w-16 h-16 bg-purple-500 text-white rounded-full justify-center flex group-hover:scale-110 transition-all duration-300">
                {perk.icon}
              </div>
              <CardTitle className="text-purple-800 text-xl">
                {perk.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-center">
              {perk.description}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Future Dream Team Role */}
      <Card className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50 border-4 border-blue-200">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-purple-800 text-3xl">
            Future Dream Team Roles
          </CardTitle>
          <p className="text-gray-700 text-lg">
            When we do expand, these are the kinds of talented individuals we'd love to welcome:
          </p>
        </CardHeader>
        <CardContent className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {futureRoles.map((featureRole, index) => (
            <div key={index} className="flex border-2 border-blue-200 bg-white/80 hover:border-blue-300 hover:scale-105 transition-all duration-300 rounded-xl p-4 items-center gap-2">
              <div className="text-2xl bg-blue-500 p-2 rounded-full">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div className="text-purple-800">
                {featureRole}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Studio Culture */}
      <Card className="relative overflow-hidden bg-gradient-to-r from-white to-purple-50 border-4 border-pink-200">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-purple-800 text-3xl">
            Our Studio Culture
          </CardTitle>
        </CardHeader>
        <CardContent className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="space-y-4">
            <h4 className="text-purple-800 text-xl">What We Value:</h4>
            <ul className="space-y-2">
              <li className="flex space-x-2 text-lg">
                <span className="text-purple-500">•</span>
                <p className="text-gray-800">Creativity over convention</p>
              </li>
              <li className="flex space-x-2 text-lg">
                <span className="text-purple-500">•</span>
                <p className="text-gray-800">Collaboration and kind communication</p>
              </li>
              <li className="flex space-x-2 text-lg">
                <span className="text-purple-500">•</span>
                <p className="text-gray-800">Learning from failures (and laughing about them)</p>
              </li>
              <li className="flex space-x-2 text-lg">
                <span className="text-purple-500">•</span>
                <p className="text-gray-800">Passion for making people smile</p>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-purple-800 text-xl">What You Can Expect:</h4>
            <ul className="space-y-2">
              <li className="flex space-x-2 text-lg">
                <span className="text-purple-500">•</span>
                <p className="text-gray-800">A supportive, fun work environment</p>
              </li>
              <li className="flex space-x-2 text-lg">
                <span className="text-purple-500">•</span>
                <p className="text-gray-800">Opportunities to grow and learn</p>
              </li>
              <li className="flex space-x-2 text-lg">
                <span className="text-purple-500">•</span>
                <p className="text-gray-800">Your ideas will be heard and valued</p>
              </li>
              <li className="flex space-x-2 text-lg">
                <span className="text-purple-500">•</span>
                <p className="text-gray-800">Characters that occasionally escape their games</p>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action Section */}
      <div className="py-12 px-6 space-y-5 text-center bg-gradient-to-r from-white to-blue-100 rounded-3xl border-4 border-purple-200 relative overflow-hidden">
        <h3 className="text-4xl text-purple-800">Interested in Our Future?</h3>
        <p className="text-xl text-gray-800 mx-auto max-w-3xl mb-8 leading-relaxed">
          Even though we're not hiring right now, we'd love to connect with passionate creators!
          Send us your portfolio, introduce yourself or just say hi. 
          You never know when the perfect opportunity might arise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center group">          
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white hover:gray-100 hover:scale-105 transition-all duration-300 relative">
            <Mail className="w-5 h-5 mr-2" />
            Send Us Your Portfolio
          </Button>
          <Button size="lg" className="border-1 border-purple-600 text-purple-800 hover:scale-105 transition-1ll duration-200 relative group-hover:bg-white group-hover:border-purple-700 group-hover:text-purple-700">
            <Users className="w-5 h-5 mr-2" />
            Follow Our Journey
          </Button>
        </div>   
        <div>
          <p className="text-sm text-gray-600">
            Email us at <span className="font-bold">simeckentertainment@gmail.com</span> with "Future Team Member" in the subject line
          </p> 
          <p className="text-xs text-gray-600 mt-2">
            (Fair warning: Fat Butters might leave paw prints on your application)
          </p>    
        </div>             
      </div>  

    </div>
  )
}