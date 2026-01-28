import { Network, Award } from 'lucide-react';
import { COMPANY_INFO } from '@/constants';
import { useScrollToSection } from '@/hooks';

const footerLinks = {
	services: [
		{ label: 'Szoftverfejlesztés', href: '#services' },
		{ label: 'Hálózattervezés', href: '#services' },
		{ label: 'Rendszerüzemeltetés', href: '#services' },
		{ label: 'IT Biztonság', href: '#services' },
	],
	company: [
		{ label: 'Rólunk', id: 'about' },
		{ label: 'Karrier', href: '#' },
		{ label: 'Partnereink', href: '#' },
		{ label: 'Kapcsolat', id: 'contact' },
	],
	legal: [
		{ label: 'Adatvédelem', href: '/privacy' },
		{ label: 'ÁSZF', href: '/terms' },
		{ label: 'Cookie szabályzat', href: '/cookies' },
		{ label: 'Impresszum', href: '/impressum' },
	],
};

export function Footer() {
	const scrollToSection = useScrollToSection();
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800"
			role="contentinfo"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-12 mb-16">
					{/* Brand Column */}
					<div className="col-span-2 md:col-span-1">
						<div className="flex items-center gap-3 mb-6 group">
							<div className="w-10 h-10 bg-linear-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
								<Network className="w-6 h-6 text-white" aria-hidden="true" />
							</div>
							<span className="text-xl font-bold text-white tracking-tight">
								{COMPANY_INFO.shortName}
							</span>
						</div>
						<p className="text-slate-400 text-sm leading-relaxed mb-6">
							Megbízható IT partner {COMPANY_INFO.foundedYear} óta.
							<br />
							Szoftverfejlesztés, hálózattervezés, rendszerüzemeltetés egy helyen.
						</p>
						<div className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-2 w-fit border border-slate-700">
							<Award className="w-5 h-5 text-cyan-400" aria-hidden="true" />
							<span className="text-slate-200 text-xs font-semibold">
								ISO 27001 tanúsított
							</span>
						</div>
					</div>

					{/* Services Links */}
					<div>
						<h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
							Szolgáltatások
						</h4>
						<ul className="space-y-3 text-sm" role="list">
							{footerLinks.services.map((link) => (
								<li key={link.label}>
									<button
										onClick={() => scrollToSection('services')}
										className="cursor-pointer hover:text-cyan-400 transition-colors duration-200"
									>
										{link.label}
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* Company Links */}
					<div>
						<h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
							Cég
						</h4>
						<ul className="space-y-3 text-sm" role="list">
							{footerLinks.company.map((link) => (
								<li key={link.label}>
									{'id' in link && link.id ? (
										<button
											onClick={() => scrollToSection(link.id)}
											className="cursor-pointer hover:text-cyan-400 transition-colors duration-200"
										>
											{link.label}
										</button>
									) : (
										<a
											href={link.href}
											className="cursor-pointer hover:text-cyan-400 transition-colors duration-200"
										>
											{link.label}
										</a>
									)}
								</li>
							))}
						</ul>
					</div>

					{/* Legal Links */}
					<div>
						<h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
							Jogi
						</h4>
						<ul className="space-y-3 text-sm" role="list">
							{footerLinks.legal.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="cursor-pointer hover:text-cyan-400 transition-colors duration-200"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
					<p>
						&copy; {currentYear} {COMPANY_INFO.name} Minden jog fenntartva.
					</p>
					<p>A precíz tervezés és kivitelezésre törekedve.</p>
				</div>
			</div>
		</footer>
	);
}
