import AuthModel from "@/lib/models/AuthModel";
//import { headers } from "next/headers";
//import jwt from "jsonwebtoken";

class AuthController {
  static async createAuth(body) {
    const { email, password } = body;
    const created = await AuthModel.createAuth(email, password);
    return created;
  }
}

export default AuthController;
