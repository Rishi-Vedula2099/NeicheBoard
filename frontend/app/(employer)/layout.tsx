"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Trello, 
  Users, 
  PlusSquare, 
  ShieldCheck, 
  Settings,
  LogOut,
  Bell
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
    { icon: Trello, label: 'Hiring Board', href: '/board' },
    { icon: Users, label: 'Applicants', href: '/applicants' },
    { icon: PlusSquare, label: 'Post Job', href: '/create-job' },
    { icon: ShieldCheck, label: 'Trust Score', href: '/trust' },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 glass flex flex-col p-6 fixed h-full z-50">
        <Link href="/" className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <ShieldCheck className="text-white" size={18} />
          </div>
          <span className="text-xl font-bold font-outfit tracking-tight">Neiche<span className="text-primary">Board</span></span>
        </Link>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                pathname.includes(item.href) 
                ? 'bg-primary/10 text-primary border border-primary/20' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}>
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5 space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 px-4 py-3">
            <Settings size={20} />
            <span>Settings</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 px-4 py-3 text-red-400 hover:text-red-300">
            <LogOut size={20} />
            <span>Sign Out</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 p-10 bg-gradient-premium min-h-screen">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-bold font-outfit">Employer Dashboard</h1>
            <p className="text-slate-400 text-sm">Welcome back, Rishi. Here's your hiring overview.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <Bell size={20} />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-white/5">
              <div className="text-right">
                <p className="text-sm font-bold">Rishi Vedula</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Premium Agency</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Rishi+Vedula&background=0F172A&color=7C5CFF" alt="Avatar" />
                </div>
              </div>
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
