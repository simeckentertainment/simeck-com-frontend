import { Gamepad2, MessageCircle, Users, Send, Mail, Heart } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/Input"
import { useState, useEffect } from "react"
import { Textarea } from "../components/ui/Textarea"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { ContactModal } from "../components/ContactModal"
import emailjs from '@emailjs/browser'

// Extend Window interface for EmailJS initialization flag
declare global {
  interface Window {
    __EMAILJS_INITIALIZED__?: boolean;
  }
}

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
  
  // Modal state for feedback
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    // Initialize EmailJS if needed, safely (must only run once)
    if (!window.__EMAILJS_INITIALIZED__) {
      emailjs.init("3mJy7MJFdag9M5Fk6");
      // @ts-ignore
      window.__EMAILJS_INITIALIZED__ = true;
    }
  }, []);
  
  const getFieldError = (fieldName: string) => {
    return fieldErrors[fieldName] || '';
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFieldErrors({});

    try {
      await emailjs.send(
        "service_uwy0ogo",
        "template_9bpd00j",
        {
          title: "Contact Form Submission",
          name: formData.name,
          user_email: formData.email,
          to_email: "winksmile114@gmail.com",
          time: new Date().toLocaleString(),
          message: `
Contact Form Submission Details:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Category: ${formData.category}
Message: ${formData.message}
          `,
          email: formData.email,
          subject: formData.subject,
          category: formData.category,
        },
        {
          publicKey: "3mJy7MJFdag9M5Fk6",
        }
      );

      setModalType("success");
      setModalMessage("Thank you for contacting us! We will get back to you as soon as possible.");
      setModalOpen(true);
      setFormData({name: '', email: '', subject: '', category: '', message: ''});
    } catch (error) {
      console.error("EmailJS error:", error);
      setModalType("error");
      setModalMessage("Failed to send message. Please try again later.");
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactReasons = [
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      name: "Product Support",
      description: "Is your corgi broken? Let us know so that we can help."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "Career opportunities",
      description: "We’ve always got an eye out for talent. Send over your portfolio and a resume."
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Business & Press",
      description: "Media inquiries, partnership opportunities, or business collaborations welcome!"
    },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 relative">
        <div className="relative inline-block">
          <h1 className="text-6xl text-purple-300 mb-4 transform hover:scale-105 transition-transform duration-300 text-shadow-lg">
            Get In Touch!
          </h1>

          {/* Fat Butters hanging off the title */}
          {/* <div className="absolute sm:right-2 md:right-18 lg:-right-12 -top-4">
            <img
              src={FatButters}
              alt="Fat Butters"
              className="w-20 h-auto animate-bounce shadow-2xl rounded-lg transform rotate-12"
              style={{
                animationDelay: "0.5s",
                filter: "drop-shadow(0 10px rgba(0, 0, 0, 0, 4))"
              }}
            />
          </div> */}
        </div>
        <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed text-shadow-sm">
          From Media inquiries to interest in careers, 
          we’re always interested in hearing from you, 
          your friends, and your friends’ friends’ friends.
        </p>
      </div>

      {/* Contact Reasons Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactReasons.map((reason, index) => (
          <Card key={index} className="overflow-hidden relative border-4 border-purple-200 hover:border-purple-400 bg-white hover:-rotate-1 hover:scale-105 transition-all duration-300 group">
            <CardHeader className="text-center space-y-4">
              <div className="items-center mx-auto w-16 h-16 bg-purple-700 text-white rounded-full justify-center flex group-hover:scale-110 transition-all duration-300">
                {reason.icon}
              </div>
              <CardTitle className="text-purple-800 text-xl">
                {reason.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-center">
              {reason.description}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="border-4 border-pink-200 bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
          <CardHeader className="relative z-10">
            <CardTitle className="text-3xl text-center text-purple-400 relative text-shadow-lg">
              Send Us Message
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`border-2 ${getFieldError('name') ? 'border-red-400 focus:border-red-500' : 'border-pink-200 focus:border-pink-400'} outline-none`}
                  />
                  {getFieldError('name') && (
                    <p className="text-red-400 text-sm">{getFieldError('name')}</p>
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
                    className={`border-2 ${getFieldError('email') ? 'border-red-400 focus:border-red-500' : 'border-pink-200 focus:border-pink-400'} outline-none`}
                  />
                  {getFieldError('email') && (
                    <p className="text-red-400 text-sm">{getFieldError('email')}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">What's this about?</Label>
                <select 
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className={`border-2 ${getFieldError('category') ? 'border-red-400 focus:border-red-500' : 'border-pink-200 focus:border-pink-400'} w-full p-2 rounded-md outline-none`}
                >
                  <option value="">Select a category *</option>
                  <option value="game-support">Game Support</option>
                  <option value="bug-report">Bug Report</option>
                  <option value="fan-art">Fan Art Submission</option>
                  <option value="business">Business Inquiry</option>
                  <option value="press">Press/Media</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
                {getFieldError('category') && (
                  <p className="text-red-400 text-sm">{getFieldError('category')}</p>
                )}
              </div>

              <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's your message about?"
                    required
                    className={`border-2 ${getFieldError('subject') ? 'border-red-400 focus:border-red-500' : 'border-pink-200 focus:border-pink-400'} outline-none`}
                  />
                  {getFieldError('subject') && (
                    <p className="text-red-400 text-sm">{getFieldError('subject')}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind. Boo Bear loves reading fan mail. Or he will, once he learns how to read."
                    rows={6}
                    required
                    className={`border-2 ${getFieldError('message') ? 'border-red-400 focus:border-red-500' : 'border-pink-200 focus:border-pink-400'} outline-none resize-none`}
                  />
                  {getFieldError('message') && (
                    <p className="text-red-400 text-sm">{getFieldError('message')}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-105 text-white transition-all duration-300 relative"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </>
                  )}
                </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border-blue-200 border-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-blue-500">
                <Mail className="text-blue-500"/>
                Email Us Directly
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                For the fastest response, please send us an email directly. 
                It’s the most reliable way to get through to us, as Nigel tends to leave slime on the snail mail.
              </p>
              <Badge className="bg-blue-500 text-white text-md">
                simeckentertainment@gmail.com
              </Badge>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-white to-green-50 border-green-200 border-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-green-500">
                <MessageCircle className="text-green-500"/>
                Response
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-700">
                  General Inquiries:
                </p>
                <Badge className="bg-green-500 text-white text-sm">
                  24~48 hours
                </Badge>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">
                  Game Support:
                </p>
                <Badge className="bg-blue-500 text-white text-sm">
                  12~24 hours
                </Badge>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">
                  Business Inquiries:
                </p>
                <Badge className="bg-purple-500 text-white text-sm">
                  24~48 hours
                </Badge>
              </div>              
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-white to-yellow-50 border-yellow-200 border-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-purple-500 justify-center">                
                Fun Fact!
                <Heart className="text-purple-500"/>
              </CardTitle>
            </CardHeader>
            <CardContent className=" text-gray-700 text-start  leading-relaxed">
                <p>Butters is a real dog. </p>
                <p>His name is Butters Scotch Simon and he wants to be everyone’s friend.</p>
                <p>Apparently Randy and Carl look more alike than Randy and his real brother.</p>
                <p>Simeck started out as an animation studio, and then we shifted into games. Nevertheless, we still retain our background as a bunch of wacky weirdos.</p>

            </CardContent>
          </Card>        
        </div>

        
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        message={modalMessage}
      />
    </div>
  )
}