import { NextResponse } from "next/server";
import AuthController from "@/lib/controllers/authController";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const test = await AuthController.createAuth(body);
  return NextResponse.json(test);
}
