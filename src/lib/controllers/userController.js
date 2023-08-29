import { UserModel } from "../models/UserModel";
import jwt from "jsonwebtoken";
import { headers } from "next/headers";

class UserController {
  static async createUser(request) {
    try {
      const { email, password } = await request.json();
      const emailCheck = await UserModel.createMe(email, password);
      return emailCheck;
    } catch (error) {
      console.error(error);
    }
  }
  static async getUserData(req) {
    try {
      const authorization = headers().get("authorization");
      const { email } = await req.json();
      if (!authorization) return { error: "Missing authorization token" };

      const token = authorization.replace("Bearer ", "");
      const secret = process.env.SECRET_KEY;
      const decodedToken = jwt.verify(token, secret);

      if (decodedToken.email !== email) {
        return { error: "Invalid email in token" };
      }

      const userData = await UserModel.getMe(email);
      return userData;
    } catch (error) {
      console.error(error);
      return { error: "An error occurred" };
    }
  }
  static async updateUserData(request) {
    try {
      const headersList = headers();
      const authorizationRef = headersList.get("authorization");
      const { newData, email } = await request.json();

      if (!authorizationRef) return { error: "Missing authorization token" };

      const token = authorizationRef.replace("Bearer ", "");
      const secret = process.env.SECRET_KEY;
      const decodedToken = jwt.verify(token, secret);

      if (decodedToken.email !== email) {
        return { error: "Invalid email in token" };
      }
      await UserModel.updateMe(decodedToken.email, newData);
      return true;
    } catch (error) {
      console.error(error);
      return { error: "An error occurred" };
    }
  }
  static async deleteAccount(req) {
    try {
      const headersList = headers();
      const authorizationRef = headersList.get("authorization");
      if (!authorizationRef) return { error: "Missing authorization token" };

      const token = authorizationRef.replace("Bearer ", "");
      const secret = process.env.SECRET_KEY;
      const decodedToken = jwt.verify(token, secret);

      if (!decodedToken.email) return { error: "Invalid email in token" };

      const userDeleted = await UserModel.deleteMe(decodedToken.email);
      return userDeleted;
    } catch (error) {
      return { error: "An error occurred" };
    }
  }
  static async checkEmail(email) {
    try {
      const emailCheck = await UserModel.checkEmail(email);
      return emailCheck;
    } catch (error) {
      console.error(error);
    }
  }
}

export default UserController;
