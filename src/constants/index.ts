import {
	Server,
	Shield,
	Network,
	Code,
	Users,
	Building2,
	Phone,
	Mail,
	Award,
	Globe,
	Cpu,
	Lock,
} from 'lucide-react';
import type { Service, Location, Stat, TimelineItem, Badge, ContactInfo, NavItem } from '../types';

export const COMPANY_INFO = {
	name: 'TechnoLogic Hungary Kft.',
	shortName: 'TechnoLogic',
	foundedYear: 2018,
	phone: '+36 1 234 5678',
	email: 'info@technologic.hu',
	address: '1117 Budapest, Infopark sétány 1.',
	workingHours: 'Hétfő - Péntek: 9:00 - 17:00',
} as const;

export const NAV_ITEMS: NavItem[] = [
	{ id: 'services', label: 'Szolgáltatások' },
	{ id: 'about', label: 'Rólunk' },
	{ id: 'locations', label: 'Telephelyek' },
	{ id: 'contact', label: 'Kapcsolat' },
];

export const STATS: Stat[] = [
	{ value: '7+', label: 'Év tapasztalat' },
	{ value: '50+', label: 'Szakember' },
	{ value: '3', label: 'Telephely' },
	{ value: '200+', label: 'Sikeres projekt' },
];

export const SERVICES: Service[] = [
	{
		icon: Code,
		title: 'Szoftverfejlesztés',
		description:
      'Egyedi szoftvermegoldások tervezése és fejlesztése modern technológiákkal. Web, mobil és vállalati alkalmazások.',
		features: ['Web alkalmazások', 'Mobil appok', 'API fejlesztés'],
		gradient: 'from-blue-500 to-cyan-500',
	},
	{
		icon: Network,
		title: 'Hálózattervezés',
		description:
      'Professzionális hálózati infrastruktúra tervezés és kivitelezés. Cisco alapú megoldások, redundáns architektúrák.',
		features: ['VLAN struktúrák', 'VPN megoldások', 'Redundancia'],
		gradient: 'from-cyan-500 to-teal-500',
	},
	{
		icon: Server,
		title: 'Rendszerüzemeltetés',
		description:
      'Windows és Linux szerverek üzemeltetése, 24/7 monitoring, proaktív karbantartás és támogatás.',
		features: ['24/7 monitoring', 'Backup megoldások', 'Active Directory'],
		gradient: 'from-indigo-500 to-purple-500',
	},
	{
		icon: Shield,
		title: 'IT Biztonság',
		description:
      'Többrétegű védelmi rendszerek kialakítása. Tűzfalak, ACL-ek, titkosított kommunikáció.',
		features: ['Tűzfal konfiguráció', 'IPsec VPN', 'GDPR megfelelőség'],
		gradient: 'from-purple-500 to-pink-500',
	},
	{
		icon: Globe,
		title: 'Webhosting',
		description:
      'Megbízható webtárhely szolgáltatás és webszerver üzemeltetés. Apache, Nginx, SSL tanúsítványok.',
		features: ['SSL/TLS', 'Load balancing', 'CDN integráció'],
		gradient: 'from-pink-500 to-rose-500',
	},
	{
		icon: Cpu,
		title: 'IT Tanácsadás',
		description:
      'Stratégiai IT tanácsadás és digitális transzformáció támogatás. Audit, tervezés, implementáció.',
		features: ['IT audit', 'Architektúra tervezés', 'Optimalizálás'],
		gradient: 'from-orange-500 to-amber-500',
	},
];

export const LOCATIONS: Location[] = [
	{
		city: 'Budapest',
		role: 'Központ',
		description:
      'Szoftverfejlesztés, rendszerüzemeltetés, vezetőség. Központi IT infrastruktúra: Active Directory, DNS, DHCP, szerverek.',
		features: ['Fejlesztési központ', 'Központi szerverek', 'Vezetőség'],
		gradient: 'from-blue-600 to-indigo-700',
		shadow: 'shadow-blue-200',
	},
	{
		city: 'Debrecen',
		role: 'Értékesítés',
		description:
      'Értékesítési és ügyfélszolgálati központ a keleti régió lefedésére. Regionális ügyféltámogatás.',
		features: ['Értékesítés', 'Ügyfélszolgálat', 'Regionális támogatás'],
		gradient: 'from-cyan-600 to-blue-600',
		shadow: 'shadow-cyan-200',
	},
	{
		city: 'Miskolc',
		role: 'Pénzügy & HR',
		description:
      'Pénzügyi és HR központ fokozott biztonsággal. Dedikált tűzfal, titkosított VPN kapcsolat a központtal.',
		features: ['Pénzügy', 'HR', 'Adatfeldolgozás'],
		gradient: 'from-indigo-600 to-purple-700',
		shadow: 'shadow-indigo-200',
	},
];

export const TIMELINE: TimelineItem[] = [
	{ year: '2018', event: 'Cégalapítás Budapesten' },
	{ year: '2021', event: 'Debreceni telephely megnyitása' },
	{ year: '2023', event: 'Miskolci telephely megnyitása' },
	{ year: '2024', event: 'ISO 27001 tanúsítvány megszerzése' },
];

export const BADGES: Badge[] = [
	{ icon: Award, label: 'ISO 27001', desc: 'Tanúsított cég' },
	{ icon: Users, label: '50+', desc: 'Szakember' },
	{ icon: Lock, label: 'GDPR', desc: 'Megfelelőség' },
	{ icon: Globe, label: '24/7', desc: 'Támogatás' },
];

export const CONTACT_INFO: ContactInfo[] = [
	{
		icon: Building2,
		title: 'Központi iroda',
		content: COMPANY_INFO.address,
	},
	{
		icon: Phone,
		title: 'Telefon',
		content: COMPANY_INFO.phone,
		subtext: COMPANY_INFO.workingHours,
		isLink: true,
	},
	{
		icon: Mail,
		title: 'Email',
		content: COMPANY_INFO.email,
		subtext: 'Válaszolunk 24 órán belül',
		isLink: true,
	},
];

export const TECHNOLOGIES = [
	'Cisco',
	'Windows Server',
	'Linux',
	'VMware',
	'Azure',
	'AWS',
	'Docker',
	'Kubernetes',
] as const;

export const CONTACT_TOPICS = [
	'Válasszon témát...',
	'Szoftverfejlesztés',
	'Hálózattervezés',
	'Rendszerüzemeltetés',
	'IT Biztonság',
	'Egyéb',
] as const;
