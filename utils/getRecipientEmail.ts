import { User } from "firebase/auth";
import { Conversation } from "../types";

export const getRecipientEmail = (
  conversationUsers: Conversation["user"],
  loggedInUser?: User | null
) => {
    const abc =conversationUsers.find((userEmail) => userEmail !== loggedInUser?.email)
    return abc;
};
