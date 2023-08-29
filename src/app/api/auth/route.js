import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/FirestoreConn";
import bcrypt from "bcrypt";

export async function POST(request) {
  const { email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  const docRef = firestoreDB.collection("auth").doc();
  await docRef.set({
    email,
    password: hashedPassword,
  });
  return NextResponse.json({ authCreated: true });
}
