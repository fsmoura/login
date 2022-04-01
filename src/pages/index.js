import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <div className="container">
          <h1>{process.env.NEXT_PUBLIC_TITLE}</h1>
        </div>
      </main>
    </>
  );
}
