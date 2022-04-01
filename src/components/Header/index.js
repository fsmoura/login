import { Logo } from "./Logo";
import { MainButton } from "./MainButton";
import { Menu } from "./Menu";
import * as S from "./styles.module.css";

export function Header() {
  return (
    <header className={S.header}>
      <div className={S.container}>
        <Logo />
        <Menu />
        <MainButton />
      </div>
    </header>
  );
}
