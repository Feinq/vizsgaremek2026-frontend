import { TIMELINE, BADGES, COMPANY_INFO } from '@/constants';

export function AboutSection() {
	return (
		<section
			id="about"
			className="py-24 bg-slate-900 relative overflow-hidden"
			aria-labelledby="about-heading"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden" aria-hidden="true">
				<div className="absolute -top-[20%] -right-[10%] w-200 h-200 bg-linear-to-br from-blue-600/10 to-transparent rounded-full blur-3xl" />
				<div className="absolute -bottom-[20%] -left-[10%] w-200 h-200 bg-linear-to-br from-cyan-600/10 to-transparent rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left Column - Content */}
					<div className="relative">
						<div
							className="absolute -left-8 -top-8 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
							aria-hidden="true"
						/>

						<span className="text-cyan-400 font-bold text-sm uppercase tracking-widest pl-1">
							Rólunk
						</span>

						<h2
							id="about-heading"
							className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-8 leading-tight"
						>
							Építjük a{' '}
							<span className="text-transparent bg-clip-text bg-linear-to-br from-blue-400 to-cyan-400">
								digitális jövőt
							</span>
						</h2>

						<div className="prose prose-invert prose-lg text-slate-300/80 mb-10">
							<p>
								A {COMPANY_INFO.name} {COMPANY_INFO.foundedYear}-ban alakult
								Budapesten, azzal a céllal, hogy megbízható IT partnere legyen a
								hazai és nemzetközi vállalatoknak.
							</p>
							<p>
								Ma már három telephelyen, több mint 50 szakemberrel dolgozunk
								azon, hogy ügyfeleink mindig a legmodernebb és legbiztonságosabb
								IT megoldásokat kapják. ISO 27001 tanúsítványunk garantálja az
								információbiztonság legmagasabb szintjét.
							</p>
						</div>

						{/* Timeline */}
						<div
							className="space-y-0 relative border-l border-white/10 ml-3 pl-8 py-2"
							role="list"
							aria-label="Cég története"
						>
							{TIMELINE.map((item, index) => (
								<div key={index} className="relative mb-8 last:mb-0 group" role="listitem">
									<div
										className="absolute -left-9.75 top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-700 group-hover:bg-cyan-400 group-hover:scale-110 transition-all duration-300 shadow-[0_0_0_4px_rgba(15,23,42,1)]"
										aria-hidden="true"
									/>
									<div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
										<span className="text-cyan-400 font-bold text-lg">
											{item.year}
										</span>
										<span className="text-slate-300 font-medium">
											{item.event}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right Column - Badges Grid */}
					<div className="grid grid-cols-2 gap-6 relative">
						<div
							className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent rounded-3xl -m-4"
							aria-hidden="true"
						/>

						{BADGES.map((item, index) => {
							const Icon = item.icon;
							return (
								<div
									key={index}
									className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-2 py-4 md:p-8 text-center hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group"
								>
									<div className="w-12 h-12 mx-auto bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
										<Icon
											className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300"
											aria-hidden="true"
										/>
									</div>
									<div className="text-xl md:text-3xl font-bold text-white mb-1">
										{item.label}
									</div>
									<div className="text-white/50 text-xs md:text-sm font-medium uppercase tracking-wide">
										{item.desc}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
