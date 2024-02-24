import Link from "next/link";
import {Routes} from "@/constants/routes";
import NavLink from "../NavLink/NavLink";

const DesktopMenu = ({isLoggedIn}) => {
    return (
        <div className='hidden md:ml-6 md:block'>
            <div className='flex space-x-2'>
                <NavLink
                    href={Routes.HOME}
                >
                    Home
                </NavLink>
                <NavLink
                    href={Routes.PROPERTIES}
                >
                    Properties
                </NavLink>
                {isLoggedIn && (
                    <NavLink
                        href={Routes.PROPERTIES_ADD}
                    >
                        Add Property
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default DesktopMenu;
