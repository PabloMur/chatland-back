import AuthModel from "@/lib/models/AuthModel";
//import { headers } from "next/headers";
//import jwt from "jsonwebtoken";

class AuthController {
  static async createAuth(req) {
    const { email, password } = await req.json();
    const created = await AuthModel.createAuth(email, password);
    return created;
  }
}

export default AuthController;
