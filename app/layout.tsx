import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import {
  AppBrand,
  AppHeader,
  AppLinks,
  AppSpacer,
} from "@/app/_components/shared/Header";

import "./globals.css";

interface RoutesProps {
  path: string;
  label: string;
}

const routes: RoutesProps[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/shuffle",
    label: "Shuffle",
  },
  {
    path: "/profile",
    label: "My Profile",
  },
];

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Uta Waku",
  description: "Uta Waku (歌枠) is a singing broadcast.",
  // icons: {
  //   icon: "/assets/images/sites-logo.svg",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-gray-100`}>
        <AppHeader>
          <AppBrand
            title="Breezarre Anime Tracker"
            logo="https://animeanime.global/wp-content/uploads/2020/06/335869.png"
            width={100}
            height={100}
            alt="Anime Themes"
          />
          <AppLinks direction="row" routes={routes} />
        </AppHeader>
        <AppSpacer />
        {children}
      </body>
    </html>
  );
}
