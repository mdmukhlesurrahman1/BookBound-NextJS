import { Geist } from "next/font/google";
import "./globals.css";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "BookBound",
  description: "Online Book Borrowing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.className} h-full`}
    >
      <body className="min-h-full flex flex-col bg-base-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
