"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Mail, Lock, User, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams } from 'next/navigation';

const registerSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.enum(['employer', 'candidate']),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const initialRole = (searchParams.get('role') as 'employer' | 'candidate') || 'candidate';
  
  const [selectedRole, setSelectedRole] = useState<'employer' | 'candidate'>(initialRole);

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: initialRole,
    }
  });

  const onSubmit = async (data: RegisterFormValues) => {
    console.log(data);
    // Add logic later
  };

  const handleRoleSelect = (role: 'employer' | 'candidate') => {
    setSelectedRole(role);
    setValue('role', role);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-premium">
      <div className="max-w-xl w-full">
        <header className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold font-outfit tracking-tight">Neiche<span className="text-primary">Board</span></span>
          </Link>
          <h1 className="text-3xl font-bold font-outfit">Create Your Account</h1>
          <p className="text-slate-400 mt-2">Join the trust-first hiring revolution</p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GlassCard className="border-white/5">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Role Selection */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => handleRoleSelect('candidate')}
                  className={`p-4 rounded-xl border-2 transition-all text-left relative overflow-hidden ${
                    selectedRole === 'candidate' 
                    ? 'border-accent bg-accent/5 ring-4 ring-accent/10' 
                    : 'border-white/10 bg-white/5 grayscale hover:grayscale-0'
                  }`}
                >
                  <User className={selectedRole === 'candidate' ? 'text-accent' : 'text-slate-400'} size={24} />
                  <p className="font-bold mt-2">Candidate</p>
                  <p className="text-xs text-slate-400">Find niche jobs</p>
                  {selectedRole === 'candidate' && (
                    <div className="absolute top-2 right-2 text-accent">
                      <CheckCircle2 size={16} />
                    </div>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleRoleSelect('employer')}
                  className={`p-4 rounded-xl border-2 transition-all text-left relative overflow-hidden ${
                    selectedRole === 'employer' 
                    ? 'border-primary bg-primary/5 ring-4 ring-primary/10' 
                    : 'border-white/10 bg-white/5 grayscale hover:grayscale-0'
                  }`}
                >
                  <Briefcase className={selectedRole === 'employer' ? 'text-primary' : 'text-slate-400'} size={24} />
                  <p className="font-bold mt-2">Employer</p>
                  <p className="text-xs text-slate-400">Hire niche talent</p>
                  {selectedRole === 'employer' && (
                    <div className="absolute top-2 right-2 text-primary">
                      <CheckCircle2 size={16} />
                    </div>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="text-slate-500" size={18} />
                    </div>
                    <input
                      {...register('fullName')}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="text-slate-500" size={18} />
                    </div>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="text-slate-500" size={18} />
                  </div>
                  <input
                    {...register('password')}
                    type="password"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
              </div>

              <Button 
                type="submit" 
                className={`w-full py-4 text-lg ${selectedRole === 'candidate' ? 'bg-accent text-background shadow-accent/20' : ''}`}
                isLoading={isSubmitting}
              >
                Create Account <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </GlassCard>
        </motion.div>

        <p className="text-center text-slate-500 mt-6">
          Already have an account? <Link href="/auth/login" className="text-primary hover:underline font-medium">Sign in</Link>
        </p>
      </div>
    </main>
  );
}
