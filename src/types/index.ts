import type { LucideIcon } from 'lucide-react';

export interface Service {
	icon: LucideIcon;
	title: string;
	description: string;
	features: string[];
	gradient: string;
}

export interface Location {
	city: string;
	role: string;
	description: string;
	features: string[];
	gradient: string;
	shadow: string;
}

export interface Stat {
	value: string;
	label: string;
}

export interface TimelineItem {
	year: string;
	event: string;
}

export interface Badge {
	icon: LucideIcon;
	label: string;
	desc: string;
}

export interface ContactInfo {
	icon: LucideIcon;
	title: string;
	content: string;
	subtext?: string;
	isLink?: boolean;
}

export interface NavItem {
	id: string;
	label: string;
}

export interface FormData {
	name: string;
	company: string;
	email: string;
	topic: string;
	message: string;
}

export interface FormErrors {
	name?: string;
	email?: string;
	topic?: string;
	message?: string;
}
