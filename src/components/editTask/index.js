"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function EditTask({ currentTaskData, router }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [taskData, setTaskData] = useState(currentTaskData);
  const [loading, setLoading] = useState(false);

  const handleEditTask = async () => {
    try {
      setLoading(true);
      console.log("start api of add data");
      const apiResponse = await fetch(
        `/api/update-task?id=${currentTaskData._id}`,
        {
          method: "POST",
          body: JSON.stringify(taskData),
        }
      );
      const result = await apiResponse.json();
      console.log("the result is" + result.success);
      setOpenDialog(false);
      setLoading(false);
      router.refresh();
    } catch (error) {
      console.log("the error is " + error);
    }
  };

  return (
    <div>
      <button
        className="font-bold hover:scale-[1.1]"
        onClick={() => setOpenDialog(true)}
      >
        Edit
      </button>

      <Dialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(false);
        }}
      >
        <DialogContent className="sm:max-w-[425px] text-white">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              Edit your task name and description.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Enter task title"
                value={taskData.title}
                onChange={(event) => {
                  setTaskData({ ...taskData, title: event.target.value });
                }}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                placeholder="please input the description"
                value={taskData.description}
                onChange={(event) => {
                  setTaskData({ ...taskData, description: event.target.value });
                }}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => handleEditTask(taskData)}>
              {loading ? "saving" : "Submit"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
