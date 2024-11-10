import { User } from "@prisma/client";

export interface FetchUsersResponse {
  data: User[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export async function fetchUsers(
  searchParams?: URLSearchParams
): Promise<User[]> {
  // Chcek is it server or client component
  const isServer = typeof window === "undefined";
  // Define url's parts
  const baseUrl = isServer ? process.env.URL : "";
  const apiUrl = "/api/admin/users";
  const searchParamsString = searchParams ? searchParams.toString() : "";
  const fetchUrl = `${baseUrl}${apiUrl}?${searchParamsString}`;

  const res = await fetch(fetchUrl, {
    cache: "no-cache",
    next: { tags: ["users"] },
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to fetch users");
  }

  return res.json();
}
