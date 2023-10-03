import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";



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
      <body className={roboto.className}>
     
          <Navbar />
          <Section />
          {children}

      </body>
    </html>
  );
}
