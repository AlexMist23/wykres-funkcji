import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Database, Layout, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="flex-1 mx-auto max-w-[2560px]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="w-full px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground">
                Next Template: Cutting-Edge Web Dev Starter
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Jumpstart your web development with our powerful, feature-rich
                template using Next.js 15, React 19, and the latest web
                technologies.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-foreground">
            Our Tech Stack
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Next.js 15 & React 19</CardTitle>
                <CardDescription>
                  Build modern, server-side rendered React applications with the
                  latest features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Layout className="w-12 h-12 mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Leverage the power of server components, the App Router, and
                  the latest React innovations for optimal performance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Prisma & Vercel Postgres</CardTitle>
                <CardDescription>
                  Robust database solutions for your application needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Database className="w-12 h-12 mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Type-safe database access with Prisma and scalable hosting
                  with Vercel Postgres.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shadcn UI & Tailwind CSS</CardTitle>
                <CardDescription>
                  Beautiful, customizable UI components out of the box.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Zap className="w-12 h-12 mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Rapidly build stunning interfaces with pre-built components
                  and utility-first CSS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Clone our repository and start building your next big project
                with our powerful template.
              </p>
            </div>
            <Button className="inline-flex items-center">
              Clone Repository <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
