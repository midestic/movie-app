import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import styles from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <div className={`${styles.rootComp}`}>
      <Header />
      <Outlet />
    </div>
  );
}
