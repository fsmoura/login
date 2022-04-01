import Head from "next/head";
import Link from "next/link";
import * as S from "./styles.module.css";

export default function FetchData() {
  return (
    <>
      <Head>
        <title>Fetch Data</title>
      </Head>
      <main>
        <div className="container">
          <h1>Fetch Data</h1>
          <small>Client and Server Side Examples</small>

          <ul className={S.list}>
            <li>
              <Link href="/fetch-data/client-side">
                <a>Client Side</a>
              </Link>
            </li>
            <li>
              <Link href="/fetch-data/server-side">
                <a>Server Side</a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
