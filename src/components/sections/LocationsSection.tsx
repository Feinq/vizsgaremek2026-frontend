import { MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { LOCATIONS, TECHNOLOGIES } from '@/constants';
import type { Location } from '@/types';

interface LocationCardProps {
	location: Location;
}

function LocationCard({ location }: LocationCardProps) {
	return (
		<article className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col h-full">
			{/* Header with gradient */}
			<div
				className={`bg-linear-to-br ${location.gradient} p-8 relative overflow-hidden`}
			>
				<div
					className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/3 -translate-y-1/3"
					aria-hidden="true"
				>
					<MapPin className="w-32 h-32 text-white" />
				</div>
				<div className="relative z-10">
					<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-white text-xs font-semibold mb-4 border border-white/20">
						<MapPin className="w-3 h-3" aria-hidden="true" />
						{location.role}
					</div>
					<h3 className="text-3xl font-bold text-white tracking-tight">
						{location.city}
					</h3>
				</div>
			</div>

			{/* Content */}
			<div className="p-8 flex-1 flex flex-col">
				<p className="text-slate-600 mb-8 leading-relaxed flex-1">
					{location.description}
				</p>

				<div className="space-y-3">
					<p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
						Funkciók
					</p>
					<ul className="flex flex-wrap gap-2" role="list">
						{location.features.map((feature, idx) => (
							<li
								key={idx}
								className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200"
							>
								{feature}
							</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	);
}

function TechnologyList() {
	return (
		<div className="mt-28">
			<p className="text-center text-slate-400 font-medium text-sm uppercase tracking-widest mb-10">
				Technológiák, amelyekkel dolgozunk
			</p>
			<ul
				className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 hover:grayscale-0 grayscale transition-all duration-500"
				role="list"
				aria-label="Használt technológiák"
			>
				{TECHNOLOGIES.map((tech, index) => (
					<li
						key={index}
						className="text-slate-600 font-bold text-xl hover:text-blue-600 transition-colors cursor-default"
					>
						{tech}
					</li>
				))}
			</ul>
		</div>
	);
}

export function LocationsSection() {
	return (
		<section
			id="locations"
			className="py-32 bg-slate-50 relative"
			aria-labelledby="locations-heading"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					badge="Telephelyek"
					title={
						<span id="locations-heading">
							Országos jelenlét,{' '}
							<span className="text-blue-600">helyi szakértelem</span>
						</span>
					}
					description="Három stratégiai helyszínen vagyunk jelen, hogy közel legyünk ügyfeleinkhez és gyorsan tudjunk reagálni igényeikre."
				/>

				<div className="grid md:grid-cols-3 gap-8">
					{LOCATIONS.map((location, index) => (
						<LocationCard key={index} location={location} />
					))}
				</div>

				<TechnologyList />
			</div>
		</section>
	);
}
