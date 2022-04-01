import * as S from "./styles.module.css";

export function LoginRequired() {
  return <small className={S.loginRequired}>Login</small>;
}
