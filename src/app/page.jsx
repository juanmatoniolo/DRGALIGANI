// src/app/page.jsx — sin openGraph propio: hereda title/description/image del layout raíz
import HomeClient from './HomeClient';

export const metadata = {
	alternates: { canonical: '/' },
};

export default function HomePage() {
	return <HomeClient />;
}