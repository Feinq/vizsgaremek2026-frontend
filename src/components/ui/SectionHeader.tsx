import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
	badge?: string;
	title: ReactNode;
	description?: string;
	align?: 'left' | 'center';
	dark?: boolean;
}

export function SectionHeader({
	badge,
	title,
	description,
	align = 'center',
	dark = false,
}: SectionHeaderProps) {
	return (
		<div className={cn('mb-20', align === 'center' && 'text-center')}>
			{badge && (
				<span
					className={cn(
						'font-bold text-sm uppercase tracking-widest px-3 py-1 rounded-full',
						dark
							? 'text-cyan-400'
							: 'text-blue-600 bg-blue-50',
					)}
				>
					{badge}
				</span>
			)}
			<h2
				className={cn(
					'text-4xl sm:text-5xl font-bold mt-6 mb-6 tracking-tight',
					dark ? 'text-white' : 'text-slate-900',
				)}
			>
				{title}
			</h2>
			{description && (
				<p
					className={cn(
						'text-lg max-w-2xl leading-relaxed',
						dark ? 'text-slate-300/80' : 'text-slate-600',
						align === 'center' && 'mx-auto',
					)}
				>
					{description}
				</p>
			)}
		</div>
	);
}
