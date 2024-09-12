import TaskOverview from "@/components/taskOverview";
import React from "react";

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

const Tasks = async () => {
  const tasks = await getTasks();
  return (
    <div>
      <TaskOverview />
    </div>
  );
};

export default Tasks;
