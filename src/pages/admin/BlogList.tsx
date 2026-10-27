import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Search,
  Calendar,
  ChevronLeft,
  ChevronRight,
  FileText
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

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

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalBlogs: number;
  hasNext: boolean;
  hasPrev: boolean;
}

interface BlogResponse {
  success: boolean;
  data: {
    blogs: Blog[];
    pagination: PaginationInfo;
  };
}

export function BlogList() {
  const { token } = useAuth();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalBlogs: 0,
    hasNext: false,
    hasPrev: false
  });
  const [limit] = useState(10);

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, sortBy, filterCategory, filterStatus, searchTerm]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      
      // Build query parameters
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: limit.toString(),
        sort: sortBy
      });

      if (filterCategory) params.append('category', filterCategory);
      if (filterStatus) params.append('status', filterStatus);
      if (searchTerm) params.append('search', searchTerm);

      const response = await fetch(`https://simeck-website-backen.vercel.app/api/blogs?${params}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
           
        }
      });

      if (response.ok) {
        const data: BlogResponse = await response.json();
        setBlogs(data.data.blogs || []);
        setPagination(data.data.pagination || pagination);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (blogId: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`https://simeck-website-backen.vercel.app/api/blogs/${blogId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // Refresh the current page after deletion
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  const handleFilterChange = () => {
    setCurrentPage(1); // Reset to first page when filters change
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Programming": "bg-blue-500",
      "Technology": "bg-green-500",
      "Gaming": "bg-purple-500",
      "Lifestyle": "bg-pink-500",
      "Tutorial": "bg-orange-500",
      "News": "bg-red-500"
    };
    return colors[category] || "bg-gray-500";
  };

  const categories = ["Programming", "Technology", "Gaming", "Lifestyle", "Tutorial", "News", "Review", "Opinion"];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl text-white font-bold">Blog Management</h1>
          <p className="text-gray-600 mt-2">Manage your blog posts and content</p>
        </div>
        <Link to="/admin/blogs/create">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create New Blog
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  handleFilterChange();
                }}
                className="pl-10 border-2 border-purple-200 focus:border-purple-400"
              />
            </div>
            
            <select
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value);
                handleFilterChange();
              }}
              className="border-2 border-purple-200 focus:border-purple-400 rounded-md px-3 py-2"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
                handleFilterChange();
              }}
              className="border-2 border-purple-200 focus:border-purple-400 rounded-md px-3 py-2"
            >
              <option value="">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="border-2 border-purple-200 focus:border-purple-400 rounded-md px-3 py-2"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="title">Title A-Z</option>
            </select>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Total: {pagination.totalBlogs}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Blog List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading blogs...</p>
        </div>
      ) : (
        <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
          <CardContent className="p-0">
            {blogs.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl text-gray-600 mb-2">No blogs found</h3>
                <p className="text-gray-500 mb-4">
                  {searchTerm || filterCategory || filterStatus 
                    ? "Try adjusting your search or filters" 
                    : "Create your first blog post to get started"}
                </p>
                <Link to="/admin/blogs/create">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Blog
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-100 to-purple-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-purple-800">Title</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-purple-800">Category</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-purple-800">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-purple-800">Views</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-purple-800">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-purple-800">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100">
                    {blogs.map((blog) => (
                      <tr key={blog._id} className="hover:bg-purple-50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <h3 className="font-semibold text-purple-800 hover:text-purple-600 transition-colors">
                              {blog.title}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{blog.description}</p>
                            {blog.tags && blog.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {blog.tags.slice(0, 2).map((tag, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                                {blog.tags.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{blog.tags.length - 2}
                                  </Badge>
                                )}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Badge className={`${getCategoryColor(blog.category)} text-white`}>
                            {blog.category}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Badge className={`${blog.isPublished ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
                            {blog.isPublished ? 'Published' : 'Draft'}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Eye className="w-4 h-4 mr-1" />
                            {blog.views || 0}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(blog.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Link to={`/blog/${blog._id}`} target="_blank">
                              <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-100">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </Link>
                            
                            <Link to={`/admin/blogs/edit/${blog._id}`}>
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </Link>
                            
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-red-600 hover:bg-red-100"
                              onClick={() => deleteBlog(blog._id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing page {pagination.currentPage} of {pagination.totalPages} 
                ({pagination.totalBlogs} total blogs)
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={!pagination.hasPrev}
                  className="text-purple-600 hover:bg-purple-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                    const pageNum = pagination.currentPage <= 3 
                      ? i + 1 
                      : pagination.currentPage >= pagination.totalPages - 2
                        ? pagination.totalPages - 4 + i
                        : pagination.currentPage - 2 + i;
                    
                    if (pageNum < 1 || pageNum > pagination.totalPages) return null;
                    
                    return (
                      <Button
                        key={pageNum}
                        variant={pageNum === pagination.currentPage ? "default" : "ghost"}
                        size="sm"
                        onClick={() => handlePageChange(pageNum)}
                        className={pageNum === pagination.currentPage 
                          ? "bg-purple-600 text-white" 
                          : "text-purple-600 hover:bg-purple-100"
                        }
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={!pagination.hasNext}
                  className="text-purple-600 hover:bg-purple-100"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
          <CardContent className="text-center p-6">
            <div className="text-3xl font-bold text-purple-800 mb-2">{pagination.totalBlogs}</div>
            <div className="text-gray-600">Total Blogs</div>
          </CardContent>
        </Card>
        
        <Card className="border-4 border-green-200 bg-gradient-to-br from-white to-green-50">
          <CardContent className="text-center p-6">
            <div className="text-3xl font-bold text-green-800 mb-2">
              {blogs.filter(blog => blog.isPublished).length}
            </div>
            <div className="text-gray-600">Published</div>
          </CardContent>
        </Card>
        
        <Card className="border-4 border-yellow-200 bg-gradient-to-br from-white to-yellow-50">
          <CardContent className="text-center p-6">
            <div className="text-3xl font-bold text-yellow-800 mb-2">
              {blogs.filter(blog => !blog.isPublished).length}
            </div>
            <div className="text-gray-600">Drafts</div>
          </CardContent>
        </Card>

        <Card className="border-4 border-blue-200 bg-gradient-to-br from-white to-blue-50">
          <CardContent className="text-center p-6">
            <div className="text-3xl font-bold text-blue-800 mb-2">
              {blogs.reduce((total, blog) => total + (blog.views || 0), 0)}
            </div>
            <div className="text-gray-600">Total Views</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
