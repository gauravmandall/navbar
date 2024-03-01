import ControlButtons from "./control-buttons";
import Logo from "./logo";
import NavigationMenuBar from "./navmenu";

const NavBar = () => {
    return ( 
        <nav className="fixed h-16 inset-x-0 top-0 z-30 w-full border-b border-zinc-200 bg-white/75 dark:border-gray-900 dark:bg-gray-900/75 backdrop-blur-lg transition-all">
            <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-12">
                <div className="flex h-16 items-center justify-between border-b">
                    <>
                        <div className="items-center space-x-4 sm:flex">

                            <Logo />
                            <NavigationMenuBar />

                        </div>
                        <ControlButtons />
                    </>
                </div>
            </div>
        </nav>
     );
}

export default NavBar;