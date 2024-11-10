import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/layouts/theme-provider";
import Header from "@/components/layouts/header";
import { auth } from "@/lib/auth";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  AdminSidebar,
  AdminSidebarBreadcrumbs,
} from "@/components/layouts/admin-sidebar";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/layouts/footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Template",
  description:
    "Your ultimate web development starter template with Next.js 15 and React 19",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const isAdmin = session ? session.user.role === "admin" : false;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
      >
        <ThemeProvider>
          {isAdmin ? (
            <LayoutForAdmin>{children}</LayoutForAdmin>
          ) : (
            <LayoutForUser>{children}</LayoutForUser>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}

function LayoutForAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AdminSidebar variant="inset"></AdminSidebar>
      <SidebarInset className="min-h-screen">
        <Header />
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-4 -mr-2 p-8 rounded-none" />
          <Separator orientation="vertical" className="mr-2 h-4 " />
          <AdminSidebarBreadcrumbs />
        </header>
        <>{children}</>
        <Footer />
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  );
}

function LayoutForUser({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
}
