import Task from "@/model/task";
import { NextResponse } from "next/server";
import ConnectDB from "@/db";

export async function GET() {
  try {
    await ConnectDB();
    const allTask = await Task.find({});
    if (!allTask) {
      return NextResponse.json({
        success: false,
        message: "something went wrong at getting DB task data",
      });
    }

    return NextResponse.json({
      success: true,
      data: allTask,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "some thing went wrong, please try again",
    });
  }
}
