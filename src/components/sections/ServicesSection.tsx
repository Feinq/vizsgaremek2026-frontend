import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SERVICES } from '@/constants';
import type { Service } from '@/types';

interface ServiceCardProps {
	service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
	const Icon = service.icon;

	return (
		<article className="group relative bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden">
			{/* Top gradient line on hover */}
			<div
				className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
				aria-hidden="true"
			/>

			{/* Icon */}
			<div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
				<Icon
					className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
					aria-hidden="true"
				/>
			</div>

			{/* Content */}
			<h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
			<p className="text-slate-600 mb-6 leading-relaxed text-sm">
				{service.description}
			</p>

			{/* Features */}
			<ul className="space-y-3 pt-6 border-t border-slate-100" role="list">
				{service.features.map((feature, idx) => (
					<li
						key={idx}
						className="flex items-center gap-2.5 text-slate-600 text-sm font-medium"
					>
						<CheckCircle2
							className="w-4 h-4 text-blue-500 shrink-0"
							aria-hidden="true"
						/>
						{feature}
					</li>
				))}
			</ul>
		</article>
	);
}

export function ServicesSection() {
	return (
		<section
			id="services"
			className="py-32 bg-white relative"
			aria-labelledby="services-heading"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					badge="Szolgáltatásaink"
					title={
						<span id="services-heading">Komplex IT megoldások egy kézből</span>
					}
					description="Teljes körű informatikai szolgáltatásokat nyújtunk, a szoftverfejlesztéstől a hálózati infrastruktúra tervezésén át az üzemeltetésig."
				/>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{SERVICES.map((service, index) => (
						<ServiceCard key={index} service={service} />
					))}
				</div>
			</div>
		</section>
	);
}
