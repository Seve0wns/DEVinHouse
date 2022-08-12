import styles from "../styles/layout/navbar.module.css";
export function NavBar() {
  return (
    <nav>
      <ul className={styles.navBar}>
        <li key="home">Início</li>
        <li key="produtos">Produtos</li>
        <li key="about">Sobre</li>
        <li key="contato">Contato</li>
      </ul>
    </nav>
  );
}
