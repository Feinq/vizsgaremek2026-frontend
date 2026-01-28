import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
		const baseStyles =
			'inline-flex items-center justify-center font-semibold cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed';

		const variants = {
			primary:
				'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-blue-500',
			secondary:
				'bg-white text-blue-900 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-slate-400',
			ghost:
				'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 focus-visible:ring-white/50',
			outline:
				'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 focus-visible:ring-slate-400',
		};

		const sizes = {
			sm: 'px-4 py-2 text-sm rounded-lg',
			md: 'px-5 py-2.5 text-sm rounded-lg',
			lg: 'px-8 py-4 text-lg rounded-xl',
		};

		return (
			<button
				ref={ref}
				className={cn(baseStyles, variants[variant], sizes[size], className)}
				{...props}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = 'Button';
