import { NavBar, LoginButton } from "./Components";
import styles from "./styles/layout/header.module.css";
export function Layout({ children }) {
  console.log(children);
  return (
    <>
      <header className={styles.header}>
        <h1>DEVinBras</h1>
        <NavBar />
        <LoginButton />
      </header>
      <div className="content">{children}</div>
    </>
  );
}
