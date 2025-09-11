import { notehubAPI } from "@/lib/api/notes";
import type { Note } from "@/types/note";
type Props = { params: Promise<{ slug: string[] }> };

import { fetchNotes } from "@/lib/api/notes";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import NoteClient from "./NoteClient";
export default async function NotesPage({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: { page?: string; search?: string };
}) {
  const queryClient = new QueryClient();

  // з урла
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || "";

  // slug для категорії
  const category = params.slug[0];
  const filter = category === "All" ? undefined : category;

  // префетч з урахуванням фільтра
  await queryClient.prefetchQuery({
    queryKey: ["notes", page, search, filter],
    queryFn: () => fetchNotes(page, search, filter),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteClient filter={filter} />
    </HydrationBoundary>
  );
}
