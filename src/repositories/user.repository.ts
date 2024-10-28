import { User } from "../entities/user.entity";
import firebaseAdmin from "firebase-admin";

export class UserRepository {
  async registerUser(user: User): Promise<{ uid: string; idToken: string }> {
    try {
      const userRecord = await firebaseAdmin.auth().createUser({
        email: user.email,
        password: user.password,
      });

      const customToken = await firebaseAdmin
        .auth()
        .createCustomToken(userRecord.uid);

      if (!customToken) {
        throw new Error("No se pudo obtener el ID token");
      }

      return { uid: userRecord.uid, idToken: customToken };
    } catch (error) {
      console.error(
        "Error en UserRepository al registrar usuario:",
        (error as Error).message
      );
      throw new Error("Error al registrar usuario");
    }
  }

  async findUserByEmail(email: string): Promise<User | null> {
    try {
      const userRecord = await firebaseAdmin.auth().getUserByEmail(email);
      return {
        email: userRecord.email || "",
      };
    } catch (error) {
      console.error(
        "Error en UserRepository al buscar usuario:",
        (error as Error).message
      );
      throw new Error("Error al buscar usuario");
    }
  }
}
