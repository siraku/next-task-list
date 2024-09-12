"use client";
import React from "react";
import AddTask from "../addTask";
import { Card, CardContent, CardTitle } from "../ui/card";

const getTasks = async () => {
  try {
    const apiResponse = await fetch("http://localhost:3000/api/get-allTasks", {
      method: "GET",
      cache: "no-store",
    });
    const result = await apiResponse.json();
    return result?.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const TaskOverview = async () => {
  const tasks = await getTasks();
  console.log(tasks);
  return (
    <div className=" min-h-screen flex flex-col bg-gradient-to-r p-10 from-purple-500 to-blue-500">
      <div>
        <AddTask />
      </div>
      <div>
        {tasks.length > 0
          ? tasks.map((task) => (
              <Card>
                <CardTitle>aa</CardTitle>
                <CardContent>bb</CardContent>
              </Card>
            ))
          : null}
      </div>
    </div>
  );
};

export default TaskOverview;
