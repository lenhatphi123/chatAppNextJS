import { AppProps } from "next/app";
import Login from "./login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
function MyApp({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, _error] = useAuthState(auth);

  useEffect(()=>{
    const setUserInDb = async () => {
      try {
        await setDoc(
          // set vào doc gồm db, tên trường và key phân biệt 
          doc(db,'users',loggedInUser?.email as string),
          //set vào db gồm các thông tin dưới đây
          {
            email:loggedInUser?.email,
            lastSeen:serverTimestamp(),
            photoURL:loggedInUser?.photoURL
          },
          // ghi đè lần truy cập mới nhất vào lần truy cập muộn nhất
          {merge:true}
        )
      } catch (error) {
        console.log('ERROR SETTING USER INFO IN DB',error);
        
      }
    }
    if(loggedInUser){
      setUserInDb()
    }
  },[loggedInUser])

  if(loading) return <Loading/>

  if (!loggedInUser) return <Login />;

  return <Component {...pageProps} />;
}
export default MyApp;
