import { Navbar, Footer } from '@/components/layout';
import {
	HeroSection,
	ServicesSection,
	AboutSection,
	LocationsSection,
	CtaSection,
	ContactSection,
} from '@/components/sections';
import { DisclaimerBanner } from '@/components/ui';

function App() {
	return (
		<div className="min-h-screen font-sans bg-slate-50 selection:bg-blue-500/30 selection:text-blue-900">
			<Navbar />

			<main id="main-content">
				<HeroSection />
				<ServicesSection />
				<AboutSection />
				<LocationsSection />
				<CtaSection />
				<ContactSection />
			</main>

			<Footer />

			<DisclaimerBanner />
		</div>
	);
}

export default App;
