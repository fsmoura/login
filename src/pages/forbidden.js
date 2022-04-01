import { getSession } from "next-auth/react";
import Head from "next/head";

export default function Forbidden() {
  return (
    <>
      <Head>
        <title>Forbidden</title>
      </Head>
      <main>
        <div className="container">
          <h1>Forbidden Page</h1>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ req, query }) {
  const session = await getSession({ req });

  const destination = query.callbackUrl || "/";

  if (session) {
    return {
      redirect: {
        destination: destination,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
