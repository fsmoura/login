import Head from "next/head";
import Link from "next/link";
import * as S from "./styles.module.css";

export default function SecuringPages() {
  return (
    <>
      <Head>
        <title>Securing Pages</title>
      </Head>
      <main>
        <div className="container">
          <h1>Securing Pages</h1>
          <small>Client Side, Server Side and Middleware Examples</small>
          <ul className={S.list}>
            <li>
              <Link href="/securing-pages/client-side">
                <a>Client Side</a>
              </Link>
            </li>
            <li>
              <Link href="/securing-pages/server-side">
                <a>Server Side</a>
              </Link>
            </li>
            <li>
              <Link href="/securing-pages/middleware">
                <a>Middleware with redirect</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <strike>API Routes</strike>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
