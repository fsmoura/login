import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub, FaTimes } from "react-icons/fa";
import * as S from "./styles.module.css";

export function MainButton() {
  const { data: session } = useSession();

  return session ? (
    <button className={`${S.mainButton} ${S.off}`} onClick={() => signOut()}>
      <FaTimes />
      Logout
    </button>
  ) : (
    <button
      className={`${S.mainButton} ${S.on}`}
      onClick={() => signIn("github")}
    >
      <FaGithub />
      Login
    </button>
  );
}
