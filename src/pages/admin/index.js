import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { CountDownBox } from "../../components/CountDownBox";
import * as S from "./styles.module.css";

export default function Middleware({ num }) {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>

      <main>
        <div className="container">
          <h1>Admin</h1>

          <div className={S.columns}>
            <div className={`${S.column} ${S.countdown}`}>
              <p>Desconectado em:</p>
              <CountDownBox />
            </div>

            <div className={S.column}>
              <Image
                src="/windows.png"
                width="300"
                height="300"
                layout="responsive"
                alt="Image"
              />
            </div>

            <div className={`${S.column} ${S.user}`}>
              {session && (
                <>
                  <div>
                    <p>
                      Olá, <strong>{session.user.name}</strong>
                    </p>
                    <p>
                      <small>{session.user.email}</small>
                    </p>
                    <br />
                    <p>
                      New random number every 10 seconds: <b>{num}</b>
                    </p>
                  </div>
                  <div className={S.image}>
                    <Image
                      src={session.user.image}
                      width="60"
                      height="60"
                      alt="Image"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export function getStaticProps() {
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return {
    props: {
      num: randomNum(0, 100),
    },
    revalidate: 10,
  };
}
