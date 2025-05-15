import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditIcon } from "lucide-react";
import { AvatarEditModal } from "./avatar-edit-modal";

export default function AvatarCard({ id, name, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-0">
          <div className="relative h-[300px] w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={`Avatar of ${name}`}
              className="object-cover h-full w-full mx-auto hover:scale-105 duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              AI Avatar #{id}
            </p>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-t border-gray-100 dark:border-gray-700">
          <Button
            variant="outline"
            size="sm"
            className="ml-auto"
            onClick={() => setIsModalOpen(true)}
          >
            <EditIcon className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </CardFooter>
      </Card>

      <AvatarEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        avatar={{ id, name, image }}
      />
    </>
  );
}
