import ModeToggle from "./ModeToggle";

export default function Navbar() {
  return (
    <header className="mb-4 flex h-[72px] items-center justify-center bg-very-dark-grey-bg text-black dark:bg-dark-blue-element dark:text-white">
      <a href="/" className="mr-auto p-6 font-extrabold">
        <h1>Where in the word?</h1>
      </a>
      <div className="flex p-6">
        <ModeToggle />
      </div>
    </header>
  );
}
