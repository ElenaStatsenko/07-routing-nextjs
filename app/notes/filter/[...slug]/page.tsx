import { notehubAPI } from "@/lib/api/notes";
import type { Note } from "@/types/note";
type Props = { params: Promise<{ slug: string[] }> };

export default async function Notes({ params }: Props) {
  const { slug } = await params;
  const category = slug[0];
  const response = await notehubAPI.get("/notes", {
    params: { tag: category },
  });
  return (
    <div>
      <ul>
        {response.data.notes.map((note: Note) => (
          <li key={note.id}> {note.title}</li>
        ))}
      </ul>
    </div>
  );
}
