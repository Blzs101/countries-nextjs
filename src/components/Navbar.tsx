import ModeToggle from "./ModeToggle";

export default function Navbar() {
    return (
        <header className="flex items-center justify-center h-[72px] dark:text-white dark:bg-dark-blue-element text-black bg-very-dark-grey-bg mb-4">
            <a href="/" className="p-6 mr-auto font-extrabold">
                <h1>Where in the word?</h1>
            </a>
            <div className="flex p-6">
                <ModeToggle />
            </div>
        </header>
    )
}
