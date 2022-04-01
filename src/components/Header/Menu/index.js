import { useSession } from "next-auth/react";
import Link from "next/link";
import { LoginRequired } from "./LoginRequired";
import * as S from "./styles.module.css";

export function Menu() {
  const { status } = useSession();
  return (
    <>
      <nav className={S.menu}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/images">
          <a>Images</a>
        </Link>
        <Link href="/fetch-data">
          <a>Fetch Data</a>
        </Link>
        <Link href="/securing-pages">
          <a>Securing Pages</a>
        </Link>
        <Link href="/admin">
          <a>
            Admin
            {status === "unauthenticated" && <LoginRequired />}
          </a>
        </Link>
      </nav>
    </>
  );
}
