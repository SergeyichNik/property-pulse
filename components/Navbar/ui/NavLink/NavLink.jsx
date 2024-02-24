"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLink = ({className = '', href, children}) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`${pathname === href ? 'bg-black' : ''} text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
