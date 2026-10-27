import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/Textarea";
import { UserPlus, ArrowLeft, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import FatButters from "../assets/FatButter.png";

interface SignupFormData {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  bio: string;
}

interface ValidationError {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  errors?: ValidationError[];
  data?: any;
}

export function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupFormData>({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    bio: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setMessage('');

    try {
      const response = await fetch('https://simeck-website-backen.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*'
        },
        body: JSON.stringify(formData)
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setSuccess(true);
        setMessage(data.message || 'Account created successfully!');
        // Redirect to login page after successful signup
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setErrors(data.errors || []);
        setMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getFieldError = (fieldName: string) => {
    return errors.find(error => error.path === fieldName);
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
          Join Our Community
        </Badge>
        
        <h1 className="text-5xl md:text-6xl transform hover:scale-105 transition-transform duration-300">
          Create Account
        </h1>
        
        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          Join the Simeck Entertainment family! Get access to exclusive content, 
          community features, and be the first to know about our latest adventures.
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

      {/* Signup Form */}
      <div className="max-w-2xl mx-auto">
        <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-purple-800 flex items-center justify-center gap-2">
              <UserPlus className="w-8 h-8" />
              Sign Up
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
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                    className={`border-2 focus:border-purple-400 outline-none ${
                      getFieldError('firstName') ? 'border-red-400' : 'border-purple-200'
                    }`}
                  />
                  {getFieldError('firstName') && (
                    <p className="text-red-500 text-sm">{getFieldError('firstName')?.msg}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                    className={`border-2 focus:border-purple-400 outline-none ${
                      getFieldError('lastName') ? 'border-red-400' : 'border-purple-200'
                    }`}
                  />
                  {getFieldError('lastName') && (
                    <p className="text-red-500 text-sm">{getFieldError('lastName')?.msg}</p>
                  )}
                </div>
              </div>

              {/* Username and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input 
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Choose a username"
                    required
                    className={`border-2 focus:border-purple-400 outline-none ${
                      getFieldError('username') ? 'border-red-400' : 'border-purple-200'
                    }`}
                  />
                  {getFieldError('username') && (
                    <p className="text-red-500 text-sm">{getFieldError('username')?.msg}</p>
                  )}
                </div>
                
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
                    className={`border-2 focus:border-purple-400 outline-none ${
                      getFieldError('email') ? 'border-red-400' : 'border-purple-200'
                    }`}
                  />
                  {getFieldError('email') && (
                    <p className="text-red-500 text-sm">{getFieldError('email')?.msg}</p>
                  )}
                </div>
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
                    placeholder="Create a strong password"
                    required
                    className={`border-2 focus:border-purple-400 outline-none pr-10 ${
                      getFieldError('password') ? 'border-red-400' : 'border-purple-200'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {getFieldError('password') && (
                  <p className="text-red-500 text-sm">{getFieldError('password')?.msg}</p>
                )}
                <p className="text-sm text-gray-600">
                  Password must be at least 6 characters with uppercase, lowercase, and number.
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label htmlFor="bio">Bio (Optional)</Label>
                <Textarea 
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                  rows={3}
                  className={`border-2 focus:border-purple-400 outline-none resize-none ${
                    getFieldError('bio') ? 'border-red-400' : 'border-purple-200'
                  }`}
                />
                {getFieldError('bio') && (
                  <p className="text-red-500 text-sm">{getFieldError('bio')?.msg}</p>
                )}
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
                    Creating Account...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4 mr-2" />
                    Create Account
                  </>
                )}
              </Button>
            </form>

            {/* Login Link */}
            <div className="text-center pt-4 border-t border-purple-200">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-purple-600 hover:text-purple-700 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl text-center text-purple-800 mb-8">
          Why Join Our Community?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8" />
              </div>
              <CardTitle className="text-purple-800">Exclusive Content</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-700">
              Get early access to new games, comics, and behind-the-scenes content from our development team.
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8" />
              </div>
              <CardTitle className="text-purple-800">Community Features</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-700">
              Connect with fellow fans, share fan art, and participate in community discussions and events.
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8" />
              </div>
              <CardTitle className="text-purple-800">Special Updates</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-700">
              Receive personalized updates about your favorite characters and be the first to know about new releases.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
