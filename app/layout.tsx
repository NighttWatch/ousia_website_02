import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ["300","400","500"] });

export const metadata = {
  title: 'Ousia',
  description: 'Future of Finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}



