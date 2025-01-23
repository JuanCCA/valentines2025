import { Roboto, Montserrat, Lobster, Comic_Neue } from "next/font/google";
import "./globals.css";
import GifLayer from "./components/GifLayer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['400', '700']
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ['400', '700']
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: ['400']
});

const comic = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Hola UwU",
  description: "Si lees esto me debes un beso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable} ${lobster.variable} ${comic.variable} antialiased`}
      >
        <GifLayer>
          {children}
        </GifLayer>
      </body>
    </html>
  );
}
