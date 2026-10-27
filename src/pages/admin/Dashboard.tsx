import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Link, useLocation } from "react-router-dom";
import { 
  FileText, 
  Users, 
  Settings, 
  BarChart3, 
  Plus, 
  Eye,
  MessageCircle,
  Calendar,
  Edit
} from "lucide-react";
import { useState, useEffect } from "react";
import FatButters from "../../assets/FatButter.png";

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

export function Dashboard() {
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // Get current page name for dynamic content
  const getCurrentPageName = () => {
    const path = location.pathname;
    if (path.includes('/admin/blogs')) return 'Blog Management';
    if (path.includes('/admin/users')) return 'User Management';
    if (path.includes('/admin/profile')) return 'Profile Settings';
    if (path.includes('/admin/analytics')) return 'Analytics';
    return 'Dashboard';
  };
  
  const currentPageName = getCurrentPageName();

  useEffect(() => {
    fetchRecentBlogs();
  }, []);

  const fetchRecentBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://simeck-website-backen.vercel.app/api/blogs?page=1&limit=10&sort=newest', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data: BlogResponse = await response.json();
        setRecentBlogs(data.data.blogs.slice(0, 3) || []); // Get top 3 blogs
      }
    } catch (error) {
      console.error('Error fetching recent blogs:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // Dynamic content based on current page
  const getDynamicContent = () => {
    switch (currentPageName) {
      case 'Blog Management':
        return {
          title: 'Recent Blog Posts',
          subtitle: 'Latest Posts',
          emptyMessage: 'No recent posts found.'
        };
      case 'User Management':
        return {
          title: 'Recent User Activity',
          subtitle: 'Latest Users',
          emptyMessage: 'No recent users found.'
        };
      case 'Profile Settings':
        return {
          title: 'Your Recent Activity',
          subtitle: 'Latest Activity',
          emptyMessage: 'No recent activity found.'
        };
      case 'Analytics':
        return {
          title: 'Recent Analytics',
          subtitle: 'Latest Data',
          emptyMessage: 'No recent data found.'
        };
      default:
        return {
          title: 'Recent Blog Posts',
          subtitle: 'Latest Posts',
          emptyMessage: 'No recent posts found.'
        };
    }
  };
  
  const dynamicContent = getDynamicContent();

  // Mock data - in a real app this would come from an API
  // const stats = [
  //   {
  //     title: "Total Blogs",
  //     value: "24",
  //     icon: <FileText className="w-6 h-6" />,
  //     color: "bg-blue-500",
  //     change: "+12%",
  //     trend: "up"
  //   },
  //   {
  //     title: "Published Blogs",
  //     value: "18",
  //     icon: <Eye className="w-6 h-6" />,
  //     color: "bg-green-500",
  //     change: "+8%",
  //     trend: "up"
  //   },
  //   {
  //     title: "Total Users",
  //     value: "156",
  //     icon: <Users className="w-6 h-6" />,
  //     color: "bg-purple-500",
  //     change: "+23%",
  //     trend: "up"
  //   },
  //   {
  //     title: "Comments",
  //     value: "89",
  //     icon: <MessageCircle className="w-6 h-6" />,
  //     color: "bg-orange-500",
  //     change: "+15%",
  //     trend: "up"
  //   }
  // ];


  const quickActions = [
    {
      title: "Create New Blog",
      description: "Write and publish a new blog post",
      icon: <Plus className="w-8 h-8" />,
      link: "/admin/blogs/create",
      color: "bg-blue-500"
    },
    {
      title: "Manage Users",
      description: "View and manage user accounts",
      icon: <Users className="w-8 h-8" />,
      link: "/admin/users",
      color: "bg-purple-500"
    },
    {
      title: "Update Profile",
      description: "Edit your profile information",
      icon: <Settings className="w-8 h-8" />,
      link: "/admin/profile",
      color: "bg-green-500"
    },
    {
      title: "View Analytics",
      description: "Check blog performance and stats",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/admin/analytics",
      color: "bg-orange-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-500";
      case "Draft":
        return "bg-yellow-500";
      case "Archived":
        return "bg-gray-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-center text-white bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 rounded-3xl space-y-6 p-12">
        <Badge className="bg-purple-500 text-white mb-4">
          Admin Dashboard
        </Badge>
        
        <h1 className="text-5xl md:text-6xl transform hover:scale-105 transition-transform duration-300 text-white">
          Welcome to Admin Panel
        </h1>
        
        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          Manage your blog, users, and content with ease. 
          Everything you need to run your Simeck Entertainment website is right here.
        </p>

        {/* Fat Butters decoration */}
        <div className="absolute sm:right-2 md:right-18 lg:-right-15 -top-4">
          <img
            src={FatButters}
            alt="Fat Butters"
            className="w-20 h-auto animate-bounce shadow-2xl rounded-lg transform rotate-12"
            style={{
              animationDelay: "0.5s",
              filter: "drop-shadow(0 10px rgba(0, 0, 0, 0, 4))"
            }}
          />
        </div>
      </div>

      {/* Stats Overview */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-4 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-800">
                {stat.title}
              </CardTitle>
              <div className={`w-12 h-12 ${stat.color} text-white rounded-full flex items-center justify-center`}>
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900">{stat.value}</div>
              <p className="text-xs text-green-600 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div> */}

      {/* Quick Actions */}
      <div className="space-y-6">
        <h3 className="text-3xl text-center text-white">
          Quick Actions
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.link}>
              <Card className="border-4 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50 cursor-pointer">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${action.color} text-white rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {action.icon}
                  </div>
                  <CardTitle className="text-white">{action.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-700">
                  {action.description}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Blogs */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl text-white">
            {dynamicContent.title}
          </h3>
          <Link to="/admin/blogs">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              View All Blogs
            </Button>
          </Link>
        </div>
        
        <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
          <CardHeader>
            <CardTitle className="text-white">{dynamicContent.subtitle}</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                <p className="text-gray-600 mt-2">Loading recent posts...</p>
              </div>
            ) : recentBlogs.length > 0 ? (
              <div className="space-y-4">
                {recentBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border-2 border-purple-100 rounded-lg hover:border-purple-200 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-purple-800">{blog.title}</h4>
                      <div className="flex flex-wrap items-center gap-2 sm:space-x-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {blog.views || 0} views
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {Array.isArray(blog.comments) ? blog.comments.length : (blog.comments || 0)} comments
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center gap-2 sm:space-x-0 sm:space-y-2 mt-2 sm:mt-0 min-w-[110px] sm:min-w-0">
                      <Badge className={`${getStatusColor(blog.isPublished ? "Published" : "Draft")} text-white min-w-[72px] text-center whitespace-nowrap`}>
                        {blog.isPublished ? "Published" : "Draft"}
                      </Badge>
                      <Link to={`/admin/blogs/edit/${blog._id}`}>
                        <Button variant="ghost" size="sm" className="text-white hover:bg-gray-100">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
                
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">{dynamicContent.emptyMessage}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Admin Navigation */}
      <div className="space-y-6">
        <h3 className="text-3xl text-center text-white">
          Admin Sections
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/admin/blogs">
            <Card className="border-4 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50 cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <CardTitle className="text-blue-800">Blog Management</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                Create, edit, and manage your blog posts. View analytics and moderate comments.
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/users">
            <Card className="border-4 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50 cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <CardTitle className="text-purple-800">User Management</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                Manage user accounts, roles, and permissions. View user activity and statistics.
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/profile">
            <Card className="border-4 border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-green-50 cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8" />
                </div>
                <CardTitle className="text-green-800">Profile Settings</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                Update your profile information, change password, and manage account settings.
              </CardContent>
            </Card>
          </Link>

          <Card className="border-4 border-orange-200 hover:border-orange-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-orange-50 cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <CardTitle className="text-orange-800">Analytics</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-700">
              View detailed analytics, traffic reports, and performance metrics for your website.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
