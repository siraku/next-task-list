import ConnectDB from "@/db";
import Task from "@/model/task";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();
    const { searchParams } = new URL(req.url);
    console.log(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "id is required",
      });
    }

    const extractReq = await req.json();
    const { title, description } = extractReq;
    console.log(title);
    console.log(description);
    console.log(extractReq);
    // const { error } = AddNewTask.valid({ title, description });
    // console.log(error.details[0].message);
    // if (error) {
    //   return NextResponse.json({
    //     success: false,
    //     message: error.details[0].message,
    //   });
    // }

    console.log("start update data to DB");
    const addResult = await Task.findOneAndUpdate({ _id: id }, extractReq, {
      new: true,
    });
    console.log("end update data to DB");
    if (!addResult) {
      return NextResponse.json({
        success: false,
        message: "failed at updating data to DB",
      });
    }
    return NextResponse.json({
      success: true,
      message: "update DB data successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
}
