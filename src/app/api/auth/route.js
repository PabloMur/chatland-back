import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/FirestoreConn";
import bcrypt from "bcrypt";

export async function POST(request) {
  const data = await request.json();
  const { email, password } = data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const docRef = firestoreDB.collection("auth").doc();
  await docRef.set({
    email,
    password: hashedPassword,
  });
  return NextResponse.json({ authCreated: true });
}
