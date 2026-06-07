import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hover && "hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5",
        className
      )}
    >
      {children}
    </div>
  );
};
