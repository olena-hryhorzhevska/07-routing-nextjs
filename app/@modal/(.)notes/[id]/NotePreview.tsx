'use client';

import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";

const NotePreview = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <Modal onClose={() => router.back()}>
      {children}
    </Modal>
  );
};

export default NotePreview;
