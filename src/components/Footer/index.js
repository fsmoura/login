import * as S from "./styles.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={S.footer}>
      <p>Fabio Moura - Copyright {year}</p>
    </footer>
  );
}
