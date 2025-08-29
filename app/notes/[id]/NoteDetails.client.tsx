'use client';

import css from "./NoteDetails.module.css";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <div>
      {isLoading && <p>Loading, please wait...</p>}
      {error && !data && <p>Something went wrong.</p>}
      {data && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{ data.title}</h2>
            </div>
            <p className={css.content}>{ data.content}</p>
            <p className={css.date}>{ data.createdAt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteDetailsClient;
