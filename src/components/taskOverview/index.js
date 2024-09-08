"use client";
import React from "react";
import AddTask from "../addTask";

const TaskOverview = () => {
  return (
    <div className=" min-h-screen flex flex-col bg-gradient-to-r p-10 from-purple-500 to-blue-500">
      <div>
        <AddTask />
      </div>
    </div>
  );
};

export default TaskOverview;
