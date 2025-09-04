import { notehubAPI } from "@/lib/api/notes";
import Link from "next/link";
import type { Note } from "@/types/note";
interface TagProps{
    tag: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
}
export default  async function SidebarNotes({tag}: TagProps){
    const response=  await notehubAPI.get("/notes",{params:{
        tag:tag || undefined
    }}
    )
    console.log(response.data.notes)
    return (
        <aside>
      <ul>
        {response.data.notes.map((note: Note) => (
          <li key={note.id}>
            <Link href={`/notes/filter/${tag}`}>{note.tag}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
    
}