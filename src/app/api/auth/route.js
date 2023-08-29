import { NextResponse } from "next/server";
import AuthController from "@/lib/controllers/authController";

export async function POST(request) {
  const test = await AuthController.createAuth(request);
  return NextResponse.json(test);
}
