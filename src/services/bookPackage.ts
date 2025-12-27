import { databases } from "../appwrite/config";
import { ID, Permission, Role } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_PACKAGE_ID;

export const createPost = async (data: any, userId: any) => {
  try {
    return await databases.createDocument({
      databaseId: DATABASE_ID,
      collectionId: COLLECTION_ID,
      documentId: ID.unique(),
      data,
      permissions: [
        Permission.read(Role.user(userId)),
        Permission.write(Role.user(userId)),
      ],
    });
  } catch (error) {
    console.error("Create post error:", error);
    throw error;
  }
};
