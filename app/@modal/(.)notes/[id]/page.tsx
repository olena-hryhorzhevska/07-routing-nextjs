import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview";

export default function NotePreviewMain() {
  return (
    <NotePreview>
      <NoteDetailsClient />
    </NotePreview>
  );
}