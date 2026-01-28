import { useState, type FormEvent, type ChangeEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { CONTACT_INFO, CONTACT_TOPICS } from '@/constants';
import type { FormData, FormErrors } from '@/types';

const initialFormData: FormData = {
	name: '',
	company: '',
	email: '',
	topic: '',
	message: '',
};

function validateForm(data: FormData): FormErrors {
	const errors: FormErrors = {};

	if (!data.name.trim()) {
		errors.name = 'A név megadása kötelező';
	}

	if (!data.email.trim()) {
		errors.email = 'Az email megadása kötelező';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
		errors.email = 'Érvénytelen email cím';
	}

	if (!data.topic || data.topic === 'Válasszon témát...') {
		errors.topic = 'Kérjük válasszon témát';
	}

	if (!data.message.trim()) {
		errors.message = 'Az üzenet megadása kötelező';
	} else if (data.message.trim().length < 10) {
		errors.message = 'Az üzenet legalább 10 karakter legyen';
	}

	return errors;
}

function ContactInfoList() {
	return (
		<div className="space-y-8">
			{CONTACT_INFO.map((info, index) => {
				const Icon = info.icon;
				return (
					<div key={index} className="flex items-start gap-6 group">
						<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300">
							<Icon
								className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors"
								aria-hidden="true"
							/>
						</div>
						<div>
							<h3 className="text-lg font-bold text-slate-900 mb-1">
								{info.title}
							</h3>
							{info.isLink ? (
								<a
									href={
										info.title === 'Email'
											? `mailto:${info.content}`
											: `tel:${info.content.replace(/\s/g, '')}`
									}
									className="text-lg font-medium text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
								>
									{info.content}
								</a>
							) : (
								<p className="text-slate-600">{info.content}</p>
							)}
							{info.subtext && (
								<p className="text-slate-400 text-sm mt-1">{info.subtext}</p>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}

interface InputFieldProps {
	label: string;
	name: string;
	type?: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	required?: boolean;
	placeholder?: string;
}

function InputField({
	label,
	name,
	type = 'text',
	value,
	onChange,
	error,
	required,
	placeholder,
}: InputFieldProps) {
	return (
		<div className="space-y-2">
			<label htmlFor={name} className="text-sm font-semibold text-slate-700">
				{label} {required && <span className="text-red-500">*</span>}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				aria-invalid={!!error}
				aria-describedby={error ? `${name}-error` : undefined}
				className={`w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 ${
					error ? 'border-red-300' : 'border-slate-200'
				}`}
			/>
			{error && (
				<p id={`${name}-error`} className="text-red-500 text-sm" role="alert">
					{error}
				</p>
			)}
		</div>
	);
}

function ContactForm() {
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const validationErrors = validateForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsSubmitting(false);
		setSubmitSuccess(true);
		setFormData(initialFormData);

		// Reset success message after 5 seconds
		setTimeout(() => setSubmitSuccess(false), 5000);
	};

	return (
		<div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 sm:p-10 border border-slate-100 relative overflow-hidden">
			<div
				className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 opacity-50 pointer-events-none"
				aria-hidden="true"
			/>

			<h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">
				Küldjön üzenetet
			</h3>

			{submitSuccess && (
				<div
					className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm"
					role="alert"
				>
					Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
				<div className="grid sm:grid-cols-2 gap-6">
					<InputField
						label="Név"
						name="name"
						value={formData.name}
						onChange={handleChange}
						error={errors.name}
						required
						placeholder="Az Ön neve"
					/>
					<InputField
						label="Cégnév"
						name="company"
						value={formData.company}
						onChange={handleChange}
						placeholder="Cég neve"
					/>
				</div>

				<InputField
					label="Email"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleChange}
					error={errors.email}
					required
					placeholder="pelda@email.hu"
				/>

				<div className="space-y-2">
					<label htmlFor="topic" className="text-sm font-semibold text-slate-700">
						Téma <span className="text-red-500">*</span>
					</label>
					<div className="relative">
						<select
							id="topic"
							name="topic"
							value={formData.topic}
							onChange={handleChange}
							aria-invalid={!!errors.topic}
							aria-describedby={errors.topic ? 'topic-error' : undefined}
							className={`w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer ${
								errors.topic ? 'border-red-300' : 'border-slate-200'
							}`}
						>
							{CONTACT_TOPICS.map((topic) => (
								<option key={topic} value={topic}>
									{topic}
								</option>
							))}
						</select>
						<ChevronDown
							className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
							aria-hidden="true"
						/>
					</div>
					{errors.topic && (
						<p id="topic-error" className="text-red-500 text-sm" role="alert">
							{errors.topic}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<label htmlFor="message" className="text-sm font-semibold text-slate-700">
						Üzenet <span className="text-red-500">*</span>
					</label>
					<textarea
						id="message"
						name="message"
						rows={4}
						value={formData.message}
						onChange={handleChange}
						aria-invalid={!!errors.message}
						aria-describedby={errors.message ? 'message-error' : undefined}
						className={`w-full px-4 py-3 rounded-xl bg-slate-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400 ${
							errors.message ? 'border-red-300' : 'border-slate-200'
						}`}
						placeholder="Írja le, miben segíthetünk..."
					/>
					{errors.message && (
						<p id="message-error" className="text-red-500 text-sm" role="alert">
							{errors.message}
						</p>
					)}
				</div>

				<Button
					type="submit"
					variant="primary"
					className="w-full"
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Küldés...' : 'Üzenet küldése'}
				</Button>
			</form>
		</div>
	);
}

export function ContactSection() {
	return (
		<section
			id="contact"
			className="py-32 bg-slate-50"
			aria-labelledby="contact-heading"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
					<div>
						<SectionHeader
							badge="Kapcsolat"
							title={<span id="contact-heading">Vegye fel velünk a kapcsolatot!</span>}
							description="Akár kérdése van, akár ajánlatot szeretne kérni, kollégáink készséggel állnak rendelkezésére. Írjon nekünk vagy hívjon minket!"
							align="left"
						/>
						<ContactInfoList />
					</div>

					<ContactForm />
				</div>
			</div>
		</section>
	);
}
