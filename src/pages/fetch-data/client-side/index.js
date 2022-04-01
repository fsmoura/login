import Head from "next/head";
import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import * as S from "../styles.module.css";

export default function ClientSide() {
  const [repo, setRepo] = useState([]);

  async function fetchRepo() {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_REPO);

      if (!response.ok) {
        throw `HTTP Error. Status: ${response.status}`;
      }

      const data = await response.json();

      setRepo(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRepo();
  }, []);

  return (
    <>
      <Head>
        <title>Fetch Data | Client Side</title>
      </Head>
      <main>
        <div className="container">
          <h1>Fetch Data | Client Side</h1>

          <ul className={S.ul}>
            {repo.map((item) => (
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
