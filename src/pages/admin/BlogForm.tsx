import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/Textarea";
import { 
  Save, 
  ArrowLeft, 
  Plus,
  X,
  FileText
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

interface BlogFormData {
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage: string;
  isPublished: boolean;
}


export function BlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const isEdit = !!id;

  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    description: '',
    content: '',
    category: '',
    tags: [],
    featuredImage: '',
    isPublished: false
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [tagInput, setTagInput] = useState('');

  const categories = [
    "Programming",
    "Technology", 
    "Gaming",
    "Lifestyle",
    "Tutorial",
    "News",
    "Review",
    "Opinion"
  ];

  useEffect(() => {
    if (isEdit) {
      fetchBlog();
    }
  }, [id, isEdit]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://simeck-website-backen.vercel.app/api/blogs/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data) {
          const blog = data.data;
          setFormData({
            title: blog.title || '',
            description: blog.description || '',
            content: blog.content || '',
            category: blog.category || '',
            tags: blog.tags || [],
            featuredImage: blog.featuredImage || '',
            isPublished: blog.isPublished || false
          });
        }
      } else {
        setMessage('Failed to fetch blog data');
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      setMessage('Error fetching blog data');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const url = isEdit 
        ? `https://simeck-website-backen.vercel.app/api/blogs/${id}`
        : 'https://simeck-website-backen.vercel.app/api/blogs';
      
      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setMessage(isEdit ? 'Blog updated successfully!' : 'Blog created successfully!');
        
        setTimeout(() => {
          navigate('/admin/blogs');
        }, 1500);
      } else {
        setMessage(data.message || 'Operation failed');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link to="/admin/blogs">
          <Button variant="ghost" className="text-purple-600 hover:bg-purple-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl text-white font-bold">
            {isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h1>
          <p className="text-gray-600 mt-2">
            {isEdit ? 'Update your blog post content and settings' : 'Write and publish a new blog post'}
          </p>
        </div>
      </div>

      {/* Success/Error Messages */}
      {message && (
        <div className={`p-4 rounded-lg flex items-center gap-2 ${
          success ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          <FileText className="w-5 h-5" />
          {message}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Blog Title</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter blog title..."
                  required
                  className="border-2 border-purple-200 focus:border-purple-400 outline-none"
                />
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Description</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Brief description of your blog post..."
                  rows={3}
                  required
                  className="border-2 border-purple-200 focus:border-purple-400 outline-none resize-none"
                />
              </CardContent>
            </Card>

            {/* Content */}
            <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Content</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your blog content here..."
                  rows={15}
                  required
                  className="border-2 border-purple-200 focus:border-purple-400 outline-none resize-none"
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Publish Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={handleChange}
                    className="w-4 h-4 text-purple-600 border-2 border-purple-200 rounded focus:ring-purple-500"
                  />
                  <Label htmlFor="isPublished" className="text-purple-800">
                    Publish immediately
                  </Label>
                </div>
                
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {isEdit ? 'Updating...' : 'Creating...'}
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      {isEdit ? 'Update Blog' : 'Create Blog'}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Category */}
            <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Category</CardTitle>
              </CardHeader>
              <CardContent>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-purple-200 focus:border-purple-400 rounded-md px-3 py-2 outline-none"
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Add tag..."
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    className="border-2 border-purple-200 focus:border-purple-400 outline-none"
                  />
                  <Button
                    type="button"
                    onClick={handleAddTag}
                    variant="outline"
                    size="sm"
                    className="border-purple-200 text-purple-600 hover:bg-purple-100"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag, index) => (
                      <Badge key={index} className="bg-purple-500 text-white">
                        #{tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-2 hover:text-red-200"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Featured Image</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  name="featuredImage"
                  value={formData.featuredImage}
                  onChange={handleChange}
                  placeholder="Image URL..."
                  className="border-2 border-purple-200 focus:border-purple-400 outline-none"
                />
                {formData.featuredImage && (
                  <div className="mt-3">
                    <img
                      src={formData.featuredImage}
                      alt="Featured"
                      className="w-full h-32 object-cover rounded-lg border-2 border-purple-200"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
