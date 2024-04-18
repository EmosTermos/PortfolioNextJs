import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import GrainEffect from "@/components/visualEffects/grain-effect";
import { Cursor } from "@/components/cursor/cursor";
import { cn } from "@/lib/utils";

//Fonts
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({subsets: ["latin"], variable: "--font-oswald"})
const PixelFont = Pixelify_Sans({subsets: ["latin"], variable: "--font-pixel"})

//Metadata
export const metadata: Metadata = {
  title: "Kamil Dąbrowski Portfolio",
  description: "Portfolio was generated insudo Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className, OswaldFont.variable, PixelFont.variable)}>
        <GrainEffect /> 
        {children}
      </body>
    </html>
  );
}


// import { FC, ReactNode } from "react";

// interface FeaturedCardProps{
//     logo?: ReactNode;
//     title: string;
//     tag: string;
//     video: string;
//     actice: boolean;
// }

// const FeaturedCard: FC<FeaturedCardProps> = () => {
//     return <div></div>
// }

// export default FeaturedCard;
