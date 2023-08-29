import { firestoreDB } from "@/lib/FirestoreConn";
class roomModel {
  static async deleteRoom(roomId) {
    try {
      const docRef = await firestoreDB.collection("rooms").doc(roomId).delete();
      return docRef;
    } catch (error) {
      console.error("Error deleting room:", error);
      return false;
    }
  }
}

export default roomModel;
