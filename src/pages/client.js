import { useSession } from "next-auth/react";

export default function Client() {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <main>
        <div className="container">
          <h1>Loading</h1>
        </div>
      </main>
    );
  }

  if (status === "unauthenticated") {
    return (
      <main>
        <div className="container">
          <h1>Access Denied</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="container">
        <h1>Client</h1>
      </div>
    </main>
  );
}
