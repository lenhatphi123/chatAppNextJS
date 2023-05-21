import { useAuthState } from "react-firebase-hooks/auth";
import { AppUser, Conversation } from "../types";
import { auth, db } from "../config/firebase";
import { getRecipientEmail } from "../utils/getRecipientEmail";
import { collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

export const useRecipient = (conversationUsers: Conversation["user"]) => {
  const [loggedInUser, _loading, _error] = useAuthState(auth);

  //get email not exec
  const recipientEmail = getRecipientEmail(conversationUsers, loggedInUser);

  // get avatar
  const queryGetRecipient = query(
    collection(db, "users"),
    where("email", "==", recipientEmail)
  );

  const [recipientsSnapshot] = useCollection(queryGetRecipient);

  const recipient = recipientsSnapshot?.docs[0]?.data() as AppUser | undefined;

  return { recipient,recipientEmail };
};
