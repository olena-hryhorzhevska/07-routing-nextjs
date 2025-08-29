import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesPageClient from "./Notes.client";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { search: "", page: 1 }],
    queryFn: () => fetchNotes("", 1, 12),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesPageClient />
      </HydrationBoundary>
    </div>
  );
}
