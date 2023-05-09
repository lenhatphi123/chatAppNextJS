import { AppProps } from "next/app";
import Login from "./login";
function MyApp({ Component, pageProps }: AppProps) {
  const loggedInUse = false;
  if (!loggedInUse) return <Login />;
  return <Component {...pageProps} />;
}
export default MyApp;
