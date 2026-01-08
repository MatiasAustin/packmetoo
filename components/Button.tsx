import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-heading font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/40 active:scale-95 border-2 border-transparent",
    secondary: "bg-brand-yellow text-brand-dark hover:bg-yellow-200 shadow-lg shadow-yellow-500/20 active:scale-95 border-2 border-transparent",
    outline: "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 bg-transparent",
    ghost: "text-brand-dark hover:text-emerald-600 hover:bg-emerald-50/50",
  };

  const sizes = {
    sm: "text-sm px-5 py-2",
    md: "text-base px-8 py-3",
    lg: "text-lg px-10 py-4",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;