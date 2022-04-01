import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

const INITIAL_TIME_IN_SECONDS = 60 * 60;

export function CountDownBox() {
  const [secondsAmount, setSecondsAmount] = useState(INITIAL_TIME_IN_SECONDS);

  useEffect(() => {
    if (secondsAmount === 0) {
      signOut();
      return;
    }

    setTimeout(() => {
      setSecondsAmount((state) => state - 1);
    }, 1000);
  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div>
      <span>{String(minutes).padStart(2, "0")}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, "0")}</span>
    </div>
  );
}
