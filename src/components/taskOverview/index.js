"use client";
import React, { useEffect, useState } from "react";
import AddTask from "../addTask";
import { Card, CardContent, CardTitle } from "../ui/card";
import { useRouter } from "next/navigation";
import { DeleteTask } from "../deleteTask";
import { EditTask } from "../editTask";

const TaskOverview = ({ tasks }) => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);

  // console.log(tasks);
  return (
    <div className=" min-h-screen flex flex-col bg-gradient-to-r p-10 from-purple-500 to-blue-500">
      <div>
        <AddTask router={router} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {tasks && tasks.length > 0
          ? tasks.map((task) => (
              <Card key={task._id}>
                <CardTitle className="ml-3 mt-2">{task.title}</CardTitle>
                <CardContent className="mt-2">{task.description}</CardContent>
                <div className="flex items-center gap-5 m-4">
                  <EditTask currentTaskData={task} router={router} />
                  <DeleteTask id={task._id} router={router} />
                </div>
              </Card>
            ))
          : null}
      </div>
    </div>
  );
};

export default TaskOverview;
