'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Send, 
  User, 
  Clock,
  CheckCircle,
  Circle,
  Zap,
  Activity,
  Search,
  Filter,
  MoreVertical
} from 'lucide-react';

export default function CommunicationPage() {
  const [activeTab, setActiveTab] = useState('skyelectro');
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [messageInput, setMessageInput] = useState('');

  const skyElectroChats = [
    {
      id: 1,
      name: "Michael Chen",
      company: "TechMart Electronics",
      avatar: "MC",
      lastMessage: "Thanks for the product demo! When can we discuss pricing?",
      time: "2 min ago",
      unread: 2,
      status: "online",
      type: "whatsapp"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      company: "Digital Solutions Co",
      avatar: "SW",
      lastMessage: "I need the technical specifications for the new processors",
      time: "1 hour ago",
      unread: 0,
      status: "offline",
      type: "email"
    },
    {
      id: 3,
      name: "David Rodriguez",
      company: "Future Electronics",
      avatar: "DR",
      lastMessage: "Can we schedule a call for next week?",
      time: "3 hours ago",
      unread: 1,
      status: "online",
      type: "linkedin"
    }
  ];

  const healthPlusChats = [
    {
      id: 1,
      name: "Dr. Lisa Martinez",
      company: "Metro General Hospital",
      avatar: "LM",
      lastMessage: "The clinical trial results look promising. Let's discuss implementation.",
      time: "15 min ago",
      unread: 1,
      status: "online",
      type: "whatsapp"
    },
    {
      id: 2,
      name: "Dr. James Park",
      company: "Community Health Center",
      avatar: "JP",
      lastMessage: "I'll review the patient data and get back to you tomorrow",
      time: "2 hours ago",
      unread: 0,
      status: "offline",
      type: "email"
    },
    {
      id: 3,
      name: "Dr. Rebecca Kumar",
      company: "Family Medicine Group",
      avatar: "RK",
      lastMessage: "Thanks for the educational materials. Very helpful!",
      time: "1 day ago",
      unread: 0,
      status: "online",
      type: "phone"
    }
  ];

  const messages = selectedContact ? [
    {
      id: 1,
      sender: "other",
      content: selectedContact.lastMessage,
      time: selectedContact.time,
      type: "text"
    },
    {
      id: 2,
      sender: "me",
      content: "I'd be happy to help with that. Let me send you the details.",
      time: "1 min ago",
      type: "text"
    }
  ] : [];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'whatsapp': return <MessageSquare className="h-4 w-4 text-green-600" />;
      case 'email': return <Mail className="h-4 w-4 text-blue-600" />;
      case 'linkedin': return <User className="h-4 w-4 text-blue-700" />;
      case 'phone': return <Phone className="h-4 w-4 text-orange-600" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Simulate sending message
      setMessageInput('');
    }
  };

  const ContactList = ({ contacts, businessType }: { contacts: any[], businessType: string }) => (
    <div className="space-y-2">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          onClick={() => setSelectedContact(contact)}
          className={`p-4 rounded-lg cursor-pointer transition-colors ${
            selectedContact?.id === contact.id 
              ? 'bg-blue-50 border-2 border-blue-200' 
              : 'bg-white hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white ${
                businessType === 'skyelectro' ? 'bg-blue-500' : 'bg-green-500'
              }`}>
                {contact.avatar}
              </div>
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                contact.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
              }`}></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-gray-900 truncate">{contact.name}</h4>
                <div className="flex items-center space-x-2">
                  {getTypeIcon(contact.type)}
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-1">{contact.company}</p>
              <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
            </div>
            
            {contact.unread > 0 && (
              <Badge className="bg-red-500 text-white">
                {contact.unread}
              </Badge>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Unified Communication Hub</h1>
                <p className="text-gray-600">
                  All your conversations in one place - WhatsApp, Email, LinkedIn, Phone
                </p>
              </div>
            </div>
            
            {/* Communication Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 text-center">
                  <MessageSquare className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-900">24</p>
                  <p className="text-sm text-green-700">Active Chats</p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 text-center">
                  <Mail className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-900">18</p>
                  <p className="text-sm text-blue-700">Emails Today</p>
                </CardContent>
              </Card>
              
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-4 text-center">
                  <Phone className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-orange-900">7</p>
                  <p className="text-sm text-orange-700">Calls Scheduled</p>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-900">2.1h</p>
                  <p className="text-sm text-purple-700">Avg Response</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-250px)]">
            {/* Contact List */}
            <div className="lg:col-span-1">
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Contacts</CardTitle>
                    <Button size="sm" variant="outline">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search contacts..." className="pl-10" />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="skyelectro" className="flex items-center space-x-1">
                        <Zap className="h-4 w-4" />
                        <span>SkyElectro</span>
                      </TabsTrigger>
                      <TabsTrigger value="healthplus" className="flex items-center space-x-1">
                        <Activity className="h-4 w-4" />
                        <span>HealthPlus</span>
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="skyelectro">
                      <ContactList contacts={skyElectroChats} businessType="skyelectro" />
                    </TabsContent>
                    
                    <TabsContent value="healthplus">
                      <ContactList contacts={healthPlusChats} businessType="healthplus" />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-3">
              <Card className="h-full flex flex-col">
                {selectedContact ? (
                  <>
                    {/* Chat Header */}
                    <CardHeader className="border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white ${
                              activeTab === 'skyelectro' ? 'bg-blue-500' : 'bg-green-500'
                            }`}>
                              {selectedContact.avatar}
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                              selectedContact.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
                            }`}></div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{selectedContact.name}</h3>
                            <p className="text-sm text-gray-600">{selectedContact.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getTypeIcon(selectedContact.type)}
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-1" />
                            Call
                          </Button>
                          <Button size="sm" variant="outline">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>

                    {/* Messages */}
                    <CardContent className="flex-1 overflow-y-auto p-4">
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                message.sender === 'me'
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-100 text-gray-900'
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                              <p className={`text-xs mt-1 ${
                                message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                              }`}>
                                {message.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Message Input */}
                    <div className="border-t p-4">
                      <div className="flex items-center space-x-2">
                        <Input
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          placeholder="Type your message..."
                          className="flex-1"
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <Button 
                          onClick={handleSendMessage}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                      <p className="text-gray-600">Choose a contact to start messaging</p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}