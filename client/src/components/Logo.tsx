import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'default' | 'mono' | 'text-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  responsive?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-12 h-12',
};

const responsiveSizeClasses = {
  sm: 'w-5 h-5 sm:w-6 sm:h-6',
  md: 'w-6 h-6 sm:w-8 sm:h-8',
  lg: 'w-8 h-8 sm:w-10 sm:h-10',
  xl: 'w-10 h-10 sm:w-12 sm:h-12',
};

const textSizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
};

const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  size = 'md',
  showText = true,
  responsive = false,
  className,
  href = '/',
  onClick,
}) => {
  const logoSrc = variant === 'mono' ? '/logo-mono.svg' : '/logo.svg';
  
  const logoContent = (
    <div className={cn('flex items-center space-x-2', className)}>
      {variant !== 'text-only' && (
        <img
          src={logoSrc}
          alt="W3nity Logo"
          className={cn(
            responsive ? responsiveSizeClasses[size] : sizeClasses[size],
            'transition-transform duration-200 hover:scale-105'
          )}
          loading="eager"
          onError={(e) => {
            // Fallback to text-only if image fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
      )}
      {showText && (
        <span
          className={cn(
            'font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent',
            textSizeClasses[size]
          )}
        >
          W3nity
        </span>
      )}
    </div>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
        aria-label="W3nity Logo"
      >
        {logoContent}
      </button>
    );
  }

  return (
    <Link
      to={href}
      className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
      aria-label="W3nity Logo - Go to homepage"
    >
      {logoContent}
    </Link>
  );
};

export default Logo;