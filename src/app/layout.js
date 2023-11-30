import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import dynamic from "next/dynamic";
import { lato as lato } from "./styles/font";

const Footer = dynamic(() => import("./components/Footer/Footer"));
const AuthProvider = dynamic(() => import("./components/AuthProvider"));

export const metadata = {
  title: "TuTurns |  A Tutoring Solution",
  description:
    "TuTurns offers comprehensive tutoring services for O/A Level, GCSE, and IGCSE boards. Achieve academic success with our experienced tutors.",
  manifest: "/manifest.ts",
  themeColor: "#3498db",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <AuthProvider>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
