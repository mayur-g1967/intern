'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Bot, 
  Map,
  Save,
  Eye,
  EyeOff,
  Globe,
  Smartphone,
  Mail,
  Calendar
} from 'lucide-react';

export default function SettingsPage() {
  const [profileData, setProfileData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@skycrm.com',
    phone: '+1 (555) 123-4567',
    timezone: 'America/Los_Angeles',
    language: 'en'
  });

  const [preferences, setPreferences] = useState({
    enableGeoOptimization: true,
    showAIScores: true,
    autoScheduleSuggestions: true,
    realTimeNotifications: true,
    emailDigest: true,
    mobileAlerts: true,
    leadScoreThreshold: 80,
    routeOptimization: true,
    weatherAlerts: false,
    trafficUpdates: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveProfile = () => {
    // Simulate saving profile
    alert('Profile settings saved successfully!');
  };

  const handleSavePreferences = () => {
    // Simulate saving preferences
    alert('Preferences saved successfully!');
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    // Simulate password change
    alert('Password changed successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-3 rounded-xl">
                <SettingsIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600">
                  Manage your profile, preferences, and system settings
                </p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </TabsTrigger>
              <TabsTrigger value="preferences" className="flex items-center space-x-2">
                <Bot className="h-4 w-4" />
                <span>AI & Features</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center space-x-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Security</span>
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-blue-600" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>
                    Update your personal information and account details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="h-10"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="h-10"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="h-10"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select value={profileData.timezone} onValueChange={(value) => setProfileData({...profileData, timezone: value})}>
                        <SelectTrigger className="h-10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                          <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                          <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                          <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select value={profileData.language} onValueChange={(value) => setProfileData({...profileData, language: value})}>
                        <SelectTrigger className="h-10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-end">
                    <Button onClick={handleSaveProfile} className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Save Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* AI & Features Tab */}
            <TabsContent value="preferences">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bot className="h-5 w-5 mr-2 text-purple-600" />
                      AI Features
                    </CardTitle>
                    <CardDescription>
                      Configure AI-powered features and automation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Enable AI Lead Scoring</Label>
                        <p className="text-sm text-gray-600">Use machine learning to rank and prioritize leads</p>
                      </div>
                      <Switch
                        checked={preferences.showAIScores}
                        onCheckedChange={(checked) => setPreferences({...preferences, showAIScores: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Auto-Schedule Suggestions</Label>
                        <p className="text-sm text-gray-600">Get AI-powered meeting time recommendations</p>
                      </div>
                      <Switch
                        checked={preferences.autoScheduleSuggestions}
                        onCheckedChange={(checked) => setPreferences({...preferences, autoScheduleSuggestions: checked})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Lead Score Threshold</Label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="range"
                          min="50"
                          max="100"
                          value={preferences.leadScoreThreshold}
                          onChange={(e) => setPreferences({...preferences, leadScoreThreshold: parseInt(e.target.value)})}
                          className="flex-1"
                        />
                        <span className="font-medium w-12">{preferences.leadScoreThreshold}</span>
                      </div>
                      <p className="text-sm text-gray-600">Only show leads above this score</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Map className="h-5 w-5 mr-2 text-orange-600" />
                      Geo-Priority Features
                    </CardTitle>
                    <CardDescription>
                      Configure location-based optimization settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Enable Geo-Priority Optimization</Label>
                        <p className="text-sm text-gray-600">Optimize visit routes based on location and priority</p>
                      </div>
                      <Switch
                        checked={preferences.enableGeoOptimization}
                        onCheckedChange={(checked) => setPreferences({...preferences, enableGeoOptimization: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Route Optimization</Label>
                        <p className="text-sm text-gray-600">Automatically suggest optimal travel routes</p>
                      </div>
                      <Switch
                        checked={preferences.routeOptimization}
                        onCheckedChange={(checked) => setPreferences({...preferences, routeOptimization: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Traffic Updates</Label>
                        <p className="text-sm text-gray-600">Receive real-time traffic information</p>
                      </div>
                      <Switch
                        checked={preferences.trafficUpdates}
                        onCheckedChange={(checked) => setPreferences({...preferences, trafficUpdates: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Weather Alerts</Label>
                        <p className="text-sm text-gray-600">Get weather notifications for field visits</p>
                      </div>
                      <Switch
                        checked={preferences.weatherAlerts}
                        onCheckedChange={(checked) => setPreferences({...preferences, weatherAlerts: checked})}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex justify-end">
                  <Button onClick={handleSavePreferences} className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-green-600" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>
                    Choose how and when you want to receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Bell className="h-5 w-5 text-blue-600" />
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Real-time Notifications</Label>
                        <p className="text-sm text-gray-600">Instant alerts for important updates</p>
                      </div>
                    </div>
                    <Switch
                      checked={preferences.realTimeNotifications}
                      onCheckedChange={(checked) => setPreferences({...preferences, realTimeNotifications: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-green-600" />
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Email Digest</Label>
                        <p className="text-sm text-gray-600">Daily summary of activities and leads</p>
                      </div>
                    </div>
                    <Switch
                      checked={preferences.emailDigest}
                      onCheckedChange={(checked) => setPreferences({...preferences, emailDigest: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-5 w-5 text-purple-600" />
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Mobile Push Alerts</Label>
                        <p className="text-sm text-gray-600">Push notifications on your mobile device</p>
                      </div>
                    </div>
                    <Switch
                      checked={preferences.mobileAlerts}
                      onCheckedChange={(checked) => setPreferences({...preferences, mobileAlerts: checked})}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Notification Types</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <label className="text-sm">New leads assigned</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <label className="text-sm">Meeting reminders</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <label className="text-sm">Route optimizations</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <label className="text-sm">System maintenance</label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-red-600" />
                      Password & Security
                    </CardTitle>
                    <CardDescription>
                      Manage your password and security settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                          <Input
                            id="currentPassword"
                            type={showPassword ? "text" : "password"}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="h-10 pr-10"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="h-10"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="h-10"
                        />
                      </div>
                    </div>
                    
                    <Button onClick={handleChangePassword} className="bg-red-600 hover:bg-red-700 text-white">
                      Change Password
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>
                      Add an extra layer of security to your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Enable 2FA</Label>
                        <p className="text-sm text-gray-600">Use your phone to verify login attempts</p>
                      </div>
                      <Button variant="outline">
                        Setup 2FA
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Sessions</CardTitle>
                    <CardDescription>
                      Manage your active login sessions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Globe className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">Current Session</p>
                            <p className="text-sm text-gray-600">Chrome on macOS • San Francisco, CA</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Smartphone className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">Mobile App</p>
                            <p className="text-sm text-gray-600">iPhone • 2 hours ago</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Revoke
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}