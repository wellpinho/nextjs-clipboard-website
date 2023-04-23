import './globals.css'
import { Bai_Jamjuree } from 'next/font/google'

const bai = Bai_Jamjuree({
  weight: ['400', '600'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Clipboard website',
  description: 'Website created with Nextjs and Tailwindcss',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bai.className}>{children}</body>
    </html>
  )
}
