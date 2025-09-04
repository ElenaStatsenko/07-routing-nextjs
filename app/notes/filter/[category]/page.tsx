
import { notehubAPI } from "@/lib/api/notes";
import type { Note } from "@/types/note";
type Props= {
    params: Promise<{category: string}>;
};

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
export default async function Notes({params}:Props){
   const {category} = await params;
   console.log(category);
   
   const response = await notehubAPI.get("/notes",{ params: { tag: category } });
 
    return (<div>
        <ul>
            {response.data.notes.map((note:Note)=> (
                <li key={note.id}> {note.title}</li>
            ))}
        </ul>
    </div>)
}



