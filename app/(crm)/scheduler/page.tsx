'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, User, Bot, Plus, Video, Phone } from 'lucide-react';

export default function SchedulerPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState<'day' | 'week'>('day');

  const meetings = [
    {
      id: 1,
      title: "TechMart Electronics - Product Demo",
      client: "Michael Chen",
      business: "SkyElectro",
      time: "09:00 AM",
      duration: "1h",
      type: "video",
      location: "Zoom Meeting",
      status: "confirmed",
      aiSuggested: true
    },
    {
      id: 2,
      title: "Dr. Martinez - Quarterly Review",
      client: "Dr. Lisa Martinez",
      business: "HealthPlus",
      time: "11:30 AM",
      duration: "45m",
      type: "in-person",
      location: "Metro General Hospital",
      status: "pending",
      aiSuggested: false
    },
    {
      id: 3,
      title: "Digital Solutions - Contract Discussion",
      client: "Sarah Wilson",
      business: "SkyElectro",
      time: "02:00 PM",
      duration: "30m",
      type: "phone",
      location: "+1 (555) 234-5678",
      status: "confirmed",
      aiSuggested: true
    },
    {
      id: 4,
      title: "Community Health Center Visit",
      client: "Dr. James Park",
      business: "HealthPlus",
      time: "03:30 PM",
      duration: "1h 30m",
      type: "in-person",
      location: "Community Health Center",
      status: "confirmed",
      aiSuggested: false
    }
  ];

  const aiSuggestions = [
    {
      client: "Future Electronics",
      reason: "High lead score (78), hasn't been contacted in 3 days",
      suggestedTime: "Tomorrow 10:00 AM",
      business: "SkyElectro"
    },
    {
      client: "Dr. Rebecca Kumar",
      reason: "Prescription patterns show interest in new medications",
      suggestedTime: "Thursday 2:00 PM",
      business: "HealthPlus"
    },
    {
      client: "NextGen Tech",
      reason: "Budget cycle ending soon, follow-up needed",
      suggestedTime: "Friday 9:00 AM",
      business: "SkyElectro"
    }
  ];

  const getBusinessColor = (business: string) => {
    return business === 'SkyElectro' ? 'blue' : 'green';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getMeetingIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'phone': return <Phone className="h-4 w-4" />;
      case 'in-person': return <MapPin className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Smart Scheduler</h1>
                  <p className="text-gray-600">
                    AI-optimized meeting scheduling for both teams
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <Button
                    size="sm"
                    variant={view === 'day' ? 'default' : 'ghost'}
                    onClick={() => setView('day')}
                  >
                    Day
                  </Button>
                  <Button
                    size="sm"
                    variant={view === 'week' ? 'default' : 'ghost'}
                    onClick={() => setView('week')}
                  >
                    Week
                  </Button>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Meeting
                </Button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Calendar and Meetings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Today's Schedule */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Today's Schedule</span>
                    <Badge className="bg-blue-100 text-blue-800">
                      {meetings.length} meetings
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Wednesday, December 18, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {meetings.map((meeting) => (
                    <div key={meeting.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0">
                        <div className={`p-2 rounded-full ${meeting.business === 'SkyElectro' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                          {getMeetingIcon(meeting.type)}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900 truncate">{meeting.title}</h4>
                          {meeting.aiSuggested && (
                            <Badge className="bg-purple-100 text-purple-800 text-xs">
                              <Bot className="h-3 w-3 mr-1" />
                              AI Suggested
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{meeting.client}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {meeting.time} ({meeting.duration})
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span className="truncate">{meeting.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(meeting.status)}`}></div>
                        <Badge variant="outline" className={`text-xs ${meeting.business === 'SkyElectro' ? 'border-blue-200 text-blue-700' : 'border-green-200 text-green-700'}`}>
                          {meeting.business}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Time Slots */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Available Time Slots</CardTitle>
                  <CardDescription>Optimal meeting times based on AI analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['10:00 AM', '12:30 PM', '04:00 PM', '05:30 PM'].map((time) => (
                      <Button
                        key={time}
                        variant="outline"
                        className="h-12 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Suggestions */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-900">
                    <Bot className="h-5 w-5 mr-2 text-purple-600" />
                    AI Suggestions
                  </CardTitle>
                  <CardDescription className="text-purple-700">
                    Recommended meetings based on lead scoring and engagement
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {aiSuggestions.map((suggestion, index) => (
                    <div key={index} className="bg-white/70 p-4 rounded-lg border border-purple-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{suggestion.client}</h4>
                        <Badge variant="outline" className={`text-xs ${suggestion.business === 'SkyElectro' ? 'border-blue-200 text-blue-700' : 'border-green-200 text-green-700'}`}>
                          {suggestion.business}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{suggestion.reason}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-purple-700">{suggestion.suggestedTime}</span>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                          Schedule
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>This Week</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Meetings</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">SkyElectro</span>
                    <span className="font-semibold text-blue-600">7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">HealthPlus</span>
                    <span className="font-semibold text-green-600">5</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm font-medium text-gray-700">Success Rate</span>
                    <span className="font-bold text-green-600">94%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Bot className="h-4 w-4 mr-2" />
                    Auto-suggest optimal times
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Sync with calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Optimize for travel time
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}