"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log(data);
    // Add logic later
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-premium">
      <div className="max-w-md w-full">
        <header className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold font-outfit tracking-tight">Neiche<span className="text-primary">Board</span></span>
          </Link>
          <h1 className="text-3xl font-bold font-outfit">Welcome Back</h1>
          <p className="text-slate-400 mt-2">Enter your credentials to access your dashboard</p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GlassCard className="border-white/5">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                    placeholder="name@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
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

              <div className="text-right">
                <Link href="#" className="text-sm text-primary hover:text-primary/80">Forgot password?</Link>
              </div>

              <Button 
                type="submit" 
                className="w-full py-4 text-lg" 
                isLoading={isSubmitting}
              >
                Sign In <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </GlassCard>
        </motion.div>

        <p className="text-center text-slate-500 mt-8">
          Don't have an account? <Link href="/auth/register" className="text-primary hover:underline font-medium">Create one</Link>
        </p>
      </div>
    </main>
  );
}
