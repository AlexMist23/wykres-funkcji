export interface NavItem {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

export interface NavGroup {
  group: string;
  items: NavItem[];
}

export const adminNavLinks: NavGroup[] = [
  {
    group: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/admin",
      },
    ],
  },
  {
    group: "Auth",
    items: [
      {
        label: "Users",
        href: "/admin/users",
      },
    ],
  },
  {
    group: "Models",
    items: [
      {
        label: "Products",
        href: "#",
      },
    ],
  },
  {
    group: "Tools ",
    items: [
      {
        label: "Database",
        href: "#",
      },
    ],
  },
];
