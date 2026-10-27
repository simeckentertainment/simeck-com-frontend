import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Calendar, User, MessageCircle } from "lucide-react";
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import FatButters from "../assets/FatButter.png"
import BooBearPeek from "../assets/web-absolute-png/BooBear.png"
import AriannaPeek from "../assets/web-absolute-png/Arianna.png"
import HeraldPeek from "../assets/web-absolute-png/Herald.png"
import Nigel from "../assets/web-absolute-png/Nigel.png"


interface Blog {
  _id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  views?: number;
  comments?: number;
  author?: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar?: string;
  };
  likes?: string[];
  publishedAt?: string;
  readingTime?: number;
  slug?: string;
}

interface BlogResponse {
  success: boolean;
  data: {
    blogs: Blog[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalBlogs: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
}

export function Home() {
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreBlogs, setHasMoreBlogs] = useState(true);

  useEffect(() => {
    fetchRecentBlogs();
  }, []);

  const fetchRecentBlogs = async (page: number = 1, append: boolean = false) => {
    try {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      
      const response = await fetch(`https://simeck-website-backen.vercel.app/api/blogs?page=${page}&limit=6&sort=newest`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data: BlogResponse = await response.json();
        const newBlogs = data.data.blogs || [];
        
        if (append) {
          setRecentBlogs(prev => [...prev, ...newBlogs]);
        } else {
          setRecentBlogs(newBlogs);
        }
        
        setCurrentPage(page);
        setHasMoreBlogs(data.data.pagination.hasNext);
      }
    } catch (error) {
      console.error('Error fetching recent blogs:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const loadMoreBlogs = () => {
    if (!loadingMore && hasMoreBlogs) {
      fetchRecentBlogs(currentPage + 1, true);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Game Update": "bg-blue-500",
      "Announcement": "bg-purple-500",
      "Comic Update": "bg-green-500",
      "Character Love": "bg-indigo-500",
      "Community": "bg-pink-500",
      "Technical": "bg-gray-500"
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center py-12 relative">
        <div className="relative inline-block">
          <h1 className="text-3xl lg:text-6xl text-purple-300 mb-4 transform hover:scale-105 transition-transform duration-300 text-shadow-lg px-4 lg:px-0">
            Welcome to Simeck Entertainment!
          </h1>

          {/* Fat Butters hanging off the title */}
          {/* Desktop (lg+) version */}
          <div className="hidden lg:block absolute -right-15 -top-4">
            <img
              src={FatButters}
              alt="Fat Butters"
              className="w-20 h-auto animate-bounce rounded-lg transform rotate-12"
              style={{
                animationDelay: "0.7s",
                filter: "drop-shadow(0 4px rgba(0,0,0,0.4))"
              }}
            />
          </div>
          {/* Mobile (below lg) version */}
        <div className="block lg:hidden absolute right-[-42px]   top-[-42px]">
            <img
              src={FatButters}
              alt="Fat Butters"
              className="w-20 h-auto animate-bounce rounded-lg transform rotate-12"
              style={{
                animationDelay: "0.7s",
                filter: "drop-shadow(0 5px rgba(0,0,0,0.29))"
              }}
            />
          </div>
        </div>
        <p className="text-sm lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-shadow-sm px-4 lg:px-0">
          Where art meets integrity! <br />
          Simeck is a talented creative group dedicated to making art ethically and fairly. 
          Come join us in making amazing art and stories through our games and comics!
        </p>
      </div>

      {/* Featured Posts */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading recent posts...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 overflow-visible px-4 lg:px-0">
          {recentBlogs.slice(0, 2).map((post, index) => (
            <div key={post._id} className="relative overflow-visible">
              <Card className="border-4 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden group bg-gradient-to-br from-white to-purple-50">
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <Badge className={`${getCategoryColor(post.category)} text-white mb-2`}>
                      {post.category}
                    </Badge>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-purple-800 group-hover:text-purple-600 transition-colors duration-300">
                    <div className="title-outer h-[64px]">
                      <div className="title-inner line-clamp-2">{post.title}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="card-content space-y-4">
                  <p className="text-gray-700 leading-relaxed line-clamp-1">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-5 h-5 mr-2" />
                        {post.author ? `${post.author.firstName} ${post.author.lastName}` : 'Unknown Author'}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {Array.isArray(post.comments) ? post.comments.length : (post.comments || 0)}
                      </div>
                    </div>
                    <Link to={`/blog/${post._id}`}>
                      <Button variant="ghost" className="text-purple-600 hover:bg-purple-100 hover:scale-105 transition-all duration-200">
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
               {index === 0 && (
                 <>
                   {/* Desktop version */}
                   {/* <div
                     className="pointer-events-none select-none absolute top-1/2 hidden lg:block"
                    style={{
                      transform: 'translate(14%,-67%)',
                      height: 'clamp(180px, 32vw, 280px)',
                      right: 'clamp(-120px, -8vw, -60px)'
                    }}
                  >
                    <img
                      src={BooBearPeek}
                      alt="Boo Bear waving"
                      className="h-full w-auto drop-shadow-xl"
                    />
                  </div> */}
                   {/* Mobile version */}
                   <div
                     className="lg:hidden pointer-events-none select-none absolute"
                     style={{
                       bottom: '28px',
                       right: '-129px',
                       height: '270px'
                     }}
                   >
                     <img
                       src={BooBearPeek}
                       alt="Boo Bear waving"
                       className="h-full w-auto drop-shadow-xl"
                     />
                   </div>
                </>
              )}
              {index === 1 && (
                <>
                  {/* Desktop version */}
                  <div
                    className="pointer-events-none select-none absolute top-1/2 hidden lg:block"
                    style={{
                      transform: 'translate(14%,-67%)',
                      height: '280px',
                      right: '-110px'
                    }}
                  >
                    <img
                      src={BooBearPeek}
                      alt="Boo Bear waving"
                      className="h-full w-auto drop-shadow-xl"
                    />
                  </div>
                  {/* Mobile version */}
                  
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Recent Post Grid */}
      <div className="space-y-6 mb-[100px]">
        {/* Title */}
        <div className="text-2xl lg:text-3xl text-purple-300 text-center mb-8 lg:mb-12 relative text-shadow-lg px-4 lg:px-0">
          Latest Updates & News
          {/* Boo Bear decoration */}
          {/* <div className="absolute ">
            <img
              src={BooBear}
              alt="Boo Bear"
              className="w-13 h-auto animate-bounce shadow-2xl rounded-lg transform rotate-12"
              style={{
              animationDelay: "0.5s",
                filter: "drop-shadow(0 10px rgba(0, 0, 0, 0, 4))"
              }}
            />
          </div>        */}
        </div>

        {/* Updates & News Components */}
        {!loading && recentBlogs.length > 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 px-4 lg:px-0">
            {recentBlogs.slice(2).map((post, index) => (
              <div key={post._id} className="relative overflow-visible">
                <Card className="border-4 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden group bg-gradient-to-br from-white to-purple-50">
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <Badge className={`${getCategoryColor(post.category)} text-white mb-2`}>
                        {post.category}
                      </Badge>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-purple-800 group-hover:text-purple-600 transition-colors duration-300">
                      <div className="title-outer h-[64px]">
                        <div className="title-inner line-clamp-2">{post.title}</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="card-content space-y-4">
                    <p className="text-gray-700 leading-relaxed line-clamp-1">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-5 h-5 mr-2" />
                          {post.author ? `${post.author.firstName} ${post.author.lastName}` : 'Unknown Author'}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          {Array.isArray(post.comments) ? post.comments.length : (post.comments || 0)}
                        </div>
                      </div>
                      <Link to={`/blog/${post._id}`}>
                        <Button variant="ghost" className="text-purple-600 hover:bg-purple-100 hover:scale-105 transition-all duration-200">
                          Read More →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {index === 0 && recentBlogs.length > 2 && (
                  <>
                    {/* Desktop version */}
                    <div
                      className="pointer-events-none select-none absolute hidden lg:block"
                      style={{
                        top: 'calc(27% - 30px)',
                        height: '610px',
                        transform: 'translateY(-50%)',
                        right: '-71px', 
                      }}
                    >
                      <img
                        src={AriannaPeek}
                        alt="Arianna lounging"
                        className="h-full w-auto drop-shadow-xl "
                      />
                    </div>
                    
                    {/* Mobile version with same positioning as parent card's content */}
                     <div
                       className="lg:hidden pointer-events-none select-none absolute inset-0 flex flex-col items-end justify-start"
                      style={{
                        top: 0,
                        right: 0,
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 1,
                      }}
                    >
                      {/* Herald, placed bottom right */}
                      <img
                        src={HeraldPeek}
                        alt="Herald cheering"
                        className="h-auto w-auto drop-shadow-xl opacity-70 absolute"
                        style={{
                          right: '37%',
                          height: '150px',   
                          bottom: '100%',
                        }}
                      />
                       {/* Nigel, placed bottom left */}
                       <img
                         src={Nigel}
                         alt="Nigel lounging"
                         className="w-auto drop-shadow-xl opacity-70 absolute"
                         style={{
                           bottom: '-60%',
                           left: '-14%',
                           height: '450px',
                         }}
                       />
                    </div>
                    </>
                )}

                {index === 1 && recentBlogs.length > 3 && (
                  <>
                    {/* Desktop version */}
                    <div
                      className="pointer-events-none select-none absolute hidden lg:block"
                      style={{
                        top: '-200px',
                        left: '136px',
                        height: '300px'
                      }}
                    >
                      <img
                        src={HeraldPeek}
                        alt="Herald cheering"
                        className="h-2/3 w-auto drop-shadow-xl opacity-80"
                      />
                    </div>
                    {/* Mobile version */}
                   
                  </>
                )}  

                {index === 2 && recentBlogs.length > 4 && (
                  <>
                    {/* Desktop version */}
                    <div
                      className="pointer-events-none select-none absolute hidden lg:block"
                      style={{
                        top: '181px',
                        left: '11%',
                        transform: 'translate(-34%, -50%)',
                        height: '440px'
                      }}
                    >
                      <img
                        src={Nigel}
                        alt="Nigel lounging"
                        className="h-full w-auto drop-shadow-xl opacity-80"
                      />
                    </div>
                    {/* Mobile version */}
                    <div
                      className="lg:hidden pointer-events-none select-none absolute"
                      style={{
                        top: '-150px',
                        right: '-30px',
                        height: '340px'
                      }}
                    >
                      <img
                        src={AriannaPeek}
                        alt="Arianna lounging"
                        className="h-full w-auto drop-shadow-xl"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Load More Button */}
        {!loading && hasMoreBlogs && (
          <div className="text-center mt-8">
            <Button 
              onClick={loadMoreBlogs}
              disabled={loadingMore}
              className="bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-200 px-8 py-3"
            >
              {loadingMore ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Loading More...
                </>
              ) : (
                'Load More Blogs'
              )}
            </Button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="relative overflow-hidden py-8 lg:py-12 text-center bg-gradient-to-r from-purple-100 to-pink-100 border-2 lg:border-4 rounded-2xl lg:rounded-3xl border-purple-200 space-y-4 lg:space-y-6 mx-4 lg:mx-6 px-4 lg:px-0">
        <h3 className="text-2xl lg:text-3xl font-bold text-purple-800">Join Our Wacky Adventure!</h3>
        <p className="text-sm lg:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">Stay updated with all our latest games, comics, and character shenanigans. Subscribe to our newsletter for exclusive content and behind-the-scenes fun!</p>
        <div className="flex flex-row justify-center gap-2 lg:gap-3 pt-2 flex-wrap">
          {/* <Button className="bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-200 relative px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-base flex-1 lg:flex-none">Subscribe to Newsletter</Button>
          <Button variant="outline" className="border-2 border-purple-600 text-purple-600 bg-white hover:bg-purple-100 hover:scale-105 transition-all duration-200 relative px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-base flex-1 lg:flex-none">Follow on Social Media</Button> */}
        </div>
      </div>
    </div>
  );
}