"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Briefcase, UserCheck, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl w-full z-10">
        <header className="flex justify-between items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold font-outfit tracking-tight">Neiche<span className="text-primary">Board</span></span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
          </motion.div>
        </header>

        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-outfit mb-6 tracking-tight"
          >
            Trust-First Hiring for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Creators & Agencies</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            The premium niche marketplace where AI validates job quality and 
            verified trust scores ensure you find the perfect match.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="h-full border-primary/20 hover:border-primary/40">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="text-primary" size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">For Employers</h2>
              <p className="text-slate-400 mb-8">
                Build your trust score, create AI-validated job listings, and manage 
                your hiring pipeline with a premium Kanban dashboard.
              </p>
              <Link href="/auth/register?role=employer">
                <Button className="w-full" size="lg">Build Your Team</Button>
              </Link>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="h-full border-accent/20 hover:border-accent/40">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <UserCheck className="text-accent" size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">For Candidates</h2>
              <p className="text-slate-400 mb-8">
                Discover verified niche jobs, view employer trust analytics, 
                and apply with 1-click using AI-enhanced profile matching.
              </p>
              <Link href="/auth/register?role=candidate">
                <Button variant="secondary" className="w-full" size="lg">Explore Jobs</Button>
              </Link>
            </GlassCard>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: ShieldCheck, label: "AI Validated", color: "text-primary" },
            { icon: Zap, label: "1-Click Apply", color: "text-accent" },
            { icon: Briefcase, label: "Verified Niche", color: "text-blue-400" },
            { icon: UserCheck, label: "Trust Scoring", color: "text-purple-400" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <item.icon className={item.color} size={24} />
              <span className="text-sm font-medium text-slate-400">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
