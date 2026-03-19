import { ChevronDown, ShieldCheck, ArrowRight } from 'lucide-react';
import { STATS } from '@/constants';
import { useScrollToSection } from '@/hooks';

export function HeroSection() {
	const scrollToSection = useScrollToSection();

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-cyan-50"
			aria-labelledby="hero-heading"
		>
			{/* Background Decorations */}
			<div className="absolute inset-0 overflow-hidden" aria-hidden="true">
				<div
					className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
				/>
				<div
					className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: '1s' }}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
				<div className="text-center">
					{/* ISO Badge */}
					<a
						href="#about"
						className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-blue-300 transition-all mb-8 group"
					>
						<ShieldCheck className="w-4 h-4 text-emerald-500" aria-hidden="true" />
						<span>ISO 27001 &amp; 9001 tanúsított vállalat</span>
						<ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
					</a>

					{/* Main Heading */}
					<h1
						id="hero-heading"
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight"
					>
						Megbízható IT partner
						<br />
						<span className="bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
							a digitális jövőhöz
						</span>
					</h1>

					{/* Description */}
					<p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
						Az TechnoLogic Hungary Kft. több mint 25 éve nyújt professzionális IT
						szolgáltatásokat magyar vállalatoknak. Felhőmegoldások, kiberbiztonság
						és egyedi szoftverfejlesztés egy kézből.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
						<button
							onClick={() => scrollToSection('contact')}
							className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl cursor-pointer hover:from-blue-700 hover:to-cyan-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 transition-all text-lg"
						>
							Ingyenes konzultáció
							<ArrowRight className="inline-block w-5 h-5 ml-2" aria-hidden="true" />
						</button>
						<button
							onClick={() => scrollToSection('services')}
							className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl cursor-pointer hover:border-blue-500 hover:text-blue-600 transition-all text-lg"
						>
							Szolgáltatásaink
						</button>
					</div>

					{/* Stats Grid */}
					<div
						className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
						role="list"
						aria-label="Statisztikák"
					>
						{STATS.map((stat, index) => (
							<div
								key={index}
								className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all"
								role="listitem"
							>
								<div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-1">
									{stat.value}
								</div>
								<div className="text-sm text-slate-600 font-medium">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<button
				onClick={() => scrollToSection('services')}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce p-2 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors"
				aria-label="Görgess le"
			>
				<ChevronDown className="w-8 h-8" aria-hidden="true" />
			</button>
		</section>
	);
}
