import React from 'react';

const serializeError = (error: unknown) => {
	if (error instanceof Error) {
		return error.message + '\n' + error.stack;
	}
	return JSON.stringify(error, null, 2);
};

interface ErrorBoundaryState {
	hasError: boolean;
	error: unknown;
}

interface ErrorBoundaryProps {
	children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
		return { hasError: true, error };
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-screen flex items-center justify-center p-4">
					<div className="max-w-lg w-full p-6 bg-white border border-red-200 rounded-xl shadow-lg">
						<h2 className="text-xl font-bold text-red-600 mb-4">
							Hiba történt
						</h2>
						<p className="text-slate-600 mb-4">
							Sajnáljuk, váratlan hiba lépett fel. Kérjük, frissítse az oldalt.
						</p>
						<pre className="mt-4 p-4 bg-slate-100 rounded-lg text-xs overflow-auto max-h-48 text-slate-700">
							{serializeError(this.state.error)}
						</pre>
						<button
							onClick={() => window.location.reload()}
							className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							Oldal frissítése
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
