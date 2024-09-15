import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

export function DeleteTask({ id, router }) {
  const [confirmDialog, setConfirmdialog] = useState(false);
  const handleDeleteTask = async (taskId) => {
    try {
      console.log("start delete task");
      const apiResponse = await fetch(`api/delete-task?id=${taskId}`, {
        method: "DELETE",
      });
      const result = await apiResponse.json();
      router.refresh();
      console.log("end delete task");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        className="font-bold hover:scale-110 bg-black text-white px-2 rounded-sm"
        onClick={() => setConfirmdialog(true)}
      >
        Delete
      </button>
      <AlertDialog
        open={confirmDialog}
        onOpenChange={() => setConfirmdialog(false)}
        className="bg-white"
      >
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure that you want to delete this task
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDeleteTask(id)}>
              Confirm Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
