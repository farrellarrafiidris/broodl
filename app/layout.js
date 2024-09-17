import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Broodl",
  description: "Track your daily mood,everyday of the year! ",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex justify-between items-center gap-4 textGradient">
      <h1 className="font-fugaz">Broodl</h1>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8">
      footer
    </footer>
  )

  return (
    <html lang="en">
      <body className={ 'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ' + `${geistSans.variable} ${geistMono.variable} antialiased`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
