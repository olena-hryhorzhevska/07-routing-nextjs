import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import NotePreviewClient from "@/app/@modal/(.)notes/[id]/NotePreview.client";

export default function NotePreviewMain() {
  return (
    <NotePreviewClient>
      <NoteDetailsClient />
    </NotePreviewClient>
  );
}