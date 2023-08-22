"use client";
import './globals.css'
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider basePath="/api/auth">
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
