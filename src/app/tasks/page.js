"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { DeleteTask } from "@/components/deleteTask";
import { EditTask } from "@/components/editTask";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";
import AddTask from "@/components/addTask";

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
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);

  const tasks = await getTasks();
  return (
    <div className=" min-h-screen flex flex-col bg-gradient-to-r p-10 from-purple-500 to-blue-500">
      <div className="flex justify-between">
        <div>
          <AddTask router={router} />
        </div>
        <Link href={"/"}>
          <IoIosHome className="text-3xl text-black" />
        </Link>
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

export default Tasks;
