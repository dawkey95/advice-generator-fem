import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
	subsets: ['latin'],
	variable: '--manrope',
});

export const metadata = {
	title: 'Advice Generator | FEM',
	description: 'Created by Dawid Keyser',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`dark ${manrope.variable}`}>{children}</body>
		</html>
	);
}
