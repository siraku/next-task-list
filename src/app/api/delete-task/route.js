import ConnectDB from "@/db";
import Task from "@/model/task";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    console.log("DB delete start");
    await ConnectDB();
    console.log(req.url);
    const { searchParams } = new URL(req.url);
    const taskId = searchParams.get("id");
    console.log(`id is ${taskId}`);

    if (!taskId) {
      return NextResponse.json({
        success: false,
        message: "id is neede , please check again",
      });
    }
    const deleteResult = await Task.findByIdAndDelete(taskId);
    console.log(deleteResult);
    if (!deleteResult) {
      return NextResponse.json({
        success: false,
        message: "something went wrong at delete task , please try again",
      });
    }

    return NextResponse.json({
      success: true,
      message: "successfully delete task",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error happened , please try again",
    });
  }
}
