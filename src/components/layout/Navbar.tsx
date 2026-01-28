import { useState } from 'react';
import { Network, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { NAV_ITEMS, COMPANY_INFO } from '@/constants';
import { useScrollPosition, useScrollToSection } from '@/hooks';

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { scrolled } = useScrollPosition(50);
	const scrollToSection = useScrollToSection();

	const handleNavClick = (id: string) => {
		scrollToSection(id);
		setIsMenuOpen(false);
	};

	return (
		<nav
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
				scrolled
					? 'bg-white/90 backdrop-blur-md border-slate-200 shadow-sm'
					: 'bg-transparent border-transparent py-2',
			)}
			role="navigation"
			aria-label="Fő navigáció"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16 sm:h-20">
					{/* Logo */}
					<button
						onClick={() => handleNavClick('hero')}
						className="flex items-center gap-3 group cursor-pointer"
						aria-label={`${COMPANY_INFO.shortName} - Vissza a főoldalra`}
					>
						<div className="w-10 h-10 bg-linear-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
							<Network className="w-6 h-6 text-white" aria-hidden="true" />
						</div>
						<span
							className={cn(
								'text-xl font-bold tracking-tight',
								scrolled ? 'text-slate-900' : 'text-white',
							)}
						>
							{COMPANY_INFO.shortName}
						</span>
					</button>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						{NAV_ITEMS.map((item) => (
							<button
								key={item.id}
								onClick={() => handleNavClick(item.id)}
								className={cn(
									'text-sm font-medium cursor-pointer transition-all hover:-translate-y-0.5',
									scrolled
										? 'text-slate-600 hover:text-blue-600'
										: 'text-white/80 hover:text-white',
								)}
							>
								{item.label}
							</button>
						))}
						<Button
							onClick={() => handleNavClick('contact')}
							variant={scrolled ? 'primary' : 'secondary'}
							size="md"
						>
							Ajánlatkérés
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-menu"
						aria-label={isMenuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
					>
						{isMenuOpen ? (
							<X
								className={cn(scrolled ? 'text-slate-800' : 'text-white')}
								aria-hidden="true"
							/>
						) : (
							<Menu
								className={cn(scrolled ? 'text-slate-800' : 'text-white')}
								aria-hidden="true"
							/>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				id="mobile-menu"
				className={cn(
					'md:hidden bg-white border-t shadow-lg transition-all duration-300',
					isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0',
				)}
				aria-hidden={!isMenuOpen}
			>
				<div className="px-4 py-4 space-y-1">
					{NAV_ITEMS.map((item) => (
						<button
							key={item.id}
							onClick={() => handleNavClick(item.id)}
							className="block w-full text-left px-4 py-3 text-slate-600 cursor-pointer hover:bg-slate-100 rounded-lg font-medium transition-colors"
							tabIndex={isMenuOpen ? 0 : -1}
						>
							{item.label}
						</button>
					))}
					<div className="pt-2">
						<Button
							onClick={() => handleNavClick('contact')}
							variant="primary"
							className="w-full"
							tabIndex={isMenuOpen ? 0 : -1}
						>
							Ajánlatkérés
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
