import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/label";
import { LogIn, ArrowLeft, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import FatButters from "../assets/FatButter.png";

interface LoginFormData {
  email: string;
  password: string;
}

interface User {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  avatar: string | null;
  isActive: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface LoginResponse {
  success: boolean;
  message: string;
  data?: {
    user: User;
    token: string;
  };
}

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  // Get the intended destination from navigation state
  const from = (location.state as any)?.from?.pathname || '/';
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear message when user starts typing
    if (message) {
      setMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://simeck-website-backen.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*'
        },
        body: JSON.stringify(formData)
      });

      const data: LoginResponse = await response.json();

      if (data.success && data.data) {
        setSuccess(true);
        setMessage(data.message || 'Login successful!');
        
        // Use AuthContext login function
        login(data.data.user, data.data.token);
        
        // Redirect to intended destination or admin dashboard after successful login
        setTimeout(() => {
          navigate(from.startsWith('/admin') ? from : '/admin/dashboard');
        }, 1500);
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

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
        <Badge className="bg-purple-500 text-white mb-4">
          Welcome Back
        </Badge>
        
        <h1 className="text-5xl md:text-6xl transform hover:scale-105 transition-transform duration-300">
          Sign In
        </h1>
        
        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          Welcome back to the Simeck Entertainment community! 
          Sign in to access exclusive content and connect with fellow fans.
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

      {/* Login Form */}
      <div className="max-w-md mx-auto">
        <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-purple-800 flex items-center justify-center gap-2">
              <LogIn className="w-8 h-8" />
              Sign In
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6 p-8">
            {/* Success/Error Messages */}
            {message && (
              <div className={`p-4 rounded-lg flex items-center gap-2 ${
                success ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {success ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="border-2 border-purple-200 focus:border-purple-400 outline-none"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input 
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="border-2 border-purple-200 focus:border-purple-400 outline-none pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-105 text-white transition-all duration-300 relative"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing In...
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </>
                )}
              </Button>
            </form>

            {/* Signup Link */}
            <div className="text-center pt-4 border-t border-purple-200">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-medium">
                  Create one here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl text-center text-purple-800 mb-8">
          What You'll Get Access To
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <LogIn className="w-6 h-6" />
                Exclusive Content
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Access to member-only games, comics, and behind-the-scenes content from our development team.
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <LogIn className="w-6 h-6" />
                Community Features
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Participate in discussions, share fan art, and connect with fellow Simeck Entertainment fans            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50">
          <img
            src={FatButters}
            alt="Fat Butters"
            className="w-20 h-auto animate-bounce shadow-2xl rounded-lg transform rotate-12"
            style={{
              animationDelay: "0.5s",
              filter: "drop-shadow(0 10px rgba(0, 0, 0, 0, 4))"
            }}
          />
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <LogIn className="w-6 h-6" />
                Early Access
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Be the first to try new games, read new comic chapters, and get exclusive updates.
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <LogIn className="w-6 h-6" />
                Personalized Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Get personalized recommendations and updates based on your favorite characters and games.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
