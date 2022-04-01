import { useSession } from "next-auth/react";
import Head from "next/head";

export default function ClientSide() {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <main>
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  }

  if (status === "unauthenticated") {
    return (
      <>
        <Head>
          <title>Client Side | Access Denied</title>
        </Head>
        <main>
          <div className="container">
            <h1>You are not logged in! :(</h1>
            <small>Client Side</small>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Securing Pages | Client Side</title>
      </Head>
      <main>
        <div className="container">
          <h1>You are logged in! :)</h1>
          <small>Client Side</small>
        </div>
      </main>
    </>
  );
}
