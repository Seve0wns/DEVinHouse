import styles from "./styles/homepage/homepage.module.css";
export function Homepage() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.text1}>
          <p>Sempre próxima para cuidar, conectar, comunicar, e transformar</p>
        </div>
        <p>
          Uma empresa que há 45 anos oferece soluções inovadoras em
          segurança,redes,comunicações e energia.
        </p>
        <button type="button">AGENDE UMA DEMONSTRAÇÃO</button>
      </div>
      <img
        src="/image-1.png"
        alt=""
        className={styles.img}
        width="435"
        height="358"
      />
    </main>
  );
}
