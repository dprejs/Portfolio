'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import Head from "next/head";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import colors from "./standards/colors";
import ContextProvider from "./context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [drawer, setDrawer] = useState(false)
  const toggleDrawer = (open: boolean) => {
    setDrawer(open);
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.primary,
        contrastText: colors.text
      },
      secondary: {
        main: colors.secondary,
        contrastText: colors.text
      },
      error: {
        main: colors.accent,
      },
      text: {
        primary: colors.text,
      },

    }
  });
  return (
    <html lang="en">
      <Head>
        <title>Daniel Prejs</title>
        <meta name="keywords" content="harrington's taphouse, beer, craft beer, bar, beer bar, taphouse, tap, harrington, harrington's, homebrew, brewery, patio" />
        <meta name="description" content="Harrington's tap house website and menu" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider>
          <ThemeProvider theme={theme}>
            <div className={`fixed top-0 z-30 right-0 p-3`}>
              <button className={drawer ? "hidden" : ""} onClick={() => toggleDrawer(true)}>
                <MenuRoundedIcon color="error" sx={{ width: "60px", height: "60px" }} />
              </button>

              <SwipeableDrawer
                anchor="right"
                open={drawer}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
              >
                <div className="bg-primary h-screen p-10 text-4xl font-bold flex flex-col justify-around z-40">
                  <div className={`fixed top-0 ${drawer ? "z-90" : "z-20"} right-0 p-3`}>
                    <button className={""} onClick={() => toggleDrawer(false)}>
                      <CloseIcon color="error" sx={{ width: "60px", height: "60px" }} />
                    </button>

                  </div>
                  <div className="flex flex-col gap-10">
                    <div onClick={() => toggleDrawer(false)}>
                      <Link href={"/"}>Home</Link>
                    </div>
                    <div onClick={() => toggleDrawer(false)}>
                      <Link href={"/resume"}>My Resume</Link>
                    </div>
                    <div onClick={() => toggleDrawer(false)}>
                      <Link href={"/about"}>About Me</Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <span>Connect with me</span>
                    <span className="flex justify-around">
                      <a href="mailto: danielnprejs@gmail.com">
                        <EmailIcon fontSize="large" />
                      </a>
                      <a href="https://www.linkedin.com/in/daniel-prejs">
                        <LinkedInIcon fontSize="large" />
                      </a>
                      <a href="https://github.com/dprejs">
                        <GitHubIcon fontSize="large" />
                      </a>
                    </span>
                  </div>
                </div>
              </SwipeableDrawer>
            </div>

            {children}
          </ThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
