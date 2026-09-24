// lib/site.js

export const SITE_URL =
	process.env.NEXT_PUBLIC_SITE_URL || "https://drgaligani.vercel.app";

export const SITE_NAME = "Estudio Jurídico Dr. Galígani";
export const SITE_SHORT_NAME = "Dr. Galígani";
export const SITE_DESCRIPTION =
	"Abogado especialista en responsabilidad civil, accidentes de tránsito y derecho de seguros. Más de 25 años de experiencia en Buenos Aires.";

export const CONTACT = {
	phone: "+54-11-0000-0000",
	phoneDisplay: "+54 11 0000-0000",
	email: "contacto@drgaligani.com",
	whatsapp: "5491100000000",
	address: {
		street: "[Dirección]",
		city: "Buenos Aires",
		region: "CABA",
		postalCode: "[CP]",
		country: "AR",
	},
	hours: {
		days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
		opens: "09:00",
		closes: "19:00",
	},
	geo: {
		latitude: -34.6037,
		longitude: -58.3816,
	},
	social: {
		linkedin: "https://www.linkedin.com/in/[perfil]",
		instagram: "https://www.instagram.com/[perfil]",
		whatsapp: "https://wa.me/5491100000000",
	},
};
