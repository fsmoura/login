import { getSession } from "next-auth/react";
import Head from "next/head";

export default function ServerSide({ messageSession }) {
  console.log(messageSession);

  return (
    <>
      <Head>
        <title>Securing Pages | Server Side</title>
      </Head>
      <main>
        <div className="container">
          <h1>{messageSession}</h1>
          <small>Server Side</small>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  const messageSession = session
    ? "You are logged in! :)"
    : "You are not logged in! :(";

  return {
    props: {
      messageSession,
    },
  };
}
