import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vuong Ngoc Hue – Automation Tester & Frontend Developer',
  description: 'Vương Ngọc Huệ – Automation Tester & Frontend Developer. View projects and contact me.',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vương Ngọc Huệ",
              "jobTitle": "Automation Tester & Frontend Developer",
              "url": "https://vuongngochue.id.vn/",
              "sameAs": [
                "https://github.com/HueVuong12",
                "https://www.linkedin.com/in/hue-vuong-ngoc-532a8a369/"
              ]
            }
          ` }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
