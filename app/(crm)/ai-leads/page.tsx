'use client';

import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { 
  Bot, 
  TrendingUp, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  DollarSign,
  Target,
  Zap,
  Activity
} from 'lucide-react';

export default function AILeadsPage() {
  const skyElectroLeads = [
    {
      id: 1,
      name: "TechMart Electronics",
      contact: "Michael Chen",
      email: "michael@techmart.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      score: 92,
      value: "$45,000",
      stage: "Hot",
      lastContact: "2 hours ago",
      aiInsights: "High budget, ready to purchase, prefers bulk orders"
    },
    {
      id: 2,
      name: "Digital Solutions Co",
      contact: "Sarah Wilson",
      email: "sarah@digitalsol.com",
      phone: "+1 (555) 234-5678",
      location: "Los Angeles, CA",
      score: 87,
      value: "$32,000",
      stage: "Warm",
      lastContact: "1 day ago",
      aiInsights: "Price-sensitive, needs technical specifications"
    },
    {
      id: 3,
      name: "Future Electronics",
      contact: "David Rodriguez",
      email: "david@futureelec.com",
      phone: "+1 (555) 345-6789",
      location: "San Diego, CA",
      score: 78,
      value: "$28,500",
      stage: "Warm",
      lastContact: "3 days ago",
      aiInsights: "Established relationship, seasonal buyer"
    },
    {
      id: 4,
      name: "NextGen Tech",
      contact: "Emma Thompson",
      email: "emma@nextgentech.com",
      phone: "+1 (555) 456-7890",
      location: "Oakland, CA",
      score: 65,
      value: "$18,000",
      stage: "Cold",
      lastContact: "1 week ago",
      aiInsights: "New business, requires relationship building"
    }
  ];

  const healthPlusLeads = [
    {
      id: 1,
      name: "Metro General Hospital",
      contact: "Dr. Lisa Martinez",
      email: "l.martinez@metrogeneral.com",
      phone: "+1 (555) 987-6543",
      location: "Downtown Medical District",
      score: 94,
      value: "$67,000",
      stage: "Hot",
      lastContact: "1 hour ago",
      aiInsights: "High prescription volume, excellent relationship"
    },
    {
      id: 2,
      name: "Community Health Center",
      contact: "Dr. James Park",
      email: "j.park@commhealth.org",
      phone: "+1 (555) 876-5432",
      location: "North District",
      score: 89,
      value: "$42,000",
      stage: "Hot",
      lastContact: "4 hours ago",
      aiInsights: "Frequent prescriber, values clinical data"
    },
    {
      id: 3,
      name: "Family Medicine Group",
      contact: "Dr. Rebecca Kumar",
      email: "r.kumar@familymed.com",
      phone: "+1 (555) 765-4321",
      location: "Suburban Area",
      score: 76,
      value: "$31,000",
      stage: "Warm",
      lastContact: "2 days ago",
      aiInsights: "Conservative prescriber, needs evidence-based approach"
    },
    {
      id: 4,
      name: "Pediatric Specialists",
      contact: "Dr. Andrew Lee",
      email: "a.lee@pedspec.com",
      phone: "+1 (555) 654-3210",
      location: "Medical Plaza",
      score: 68,
      value: "$24,500",
      stage: "Warm",
      lastContact: "5 days ago",
      aiInsights: "Specialized practice, requires targeted approach"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-100";
    if (score >= 80) return "text-blue-600 bg-blue-100";
    if (score >= 70) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Hot": return "bg-red-500";
      case "Warm": return "bg-yellow-500";
      case "Cold": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const LeadCard = ({ lead, businessType }: { lead: any, businessType: 'skyelectro' | 'healthplus' }) => {
    return (
      <Card className="bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{lead.name}</h3>
                <Badge className={getStageColor(lead.stage) + " text-white"}>
                  {lead.stage}
                </Badge>
              </div>
              <p className="text-gray-600 mb-1">{lead.contact}</p>
              <p className="text-sm text-gray-500">{lead.location}</p>
            </div>
            <div className="text-right">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getScoreColor(lead.score)}`}>
                <Bot className="h-4 w-4 mr-1" />
                {lead.score}
              </div>
              <p className="text-lg font-bold text-gray-900 mt-1">{lead.value}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">AI Confidence Score</span>
              <span className="text-sm text-gray-600">{lead.score}%</span>
            </div>
            <Progress value={lead.score} className="h-2" />
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg mb-4">
            <div className="flex items-start space-x-2">
              <Bot className="h-4 w-4 text-blue-600 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-gray-700 mb-1">AI Insights</p>
                <p className="text-sm text-gray-600">{lead.aiInsights}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">{lead.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">{lead.phone}</span>
              </div>
            </div>
            <span className="text-xs text-gray-500">Last contact: {lead.lastContact}</span>
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
              <Phone className="h-4 w-4 mr-1" />
              Call
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              <Mail className="h-4 w-4 mr-1" />
              Email
            </Button>
            <Button size="sm" variant="outline">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">AI Lead Scoring</h1>
                <p className="text-gray-600">
                  Intelligent lead prioritization powered by machine learning
                </p>
              </div>
            </div>
            
            {/* AI Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-4 text-center">
                  <Bot className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-900">94%</p>
                  <p className="text-sm text-purple-700">Accuracy Rate</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-900">+42%</p>
                  <p className="text-sm text-green-700">Conversion Rate</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-4 text-center">
                  <Target className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-900">156</p>
                  <p className="text-sm text-blue-700">Active Leads</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
                <CardContent className="p-4 text-center">
                  <DollarSign className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-yellow-900">$2.4M</p>
                  <p className="text-sm text-yellow-700">Pipeline Value</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Business Tabs */}
          <Tabs defaultValue="skyelectro" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="skyelectro" className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>SkyElectro</span>
              </TabsTrigger>
              <TabsTrigger value="healthplus" className="flex items-center space-x-2">
                <Activity className="h-4 w-4" />
                <span>HealthPlus</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="skyelectro" className="space-y-6">
              <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-blue-600" />
                    SkyElectro - Electronics Distribution
                  </CardTitle>
                  <CardDescription className="text-blue-700">
                    AI-ranked leads based on purchase history, budget, and engagement patterns
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <div className="grid gap-6">
                {skyElectroLeads.map((lead) => (
                  <LeadCard key={lead.id} lead={lead} businessType="skyelectro" />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="healthplus" className="space-y-6">
              <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-900 flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-green-600" />
                    HealthPlus - Healthcare Field Sales
                  </CardTitle>
                  <CardDescription className="text-green-700">
                    AI-ranked prospects based on prescription patterns, patient volume, and specialty focus
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <div className="grid gap-6">
                {healthPlusLeads.map((lead) => (
                  <LeadCard key={lead.id} lead={lead} businessType="healthplus" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}