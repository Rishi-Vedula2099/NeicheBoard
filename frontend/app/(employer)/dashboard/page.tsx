"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Award, 
  MessageSquare,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function EmployerDashboardPage() {
  const stats = [
    { label: 'Active Jobs', value: '12', icon: Briefcase, color: 'text-primary' },
    { label: 'Total Applicants', value: '148', icon: Users, color: 'text-accent' },
    { label: 'Trust Score', value: '98/100', icon: Award, color: 'text-emerald-400' },
    { label: 'Average Match', value: '82%', icon: TrendingUp, color: 'text-blue-400' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <GlassCard className="p-5 flex items-center gap-4 border-white/5">
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold font-outfit">{stat.value}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trust Analytics */}
        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="h-96 flex flex-col justify-between border-white/5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold font-outfit">Hiring Performance</h3>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-400 outline-none">
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
              </select>
            </div>
            {/* Placeholder for Chart */}
            <div className="flex-1 flex items-end gap-2 px-2">
              {[40, 70, 45, 90, 65, 80, 95, 60, 75, 85, 55, 98].map((val, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-lg transition-all duration-500 hover:opacity-80" 
                  style={{ height: `${val}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </GlassCard>

          {/* Recent Applications */}
          <GlassCard className="border-white/5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold font-outfit">Recent Applicants</h3>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Alex Rivera', role: 'Full Stack Engineer', score: 94, status: 'Interview' },
                { name: 'Sarah Chen', role: 'Product Designer', score: 88, status: 'Reviewing' },
                { name: 'Jordan Smith', role: 'Video Editor', score: 91, status: 'Interview' },
              ].map((app, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold">
                      {app.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{app.name}</p>
                      <p className="text-xs text-slate-500">{app.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-xs text-slate-500 mb-1">AI Match Score</p>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-accent" style={{ width: `${app.score}%` }} />
                        </div>
                        <span className="text-xs font-bold text-accent">{app.score}%</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      app.status === 'Interview' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-blue-400/10 text-blue-400'
                    }`}>
                      {app.status}
                    </span>
                    <button className="text-slate-500 group-hover:text-white transition-all">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* AI Insights Sidebar */}
        <div className="space-y-8">
          <GlassCard className="bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <Zap size={20} />
              </div>
              <h3 className="text-lg font-bold font-outfit">AI Hiring Insights</h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-slate-400 mb-2 uppercase tracking-widest font-bold">Candidate Recommendation</p>
                <p className="text-sm">Alex Rivera shows 94% compatibility with the <span className="text-primary font-bold">Full Stack</span> role based on niche expertise.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-slate-400 mb-2 uppercase tracking-widest font-bold">Trust Alert</p>
                <p className="text-sm">Your response time has improved by <span className="text-accent font-bold">12%</span>. This will boost your trust score next week.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-slate-400 mb-2 uppercase tracking-widest font-bold">Market Insight</p>
                <p className="text-sm">Average salary for <span className="text-blue-400 font-bold">Video Editors</span> in your niche has increased by $5/hr.</p>
              </div>
            </div>
            <Button variant="primary" className="w-full mt-6">Optimize Hiring</Button>
          </GlassCard>

          <GlassCard className="border-white/5">
            <h3 className="text-lg font-bold font-outfit mb-4">Verification Level</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Level 3: Pro Recruiter</span>
                <span className="text-emerald-400 font-bold">Active</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400" style={{ width: '75%' }} />
              </div>
              <p className="text-xs text-slate-500">
                Complete 2 more contracts to reach <span className="text-white font-medium">Level 4: Master Partner</span>.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
