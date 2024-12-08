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
import { Fragment, useState } from "react";

const AddTask = ({ router }) => {
  const initialTaskFormData = {
    title: "",
    description: "",
  };
  const [openDialog, setOpenDialog] = useState(false);
  const [taskData, setTaskData] = useState(initialTaskFormData);
  const [loading, setLoading] = useState(false);

  const handleSaveTask = async (taskData) => {
    try {
      setLoading(true);
      console.log("start api of add data");
      const apiResponse = await fetch("/api/add-task", {
        method: "POST",
        body: JSON.stringify(taskData),
      });
      const result = await apiResponse.json();
      console.log("the result is" + result.success);
      setOpenDialog(false);
      setLoading(false);
      setTaskData(initialTaskFormData);
      router.refresh();
    } catch (error) {
      console.log("the error is " + error);
    }
  };

  return (
    <Fragment>
      <Button onClick={() => setOpenDialog(true)}>Add Task</Button>
      <Dialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(false);
          setTaskData(initialTaskFormData);
        }}
      >
        <DialogContent className="sm:max-w-[550px] text-black bg-gradient-to-r from-purple-500 to-blue-500 bg-opacity-25">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription className="font-bold text-black">
              Add your task name and description.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right font-bold">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Enter task title"
                value={taskData.title}
                onChange={(event) => {
                  setTaskData({ ...taskData, title: event.target.value });
                }}
                className="col-span-3 text-black"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right font-bold">
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
            <Button type="submit" onClick={() => handleSaveTask(taskData)}>
              {loading ? "saving" : "Submit"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default AddTask;
