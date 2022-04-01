import Head from "next/head";

export default function Middleware() {
  return (
    <>
      <Head>
        <title>Middleware</title>
      </Head>
      <main>
        <div className="container">
          <h1>You are logged in! :)</h1>
          <small>Middleware with redirect</small>
        </div>
      </main>
    </>
  );
}
