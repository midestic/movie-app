import { useContext } from "react";
import styles from "./SearchBar.module.css";
import { MovieContext } from "../dataContext/DataContext";
import MapMovie from "../mapMovie/MapMovie";

export default function SearchBar() {
  let inputContext = useContext(MovieContext);

  if (!inputContext) {
    return <div>No Context.......</div>;
  }

  let { input, setInput } = inputContext;

  return (
    <div className={`${styles.searchComp} `}>
      <div className={`${styles.searchDiv}  `}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className={`${styles.searchInput}`}
          type="text"
        />
      </div>

      <MapMovie />
    </div>
  );
}
