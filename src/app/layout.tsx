import './globals.css'
import { Maven_Pro } from 'next/font/google'
import { Toaster } from '@/ui/toasts/toaster'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/ui/tailwind-indicator'

const font = Maven_Pro({ subsets: ['latin'], variable: '--font' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('font-sans antialiased', font.variable)}>
      <body className="relative dark:bg-gray-900 dark:text-gray-100">
        <svg
          className="absolute inset-x-0 bottom-0 top-16 -z-10 h-full w-full stroke-gray-400/5 [mask-image:radial-gradient(130%_130%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1d4240dd-898f-445f-932d-e2872fd12de3"
              width={200}
              height={200}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
          />
        </svg>
        {children}
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  )
}