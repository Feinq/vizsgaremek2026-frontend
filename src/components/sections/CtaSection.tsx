import { Button } from '@/components/ui/Button';
import { useScrollToSection } from '@/hooks';

export function CtaSection() {
	const scrollToSection = useScrollToSection();

	return (
		<section
			className="py-24 bg-blue-600 relative overflow-hidden"
			aria-labelledby="cta-heading"
		>
			{/* Background */}
			<div className="absolute inset-0" aria-hidden="true">
				<div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-700" />
				{/* Abstract Shapes */}
				<div className="absolute top-0 right-0 w-160 h-160 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
				<div className="absolute bottom-0 left-0 w-120 h-120 bg-cyan-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

				{/* Pattern */}
				<div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
					}}
				/>
			</div>

			<div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
				<h2
					id="cta-heading"
					className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
				>
					Készen áll a digitális transzformációra?
				</h2>
				<p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
					Kérjen ingyenes konzultációt szakértőinktől és fedezze fel, hogyan
					segíthetünk vállalkozása fejlődésében!
				</p>
				<Button
					onClick={() => scrollToSection('contact')}
					variant="secondary"
					size="lg"
					className="shadow-lg shadow-blue-900/20"
				>
					Kapcsolatfelvétel
				</Button>
			</div>
		</section>
	);
}
