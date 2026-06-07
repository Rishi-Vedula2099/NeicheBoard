import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  disabled,
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20",
    secondary: "bg-accent text-background hover:opacity-90 shadow-lg shadow-accent/20",
    glass: "glass hover:bg-white/10 text-white",
    ghost: "hover:bg-white/5 text-slate-300"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5",
    lg: "px-8 py-3.5 text-lg"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
      ) : null}
      {children}
    </button>
  );
};
