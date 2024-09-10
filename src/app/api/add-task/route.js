import ConnectDB from "@/db";
import Task from "@/model/task";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewTask = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req) {
  try {
    await ConnectDB();
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

    console.log("start insert data to DB");
    const addResult = await Task.create(extractReq);
    console.log("end insert data to DB");
    if (!addResult) {
      return NextResponse.json({
        success: false,
        message: "failed at adding data to DB",
      });
    }
    return NextResponse.json({
      success: true,
      message: "add DB data successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
}
