
import { ModeToggle } from "@/components/global/mode-toggle";
import Link from "next/link";

const ControlButtons = () => {
    return (
        <aside className="flex gap-2 items-center">
            <Link
                href={'/dashboard'}
                className="bg-primary text-white dark:text-gray-800 p-2 px-4 rounded-md hover:bg-primary/80"
            >
                Login
            </Link>
            {/* <UserButton /> */}
            <ModeToggle />
        </aside>
    );
}

export default ControlButtons;