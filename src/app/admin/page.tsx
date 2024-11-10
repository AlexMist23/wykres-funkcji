import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminNavLinks } from "@/data/admin-sidebar-data";
import Link from "next/link";

export default async function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adminNavLinks
          .flatMap((group) => group.items)
          .map((link) => (
            <Link key={link.label} href={link.href}>
              <Card className="hover:bg-accent transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {link.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Manage {link.label.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
