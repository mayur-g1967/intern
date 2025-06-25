'use client';

import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { 
  Map, 
  MapPin, 
  Navigation as NavigationIcon, 
  Clock, 
  Car,
  TrendingUp,
  Route,
  Target,
  Zap,
  Activity,
  Calendar,
  Phone,
  Star
} from 'lucide-react';

export default function GeoMapPage() {
  const skyElectroLocations = [
    {
      id: 1,
      name: "TechMart Electronics",
      contact: "Michael Chen",
      address: "123 Market St, San Francisco, CA",
      priority: "high",
      distance: "2.1 km",
      estimatedTime: "15 min",
      leadScore: 92,
      lastVisit: "2 weeks ago",
      coordinates: { lat: 37.7749, lng: -122.4194 }
    },
    {
      id: 2,
      name: "Digital Solutions Co",
      contact: "Sarah Wilson",
      address: "456 Tech Blvd, Los Angeles, CA",
      priority: "medium",
      distance: "5.3 km",
      estimatedTime: "25 min",
      leadScore: 87,
      lastVisit: "1 month ago",
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    {
      id: 3,
      name: "Future Electronics",
      contact: "David Rodriguez",
      address: "789 Innovation Dr, San Diego, CA",
      priority: "medium",
      distance: "8.7 km",
      estimatedTime: "35 min",
      leadScore: 78,
      lastVisit: "3 weeks ago",
      coordinates: { lat: 32.7157, lng: -117.1611 }
    },
    {
      id: 4,
      name: "NextGen Tech",
      contact: "Emma Thompson",
      address: "321 Startup Ave, Oakland, CA",
      priority: "low",
      distance: "12.4 km",
      estimatedTime: "45 min",
      leadScore: 65,
      lastVisit: "2 months ago",
      coordinates: { lat: 37.8044, lng: -122.2711 }
    }
  ];

  const healthPlusLocations = [
    {
      id: 1,
      name: "Metro General Hospital",
      contact: "Dr. Lisa Martinez",
      address: "100 Medical Center Dr, Downtown",
      priority: "high",
      distance: "1.8 km",
      estimatedTime: "12 min",
      leadScore: 94,
      lastVisit: "1 week ago",
      coordinates: { lat: 37.7849, lng: -122.4094 }
    },
    {
      id: 2,
      name: "Community Health Center",
      contact: "Dr. James Park",
      address: "250 Health Plaza, North District",
      priority: "high",
      distance: "3.2 km",
      estimatedTime: "18 min",
      leadScore: 89,
      lastVisit: "10 days ago",
      coordinates: { lat: 37.7949, lng: -122.4294 }
    },
    {
      id: 3,
      name: "Family Medicine Group",
      contact: "Dr. Rebecca Kumar",
      address: "175 Suburban Rd, Suburban Area",
      priority: "medium",
      distance: "6.5 km",
      estimatedTime: "28 min",
      leadScore: 76,
      lastVisit: "3 weeks ago",
      coordinates: { lat: 37.7649, lng: -122.3994 }
    },
    {
      id: 4,
      name: "Pediatric Specialists",
      contact: "Dr. Andrew Lee",
      address: "88 Medical Plaza, East Side",
      priority: "medium",
      distance: "9.1 km",
      estimatedTime: "38 min",
      leadScore: 68,
      lastVisit: "1 month ago",
      coordinates: { lat: 37.7549, lng: -122.3794 }
    }
  ];

  const aiRoutes = {
    skyelectro: {
      optimized: "TechMart → Digital Solutions → Future Electronics",
      totalDistance: "16.1 km",
      totalTime: "1h 15m",
      efficiency: "+34%"
    },
    healthplus: {
      optimized: "Metro General → Community Health → Family Medicine",
      totalDistance: "11.5 km",
      totalTime: "58m",
      efficiency: "+28%"
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const LocationCard = ({ location, businessType }: { location: any, businessType: string }) => (
    <Card className="bg-white hover:shadow-lg transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-semibold text-gray-900">{location.name}</h4>
              <Badge className={getPriorityBadge(location.priority)}>
                {location.priority}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mb-1">{location.contact}</p>
            <p className="text-xs text-gray-500">{location.address}</p>
          </div>
          <div className={`w-3 h-3 rounded-full ${getPriorityColor(location.priority)}`}></div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="flex items-center space-x-2">
            <NavigationIcon className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-gray-600">{location.distance}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-600">{location.estimatedTime}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium">Score: {location.leadScore}</span>
          </div>
          <span className="text-xs text-gray-500">Last visit: {location.lastVisit}</span>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            className={cn(
              "text-white flex-1",
              businessType === 'skyelectro' 
                ? "bg-blue-600 hover:bg-blue-700" 
                : "bg-green-600 hover:bg-green-700"
            )}
          >
            <NavigationIcon className="h-4 w-4 mr-1" />
            Navigate
          </Button>
          <Button size="sm" variant="outline">
            <Phone className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline">
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl">
                <Map className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Geo-Priority Mapping</h1>
                <p className="text-gray-600">
                  AI-optimized field visit routes with intelligent priority mapping
                </p>
              </div>
            </div>
            
            {/* Map Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-orange-900">24</p>
                  <p className="text-sm text-orange-700">Active Locations</p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 text-center">
                  <Route className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-900">31%</p>
                  <p className="text-sm text-green-700">Route Efficiency</p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 text-center">
                  <Car className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-900">127</p>
                  <p className="text-sm text-blue-700">Miles Saved</p>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-900">18%</p>
                  <p className="text-sm text-purple-700">More Visits</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map Visualization */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Interactive Map</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Route className="h-4 w-4 mr-1" />
                        Optimize Route
                      </Button>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                        <NavigationIcon className="h-4 w-4 mr-1" />
                        Start Navigation
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Mock Map */}
                  <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 opacity-20"></div>
                    
                    {/* Map Legend */}
                    <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                      <h4 className="font-semibold text-sm mb-2">Priority Levels</h4>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-xs">High Priority</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-xs">Medium Priority</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-xs">Low Priority</span>
                        </div>
                      </div>
                    </div>

                    {/* Mock Map Pins */}
                    <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-lg"></div>
                    </div>
                    <div className="absolute top-3/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                    </div>

                    {/* Route Line */}
                    <svg className="absolute inset-0 w-full h-full">
                      <path
                        d="M 120 96 Q 160 120 200 150 Q 240 180 280 200"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                        fill="none"
                        className="animate-pulse"
                      />
                    </svg>

                    <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md">
                      <div className="flex items-center space-x-2">
                        <Car className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">Your Location</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Route Suggestions */}
              <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 shadow-lg mt-6">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-purple-600" />
                    AI Route Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="skyelectro" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="skyelectro">SkyElectro Route</TabsTrigger>
                      <TabsTrigger value="healthplus">HealthPlus Route</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="skyelectro" className="space-y-4">
                      <div className="bg-white/70 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Optimized Route</h4>
                        <p className="text-sm text-purple-700 mb-2">{aiRoutes.skyelectro.optimized}</p>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-lg font-bold text-purple-900">{aiRoutes.skyelectro.totalDistance}</p>
                            <p className="text-xs text-purple-600">Total Distance</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-purple-900">{aiRoutes.skyelectro.totalTime}</p>
                            <p className="text-xs text-purple-600">Total Time</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-green-600">{aiRoutes.skyelectro.efficiency}</p>
                            <p className="text-xs text-purple-600">Efficiency Gain</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="healthplus" className="space-y-4">
                      <div className="bg-white/70 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Optimized Route</h4>
                        <p className="text-sm text-purple-700 mb-2">{aiRoutes.healthplus.optimized}</p>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-lg font-bold text-purple-900">{aiRoutes.healthplus.totalDistance}</p>
                            <p className="text-xs text-purple-600">Total Distance</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-purple-900">{aiRoutes.healthplus.totalTime}</p>
                            <p className="text-xs text-purple-600">Total Time</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-green-600">{aiRoutes.healthplus.efficiency}</p>
                            <p className="text-xs text-purple-600">Efficiency Gain</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Location Lists */}
            <div className="space-y-6">
              <Tabs defaultValue="skyelectro" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="skyelectro" className="flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span>SkyElectro</span>
                  </TabsTrigger>
                  <TabsTrigger value="healthplus" className="flex items-center space-x-1">
                    <Activity className="h-4 w-4" />
                    <span>HealthPlus</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="skyelectro" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">Electronics Distribution Locations</CardTitle>
                      <CardDescription>Prioritized by AI lead scoring and proximity</CardDescription>
                    </CardHeader>
                  </Card>
                  {skyElectroLocations.map((location) => (
                    <LocationCard key={location.id} location={location} businessType="skyelectro" />
                  ))}
                </TabsContent>
                
                <TabsContent value="healthplus" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-green-900">Healthcare Locations</CardTitle>
                      <CardDescription>Optimized for medical field visits</CardDescription>
                    </CardHeader>
                  </Card>
                  {healthPlusLocations.map((location) => (
                    <LocationCard key={location.id} location={location} businessType="healthplus" />
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}