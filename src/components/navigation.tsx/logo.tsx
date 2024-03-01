import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link
            className="navbar-brand"
            href={'/'}
        >
            <aside className="flex items-center gap-2">
                <Image
                    src={'/logoipsum-248.svg'}
                    width={40}
                    height={40}
                    alt="logo"
                />
                <span className="text-xl font-bold"> Acme.</span>
            </aside>

        </Link>
    );
}

export default Logo;