import { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'disclaimer-accepted';

export function DisclaimerBanner() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Check if user has already accepted
		const accepted = localStorage.getItem(STORAGE_KEY);
		if (!accepted) {
			// Small delay for better UX
			const timer = setTimeout(() => setIsVisible(true), 1000);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem(STORAGE_KEY, 'true');
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div
			className={cn(
				'fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 transition-all duration-500',
				isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
			)}
			role="alert"
			aria-live="polite"
		>
			<div className="max-w-4xl mx-auto">
				<div className="bg-slate-900 border border-slate-700 rounded-xl sm:rounded-2xl shadow-2xl shadow-black/20 p-4 sm:p-6">
					{/* Close button - absolute positioned on mobile */}
					<button
						className="absolute top-6 right-6 sm:hidden p-3 text-slate-400 cursor-pointer hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
						aria-label="Bezárás"
					>
						<X className="w-4 h-4" aria-hidden="true" />
					</button>

					<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
						{/* Icon - visible on all screens */}
						<div className="hidden sm:flex w-10 h-10 bg-blue-500/20 rounded-xl items-center justify-center shrink-0">
							<Info className="w-5 h-5 text-blue-400" aria-hidden="true" />
						</div>

						{/* Content */}
						<div className="flex-1 min-w-0 pr-6 sm:pr-0">
							<div className="flex items-center gap-2 mb-1">
								<Info className="w-4 h-4 text-blue-400 sm:hidden" aria-hidden="true" />
								<h3 className="text-white font-semibold text-sm sm:text-base">
									Figyelmeztetés
								</h3>
							</div>
							<p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
								Ez a weboldal kizárólag <span className="text-white font-medium">bemutatási és oktatási célokat</span> szolgál.
								A TechnoLogic Hungary Kft. egy fiktív cég, az itt szereplő adatok,
								elérhetőségek és szolgáltatások nem valósak.
							</p>
						</div>

						{/* Actions */}
						<div className="flex items-center gap-2 shrink-0">
							<button
								onClick={handleAccept}
								className="w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-blue-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
							>
								Megértettem
							</button>
							<button
								className="hidden sm:flex p-2 text-slate-400 cursor-pointer hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
								aria-label="Bezárás"
							>
								<X className="w-5 h-5" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
