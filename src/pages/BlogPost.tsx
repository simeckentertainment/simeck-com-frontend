import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Calendar, User, MessageCircle, ArrowLeft, Heart, Star, Share2 } from "lucide-react";
import { useState, useEffect } from "react";

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

export function BlogPost() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [starred, setStarred] = useState(false);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://simeck-website-backen.vercel.app/api/blogs/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data) {
          setBlog(data.data);
        } else {
          setError('Blog not found');
        }
      } else {
        setError('Failed to fetch blog');
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      setError('Error fetching blog');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Game Update": "bg-blue-500",
      "Announcement": "bg-purple-500",
      "Comic Update": "bg-green-500",
      "Character Love": "bg-indigo-500",
      "Community": "bg-pink-500",
      "Technical": "bg-gray-500",
      "Programming": "bg-blue-500",
      "Technology": "bg-green-500",
      "Gaming": "bg-purple-500",
      "Lifestyle": "bg-pink-500",
      "Tutorial": "bg-orange-500",
      "News": "bg-red-500",
      "Review": "bg-yellow-500",
      "Opinion": "bg-gray-500",
      "Website": "bg-indigo-500",
      "Game Release": "bg-green-500",
      "Zoodia Content": "bg-orange-500"
    };
    return colors[category] || "bg-gray-500";
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">Loading blog post...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl text-purple-800 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">{error || "The blog post you're looking for doesn't exist."}</p>
        <Link to="/">
          <Button className="bg-purple-600 text-white hover:bg-purple-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back Navigation */}
      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="ghost" className="text-purple-600 hover:bg-purple-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden text-center text-white bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 rounded-3xl space-y-6 p-12">
        <Badge className={`${getCategoryColor(blog.category)} text-white mb-4`}>
          {blog.category}
        </Badge>
        
        <h1 className="text-5xl md:text-6xl transform hover:scale-105 transition-transform duration-300">
          {blog.title}
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-lg">
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            {blog.author ? `${blog.author.firstName} ${blog.author.lastName}` : 'Unknown Author'}
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            {new Date(blog.createdAt).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            {blog.readingTime ? `${blog.readingTime} min read` : '1 min read'}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Card className="relative overflow-hidden bg-white border-4 border-purple-200">
        <CardContent className="space-y-8 p-8">
          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Interactive Elements */}
          <div className="border-t-4 border-purple-200 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-6">
                <Button 
                  variant="ghost" 
                  onClick={() => setLiked(!liked)}
                  className="hover:text-red-700 hover:scale-110 transition-all duration-200"
                >
                  <Heart 
                    className={`stroke-red-500 w-5 h-5 mr-2 transition-colors
                    ${liked ? "fill-pink-400" : "fill-transparent"}`}
                  />
                  Like ({blog.likes ? blog.likes.length : 0})
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => setStarred(!starred)}
                  className="hover:text-yellow-700 hover:scale-110 transition-all duration-200"
                >
                  <Star 
                    className={`stroke-yellow-500 w-5 h-5 mr-2 transition-colors
                    ${starred ? "fill-yellow-300" : "fill-transparent"}`}
                  />
                  Star
                </Button>
                <Button 
                  variant="ghost" 
                  className="hover:text-blue-700 hover:scale-110 transition-all duration-200"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </div>
              
              <div className="text-sm text-gray-500">
                {Array.isArray(blog.comments) ? blog.comments.length : (blog.comments || 0)} comments
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tags Section */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-purple-800">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-purple-600 border-purple-300 hover:bg-purple-100">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="relative overflow-hidden py-12 text-center bg-gradient-to-r from-purple-100 to-pink-100 border-4 rounded-3xl border-purple-200 space-y-6 mx-6">
        <h3 className="text-3xl text-purple-800">Stay Updated!</h3>
        <p className="text-gray-700 max-w-2xl mx-auto">Don't miss out on our latest updates, game releases, and behind-the-scenes content. Subscribe to stay in the loop!</p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/">
            <Button className="bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-200">
              Explore More Content
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:scale-105 transition-all duration-200">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}