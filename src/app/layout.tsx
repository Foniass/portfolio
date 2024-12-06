import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mathis Jacqueline Portfolio",
	description: "Mathis Jacqueline portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<PlausibleProvider domain="mathisjacqueline.com" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
