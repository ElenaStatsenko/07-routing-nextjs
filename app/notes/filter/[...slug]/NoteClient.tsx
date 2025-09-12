"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState } from "react";

import Pagination from "@/components/Pagination/Pagination";
import { fetchNotes } from "@/lib/api/notes.ts";
import Link from "next/link";

interface TagProps{
  filter?: string | undefined;
}
import SearchBox from "@/components/SearchBox/SearchBox";
import { useDebouncedCallback } from "use-debounce";

export default function NoteClient({filter}:TagProps) {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const debouncedSetSearch = useDebouncedCallback((value: string) => {
    setSearch(value);
  }, 500);

  const { data, isSuccess } = useQuery({
    queryKey: ["notes", page, search, filter],
    queryFn: () => fetchNotes(page, search, filter),
    refetchOnMount: false,
    placeholderData: keepPreviousData,
  });

  return (
    <div >
      <header >
        <SearchBox
          onSearch={(value) => {
            setPage(1); // ✅ скидати сторінку одразу при зміні пошуку
            debouncedSetSearch(value); // ✅ оновити search з debounce
          }}
        />

        {isSuccess && data?.totalPages > 1 && (
          <Pagination
            pageCount={data?.totalPages ?? 0}
            page={page}
            setPage={setPage}
          />
        )}
      </header>

      <div>
        <ul>
          {data?.notes?.map((note) => (
            <li key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <div>
                <span >{note.tag}</span>
                <Link href={`/notes/${note.id}`}>View details</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}