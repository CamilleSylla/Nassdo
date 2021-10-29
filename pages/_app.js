import { MenuProvider } from "../context/MenuContext";
import "../styles/globals.css";
import Menu from "./Components/Usable/Menu/Menu";
import NavBar from "./Components/Usable/Navbar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MenuProvider>
        <NavBar />
        <Menu />
      </MenuProvider>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
