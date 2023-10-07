import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Providers from "@/state/provider";


const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Nextflix",
  description: "A movie catalog",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Providers>
        <body className={roboto.className}>
          <Navbar />
          <Section />
          {children}
        </body>
      </Providers>
    </html>
  );
}
