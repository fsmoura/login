import Head from "next/head";
import { FaLink } from "react-icons/fa";
import * as S from "../styles.module.css";

export default function ServerSide({ data }) {
  return (
    <>
      <Head>
        <title>Fetch Data | Server Side</title>
      </Head>
      <main>
        <div className="container">
          <h1>Fetch Data | Server Side</h1>

          <ul className={S.ul}>
            {data.map((item) => (
              <li key={item.id}>
                {item.name}
                <a href={item.html_url}>
                  <FaLink />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(process.env.NEXT_PUBLIC_REPO);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
