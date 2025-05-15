import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { CreateAvatarModal } from "./create-avatar-modal";

export default function CreateAvatarButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 shadow-lg rounded-full h-14 w-14 p-0"
        onClick={() => setIsModalOpen(true)}
      >
        <PlusIcon className="h-6 w-6" />
        <span className="sr-only">Create New Avatar</span>
      </Button>

      <CreateAvatarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
