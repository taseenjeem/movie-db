import { Hind_Siliguri } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/global/navigation-bar/Navbar";
import ThemeProvider from "@/context/themeContext";
import Footer from "@/components/global/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const hindShiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Movie DB",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          className={`${hindShiliguri.className} dark:bg-body bg-white dark:text-white text-dark`}
        >
          <header>
            <Navbar />
          </header>
          {children}
          <div id="modal-content"></div>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </ThemeProvider>
  );
}
