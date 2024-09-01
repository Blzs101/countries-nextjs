"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <button className="flex items-center justify-center" onClick={changeTheme}>
      <Image
        src={"/moon-darkmode.svg"}
        alt="change mode"
        width={30}
        height={30}
        className="hidden dark:block"
      />
      <Image
        src={"/moon-lightmode.svg"}
        alt="change mode"
        width={30}
        height={30}
        className="block dark:hidden"
      />
    </button>
  );
}
