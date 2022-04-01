import Link from "next/link";
import * as S from "./styles.module.css";

export function Logo() {
  return (
    <Link href="/">
      <a className={S.logo}></a>
    </Link>
  );
}
