'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Bot, Calendar, Map, MessageSquare, Zap, Shield, Sparkles, Star, Mail, Phone, MapPin } from 'lucide-react';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your interest! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SkyCRM
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">AI-Powered CRM Revolution</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Smart CRM for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Field Sales
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your field sales with AI-powered lead scoring, geo-priority mapping, and unified communication. 
              Built for modern businesses like electronics distribution and healthcare teams.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/login">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg px-8 py-6 text-lg">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-blue-200 hover:border-blue-400 px-8 py-6 text-lg">
              Watch Demo
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full w-fit mx-auto mb-4">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Lead Scoring</h3>
                <p className="text-sm text-gray-600">Smart algorithms rank your leads by conversion probability</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full w-fit mx-auto mb-4">
                  <Map className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Geo-Priority Map</h3>
                <p className="text-sm text-gray-600">Optimize field visits with intelligent route planning</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full w-fit mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Unified Communication</h3>
                <p className="text-sm text-gray-600">WhatsApp, Email, LinkedIn all in one place</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full w-fit mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Smart Scheduler</h3>
                <p className="text-sm text-gray-600">AI-powered meeting scheduling with timezone optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built for Modern 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Field Sales</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                SkyCRM is designed specifically for businesses that rely on field sales teams. Whether you're distributing electronics 
                like SkyElectro or running healthcare field operations like HealthPlus Pharma, our platform adapts to your unique needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Enterprise Security</h4>
                    <p className="text-gray-600">Bank-level encryption and compliance standards</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Sparkles className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-First Approach</h4>
                    <p className="text-gray-600">Machine learning that gets smarter with every interaction</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Star className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Results</h4>
                    <p className="text-gray-600">40% increase in field sales productivity on average</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">150+</div>
                    <div className="text-blue-100">Active Businesses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">40%</div>
                    <div className="text-blue-100">Productivity Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">AI Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-blue-100">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Ready to transform your field sales? Let's talk.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12 border-gray-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12 border-gray-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-[120px] border-gray-200 focus:border-blue-500 resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">hello@skycrm.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Address</div>
                      <div className="text-gray-600">123 Innovation Drive, Tech City, TC 12345</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                <h4 className="font-semibold text-lg mb-2">Ready to get started?</h4>
                <p className="text-blue-100 mb-4">Join 150+ businesses already using SkyCRM</p>
                <Link href="/signup">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">SkyCRM</span>
              </div>
              <p className="text-gray-400 mb-4">
                The future of field sales management, powered by AI and designed for success.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <div className="space-y-2 text-gray-400">
                <div>AI Lead Scoring</div>
                <div>Geo-Priority Map</div>
                <div>Communication Hub</div>
                <div>Smart Scheduler</div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>Contact</div>
                <div>Privacy Policy</div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <div className="space-y-2 text-gray-400">
                <div>Documentation</div>
                <div>API Reference</div>
                <div>Support</div>
                <div>System Status</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkyCRM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}