"use client";

import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  User, 
  Star,
  Zap,
  MessageCircle,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Mock data for candidates
const initialColumns = {
  applicants: {
    id: 'applicants',
    title: 'Applicants',
    candidates: [
      { id: '1', name: 'Sarah Chen', role: 'Product Designer', score: 88, avatar: 'SC' },
      { id: '2', name: 'Mike Ross', role: 'Motion Specialist', score: 76, avatar: 'MR' },
    ]
  },
  interview: {
    id: 'interview',
    title: 'Interview',
    candidates: [
      { id: '3', name: 'Alex Rivera', role: 'Full Stack Engineer', score: 94, avatar: 'AR' },
    ]
  },
  offer: {
    id: 'offer',
    title: 'Offer',
    candidates: [
      { id: '4', name: 'Jessica Lee', role: 'Technical Writer', score: 92, avatar: 'JL' },
    ]
  },
  hired: {
    id: 'hired',
    title: 'Hired',
    candidates: []
  }
};

export default function KanbanBoardPage() {
  const [columns, setColumns] = useState(initialColumns);

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-bold font-outfit">Hiring Board: Senior Creative Dev</h2>
          <p className="text-slate-500 text-sm">Manage your candidate pipeline for this role.</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              className="glass bg-white/5 border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:border-primary/50" 
              placeholder="Search candidates..."
            />
          </div>
          <Button variant="glass" size="sm" className="gap-2">
            <Filter size={16} /> Filter
          </Button>
          <Button size="sm" className="gap-2">
            <Zap size={16} /> AI Rank
          </Button>
        </div>
      </header>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
        {Object.values(columns).map((column) => (
          <div key={column.id} className="flex-shrink-0 w-80 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4 px-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-300 uppercase tracking-widest text-xs">{column.title}</span>
                <span className="bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {column.candidates.length}
                </span>
              </div>
              <button className="text-slate-500 hover:text-white">
                <MoreVertical size={16} />
              </button>
            </div>

            <div className="flex-1 glass bg-white/[0.02] border-white/5 rounded-2xl p-4 space-y-4 overflow-y-auto">
              {column.candidates.map((candidate, idx) => (
                <motion.div
                  key={candidate.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GlassCard className="p-4 cursor-grab active:cursor-grabbing border-white/5 hover:border-primary/30">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                          {candidate.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{candidate.name}</p>
                          <p className="text-[10px] text-slate-500">{candidate.role}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1 text-accent">
                          <Zap size={12} fill="currentColor" />
                          <span className="text-xs font-bold">{candidate.score}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2].map((i) => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-background bg-slate-800 flex items-center justify-center">
                            <User size={10} className="text-slate-400" />
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 transition-all">
                          <MessageCircle size={14} />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 transition-all">
                          <FileText size={14} />
                        </button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
              <button className="w-full py-3 rounded-xl border-2 border-dashed border-white/5 text-slate-500 text-xs font-medium hover:bg-white/5 hover:border-white/10 transition-all">
                + Add Candidate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
