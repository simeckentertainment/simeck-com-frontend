import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { Download } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/card"

export function BestestBear() {
  // return <h1>Bestest Bear</h1>;

  const stars = [
    {
      name: "Boo Bear",
      role: "The Blue Toddler Bear",
      description: "A cheerful blue bear toddler who seems to be perpetually happy. His bright simle and optimistic outlook make him the perfect friend for any adventure. Boo Bear loves playing games, sharing toys, and making everyone around him smile.",
      personality: `"Almost always smiling" - but what happens when he's not?`,
      icon: "🐻"
    },
    {
      name: "Chu",
      role: "The Toddler Tiger",
      description: "An energetic and playful tiger toddler who brings excitement to every situation. Chu loves adventures, games, and exploring new places with his best friend Boo Bear. His curiosity and enthusiasm are infectious.",
      personality: "The perfect companion for childhood adventures and innocent mischief.",
      icon: "🐯"
    },
  ]

  const specials = [
    {
      title: "Adroable Characters",      
      description: "Follow Boo Bear and Chu in their innocent toddler adventures.",
      icon: "🐻"
    },
    {
      title: "Heartwarming Story",      
      description: "A tale of friendship, play, and childhood wonder.",
      icon: "💙"
    },
    {
      title: "Beautiful Art",      
      description: "Vibrant, colorful illustrations that bring the characters to life.",
      icon: "🎨"
    },
    {
      title: "Hidden Depths",      
      description: "Not everything is as innocent as it seems.",
      icon: "👁️"
    },
  ];

  const awards = [
    {
      icon: "🏆",
      description: "Winner: Best indie Comic 2024"
    },
    {
      icon: "⭐",
      description: "Featured: Underground Comic Showcase"
    },
    {
      icon: "💖",
      description: "Community Choice: Most Heartwarming Story"
    },
    {
      icon: "🎨",
      description: "Honorable Mention: Best Character Design"
    },
  ];

  const reviews = [
    {
      rate: "⭐⭐⭐⭐⭐",
      saying: '"I thought this was just going to be a cute story about friendship, but there are layers here that really make you think. Beautiful art too!"',
      reviewer: "Comic Reader Magazine"
    },
    {
      rate: "⭐⭐⭐⭐⭐",
      saying: '"Boo Bear and Chu are absolutely adorable! This comic made me smile and then really made me think. Highly recommended!"',
      reviewer: "UndergroundComics.net"
    },
    {
      rate: "⭐⭐⭐⭐⭐",
      saying: '"Don\'t let the cute exterior fool you - this story has depth. It\'s become one of my favorite one-shots ever!"',
      reviewer: "IndieComicFan"
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-center text-white bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-400 rounded-3xl space-y-6 p-12">
        <Badge className="text-white bg-white/20 backdrop-blur-sm">
          📖 ONE-SHOT COMIC
        </Badge>
        <h1 className="text-6xl transform hover:scale-105 transition-transform duration-300">
          Bestest Bear
        </h1>
        <p className="text-2xl max-w-3xl mx-auto leading-relaxed">
          Boo Bear loves nothing more than to play with his best friend in the world, Chu the tiger. 
          However, something is amiss. Bestest Bear is based on a true story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
                // href={monsterMallOneSheet}
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

      {/* Overview Section */}
      <Card className="relative overflow-hidden bg-white border-4 border-blue-200">
        <CardHeader className="text-center relative z-10">
          <CardTitle className="text-4xl text-purple-800 mb-4">
            A Tale of Innocent Friendship
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg leading-relaxed relative z-10">
          <p className="text-gray-700">
            In a world painted in soft pastels and filled with childhood wonder, Boo Bear and Chu spend their days playing, exploring, and enjoying the simple pleasures of being young. Boo Bear, with his perpetual smile and bright blue fur, sees the world through eyes of pure joy and optimism.
          </p>
          <p className="text-gray-700">
            Chu, the energetic toddler tiger, brings adventure and mischief to their friendship. Together, they navigate the playground of life with the carefree attitude that only childhood can provide. Every day is a new adventure, every game is the most important thing in the world.
          </p>
          <p className="text-gray-700 italic border-l-4 border-blue-400 pl-4">
            But as readers journey deeper into their world, they may begin to notice that some things aren't quite what they seem. Shadows lurk at the edges of innocence, and Boo Bear's constant smile might be hiding more than simple happiness...
          </p>
        </CardContent>
      </Card>

      {/* Game Feature */}
      <div className="space-y-8">
        <h3 className="text-4xl text-center font-semibold bg-gradient-to-br from-orange-500 to-violet-400 bg-clip-text text-transparent relative">
          Meet Our Stars
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden border-4 border-blue-200 hover:border-blue-400 hover:shadow-xl rounded-2xl bg-gradient-to-br from-white to-blue-50 hover:-rotate-1 hover:scale-105 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-24 h-24 rounded-full mx-auto text-4xl items-center justify-center flex border-4 border-white shadow-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                {stars[0].icon}
              </div>
              <CardTitle className="text-purple-800 text-2xl">
                {stars[0].name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 mt-2">
              <Badge className="bg-blue-500 text-white">
                {stars[0].role}
              </Badge>
              <div className="text-gray-600">
                {stars[0].description}
              </div>
              <div className="border-t-2 border-blue-200 pt-4 text-blue-500 text-sm italic">
                {stars[0].personality}
              </div>
            </CardContent>            
          </div>
          <div className="relative overflow-hidden border-4 border-orange-200 hover:border-orange-400 hover:shadow-xl rounded-2xl bg-gradient-to-br from-white to-orange-50 hover:rotate-1 hover:scale-105 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="bg-gradient-to-br from-orange-400 to-yellow-500 w-24 h-24 rounded-full mx-auto text-4xl items-center justify-center flex border-4 border-white shadow-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                {stars[1].icon}
              </div>
              <CardTitle className="text-purple-800 text-2xl">
                {stars[1].name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 mt-2">
              <Badge className="bg-orange-500 text-white">
                {stars[1].role}
              </Badge>
              <div className="text-gray-600">
                {stars[1].description}
              </div>
              <div className="border-t-2 border-orange-200 pt-4 text-orange-500 text-sm italic">
                {stars[1].personality}
              </div>
            </CardContent>            
          </div>
        </div>
      </div>

      {/* Special Section */}
      <div className="space-y-8">
        <h3 className="text-4xl text-center font-semibold bg-gradient-to-br from-orange-500 to-violet-400 bg-clip-text text-transparent relative">
          What Makes It Special
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((special, index) => (
            <Card key={index} className="border-4 border-cyan-200 hover:border-cyan-400 bg-gradient-to-br from-white to-orange-50 group hover:scale-105 hover:-rotate-1 transition-all duration-300">
              <CardHeader className="text-center gap-8">
                <div className="items-center mx-auto w-16 h-16 bg-cyan-500 rounded-full justify-center relative flex text-white group-hover:scale-110 transition-transform duration-300 text-2xl">
                  {special.icon}
                </div>
                <CardTitle className="text-purple-800 text-xl">
                  {special.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700 leading-relaxed">
                {special.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Awards & Recognition */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-white to-yellow-50 border-4 border-yellow-200">
        <CardHeader className="text-center">
          <CardTitle className="text-purple-800 text-3xl">
            Awards & Recognition
          </CardTitle>
        </CardHeader>
        <CardContent className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {awards.map((award, index) => (
            <div key={index} className="flex border-2 border-orange-200 bg-white/80 hover:border-yellow-300 hover:scale-105 transition-all duration-300 rounded-2xl p-4 items-center gap-2">
              <div className="text-2xl">
                {award.icon}
              </div>
              <div className="text-purple-800">
                {award.description}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Review Section */}
      <Card className="relative overflow-hidden bg-gradient-to-r from-white to-purple-50 border-4 border-purple-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-purple-800">
            What Readers Are Saying
          </CardTitle>
        </CardHeader>
        <CardContent className="relative overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-2">
          {reviews.map((review, index) => (
            <div key={index} className="border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:scale-105 transition-all duration-300 p-4 space-y-4">
              <div className="text-lg">
                {review.rate}
              </div>
              <div className="text-gray-700 italic">
                {review.saying}
              </div>
              <div className="text-purple-700 text-sm">
                - {review.reviewer}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Call to Action Section */}
      <div className="py-12 px-6 space-y-5 text-center bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl border-4 border-purple-200 relative overflow-hidden">
          <h3 className="text-4xl text-purple-800">Ready to Meet Boo Bear?</h3>
          <p className="text-xl text-gray-800 mx-auto max-w-3xl mb-8 leading-relaxed">
            Experience this heartwarming tale of friendship, innocence, and the beautiful complexity that lies beneath simple smiles. 
            Availble to read now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center group">          
            {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white hover:gray-100 hover:scale-105 transition-all duration-300 relative">
              <BookOpen className="w-5 h-5 mr-2" />
              Read Bestest Bear
            </Button>
            <Button size="lg" className="border-1 border-blue-600 text-blue-800 hover:scale-105 transition-1ll duration-200 relative group-hover:bg-white group-hover:border-blue-700 group-hover:text-blue-700">
              <Download className="w-5 h-5 mr-2" />
              Download Free PDF
            </Button> */}
            <p className="text-md text-gray-700 font-semibold italic">--- COMING SOON ---</p>
          </div>          
          <p className="text-sm text-gray-600">
            Free to read • Perfect for all ages • Warning: Contatins subtle emotional depth
          </p>        
      </div>    
    </div>
  )
}