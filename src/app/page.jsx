// src/app/page.jsx
import HomeClient from './HomeClient';

export const metadata = {
	title: 'Especialista en Derecho de Daños',
	description:
		'Abogado especialista en responsabilidad civil, accidentes de tránsito y derecho de seguros en Buenos Aires. Más de 25 años de experiencia. Primera consulta sin cargo.',
	alternates: { canonical: '/' },
	openGraph: {
		title: 'Especialista en Derecho de Daños | Dr. Galígani',
		description:
			'Abogado especialista en responsabilidad civil, accidentes de tránsito y derecho de seguros.',
		url: '/',
		type: 'website',
	},
};

export default function HomePage() {
	return <HomeClient />;
}