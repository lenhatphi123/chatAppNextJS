import { Timestamp } from "firebase/firestore";

export interface Conversation {
  user: string[];
}
export interface AppUser {
  email:string;
  lastSeen:Timestamp;
  photoUrl:string
}
