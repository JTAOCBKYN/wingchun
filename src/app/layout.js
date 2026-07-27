
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const isStaging = process.env.VERCEL_ENV === "preview";

export const metadata = {
  title: {
    default: "Smart Wing Chun",
    template: "%s | Smart Wing Chun",
  },
  description:
    "Train in Traditional Wing Chun with instructors who have studied both modified and traditional systems and tested their skills in real-life situations. Welcoming students aged 10+, regardless of fitness level or disability.",
  icons: {
    icon: [
      { url: '/images/logo.png' }
    ],
  },
  robots: isStaging
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
      },
};

export default function RootLayout({ children }) {
  

  

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&amp;family=Noto+Serif+SC:wght@400;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`antialiased font-body smooth-scroll`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
