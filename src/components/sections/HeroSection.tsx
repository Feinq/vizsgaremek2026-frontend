import { ChevronDown, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { STATS, COMPANY_INFO } from '@/constants';
import { useScrollToSection } from '@/hooks';

export function HeroSection() {
	const scrollToSection = useScrollToSection();

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
			aria-labelledby="hero-heading"
		>
			{/* Background */}
			<div className="absolute inset-0 bg-slate-900" aria-hidden="true">
				<div className="absolute inset-0 bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 opacity-90" />

				{/* Animated Gradient Orbs */}
				<div
					className="absolute top-[-10%] left-[-10%] w-160 h-160 bg-blue-600/30 rounded-full blur-3xl animate-pulse"
					style={{ animationDuration: '4s' }}
				/>
				<div
					className="absolute bottom-[-10%] right-[-10%] w-160 h-160 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDuration: '7s', animationDelay: '1s' }}
				/>

				{/* Grid Pattern Overlay */}
				<div
					className="absolute inset-0 opacity-[0.03]"
					style={{
						backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* ISO Badge */}
				<a
					href="https://hu.wikipedia.org/wiki/ISO_27001"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full pl-2 pr-4 py-1.5 mb-8 cursor-pointer hover:bg-white/10 transition-colors"
				>
					<div className="bg-cyan-500/20 p-1 rounded-full">
						<Award className="w-3.5 h-3.5 text-cyan-300" aria-hidden="true" />
					</div>
					<span className="text-cyan-100 text-sm font-medium tracking-wide">
						ISO 27001 tanúsított
					</span>
				</a>

				{/* Main Heading */}
				<h1
					id="hero-heading"
					className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
				>
					Megbízható IT megoldások
					<span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400">
						a jövő vállalatainak
					</span>
				</h1>

				{/* Description */}
				<p className="text-lg sm:text-xl text-slate-300/90 max-w-2xl mx-auto mb-12 leading-relaxed">
					A {COMPANY_INFO.name} {COMPANY_INFO.foundedYear} óta nyújt komplex
					szoftverfejlesztési és IT-üzemeltetési szolgáltatásokat.{' '}
					<span className="text-white font-medium">Három telephelyünkkel</span>{' '}
					országszerte biztosítjuk ügyfeleink digitális sikerét.
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button
						onClick={() => scrollToSection('contact')}
						variant="primary"
						size="lg"
						className="shadow-lg shadow-blue-600/25"
					>
						Ingyenes konzultáció
					</Button>
					<Button
						onClick={() => scrollToSection('services')}
						variant="ghost"
						size="lg"
					>
						Szolgáltatásaink
					</Button>
				</div>

				{/* Stats */}
				<div
					className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 md:pt-20 border-t border-white/5"
					role="list"
					aria-label="Statisztikák"
				>
					{STATS.map((stat, index) => (
						<div key={index} className="group" role="listitem">
							<div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
								{stat.value}
							</div>
							<div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Scroll Indicator */}
			<button
				onClick={() => scrollToSection('services')}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
				aria-label="Görgessen a szolgáltatásokhoz"
			>
				<ChevronDown className="w-8 h-8 text-white" aria-hidden="true" />
			</button>
		</section>
	);
}
