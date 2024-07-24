import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/MinHeader/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next JS Foodies App",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
