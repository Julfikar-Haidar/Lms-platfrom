"use client";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import ThemesProvider from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./Provider";
import { FC, useEffect } from "react";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./component/Loader/Loader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-Poppins",
});
const jossefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.variable} ${jossefin.variable} !bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300 bg-no-repeat`}
      >
        <SessionProvider>
          <Providers>
            <ThemesProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
            >
              <Custom> {children}</Custom>

              <Toaster position='top-center' reverseOrder={false} />
            </ThemesProvider>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}

const Custom: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});

  // useEffect(()=> {},[])
  return <div> {isLoading ? <Loader /> : <>{children}</>}</div>;
};
