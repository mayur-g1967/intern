'use client';

import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  MapPin, 
  Zap, 
  Activity,
  Target,
  Clock,
  DollarSign,
  Phone,
  ArrowUp,
  ArrowDown,
  MessageSquare
} from 'lucide-react';

export default function DashboardPage() {
  const skyElectroData = {
    totalLeads: 142,
    hotLeads: 28,
    conversion: 18.5,
    revenue: 45200,
    meetings: 12,
    territory: "West Coast"
  };

  const healthPlusData = {
    appointments: 34,
    fieldVisits: 18,
    successRate: 76.8,
    revenue: 32800,
    prescriptions: 156,
    territory: "Metro Area"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, AIMS!
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your field sales teams today.
            </p>
          </div>

          {/* Business Overview Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* SkyElectro Panel */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-blue-900 flex items-center">
                      <Zap className="h-6 w-6 mr-2 text-blue-600" />
                      SkyElectro
                    </CardTitle>
                    <CardDescription className="text-blue-700">
                      Electronics Distribution • {skyElectroData.territory}
                    </CardDescription>
                  </div>
                  <Badge className="bg-blue-600 text-white">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/70 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-700 font-medium">Total Leads</p>
                        <p className="text-2xl font-bold text-blue-900">{skyElectroData.totalLeads}</p>
                      </div>
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="mt-2 flex items-center">
                      <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+12% this week</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/70 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-700 font-medium">Hot Leads</p>
                        <p className="text-2xl font-bold text-blue-900">{skyElectroData.hotLeads}</p>
                      </div>
                      <Target className="h-8 w-8 text-orange-500" />
                    </div>
                    <div className="mt-2 flex items-center">
                      <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+8% conversion</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/70 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-700">Sales Funnel Progress</span>
                    <span className="text-sm text-blue-600">{skyElectroData.conversion}%</span>
                  </div>
                  <Progress value={skyElectroData.conversion} className="h-2 bg-blue-200" />
                  <div className="mt-2 text-xs text-blue-600">
                    ${skyElectroData.revenue.toLocaleString()} revenue this month
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-700">{skyElectroData.meetings} meetings today</span>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* HealthPlus Panel */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-green-900 flex items-center">
                      <Activity className="h-6 w-6 mr-2 text-green-600" />
                      HealthPlus Pharma
                    </CardTitle>
                    <CardDescription className="text-green-700">
                      Healthcare Field Sales • {healthPlusData.territory}
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-600 text-white">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/70 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-700 font-medium">Appointments</p>
                        <p className="text-2xl font-bold text-green-900">{healthPlusData.appointments}</p>
                      </div>
                      <Calendar className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="mt-2 flex items-center">
                      <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+5 scheduled</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/70 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-700 font-medium">Field Visits</p>
                        <p className="text-2xl font-bold text-green-900">{healthPlusData.fieldVisits}</p>
                      </div>
                      <MapPin className="h-8 w-8 text-blue-500" />
                    </div>
                    <div className="mt-2 flex items-center">
                      <Clock className="h-4 w-4 text-orange-500 mr-1" />
                      <span className="text-sm text-orange-600">3 pending</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/70 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-700">Success Rate</span>
                    <span className="text-sm text-green-600">{healthPlusData.successRate}%</span>
                  </div>
                  <Progress value={healthPlusData.successRate} className="h-2 bg-green-200" />
                  <div className="mt-2 text-xs text-green-600">
                    {healthPlusData.prescriptions} prescriptions generated
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-700">23 calls scheduled</span>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Navigation Bar */}
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Actions</h3>
                <p className="text-sm text-gray-600">Access your most important tools</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  className="h-20 flex flex-col items-center space-y-2 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                  onClick={() => window.location.href = '/ai-leads'}
                >
                  <div className="bg-white/20 p-2 rounded-full">
                    <Target className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">AI Lead Scoring</span>
                </Button>
                
                <Button 
                  className="h-20 flex flex-col items-center space-y-2 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                  onClick={() => window.location.href = '/scheduler'}
                >
                  <div className="bg-white/20 p-2 rounded-full">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Scheduler</span>
                </Button>
                
                <Button 
                  className="h-20 flex flex-col items-center space-y-2 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                  onClick={() => window.location.href = '/communication'}
                >
                  <div className="bg-white/20 p-2 rounded-full">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Communication</span>
                </Button>
                
                <Button 
                  className="h-20 flex flex-col items-center space-y-2 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  onClick={() => window.location.href = '/geo-map'}
                >
                  <div className="bg-white/20 p-2 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Geo-Priority Map</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}