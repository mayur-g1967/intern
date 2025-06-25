'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Bot, 
  Calendar, 
  MessageSquare, 
  Map, 
  Settings, 
  Zap,
  LogOut,
  User
} from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Dashboard' },
    { href: '/ai-leads', icon: Bot, label: 'AI Leads' },
    { href: '/scheduler', icon: Calendar, label: 'Scheduler' },
    { href: '/communication', icon: MessageSquare, label: 'Communication' },
    { href: '/geo-map', icon: Map, label: 'Geo Map' },
    { href: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SkyCRM
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "flex items-center space-x-2",
                      isActive 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                        : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden mt-4">
        <div className="grid grid-cols-3 gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "w-full flex flex-col items-center space-y-1 h-auto py-2",
                    isActive 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}