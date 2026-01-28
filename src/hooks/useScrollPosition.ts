import { useState, useEffect, useCallback } from 'react';

interface ScrollPosition {
	scrollY: number;
	scrolled: boolean;
}

export function useScrollPosition(threshold = 50): ScrollPosition {
	const [scrollPosition, setScrollPosition] = useState<ScrollPosition>(() => ({
		scrollY: typeof window !== 'undefined' ? window.scrollY : 0,
		scrolled: typeof window !== 'undefined' ? window.scrollY > threshold : false,
	}));

	const handleScroll = useCallback(() => {
		const currentScrollY = window.scrollY;
		setScrollPosition({
			scrollY: currentScrollY,
			scrolled: currentScrollY > threshold,
		});
	}, [threshold]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	return scrollPosition;
}
