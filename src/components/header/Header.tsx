import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={`${styles.headerComp} border`}>
      <div>
        <h1 className={styles.header}>MOVIE APP</h1>
      </div>

      <div className={`${styles.menuItems} `}>
        <a href="https://midesticjs.vercel.app/#contact" target="_blank">
          <span>
            <b>Help</b>
          </span>
        </a>
      </div>
    </div>
  );
}
