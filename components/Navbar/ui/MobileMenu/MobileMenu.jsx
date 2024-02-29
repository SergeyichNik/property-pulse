import {FaGoogle} from 'react-icons/fa'
import NavLink from "../NavLink/NavLink";
import {Routes} from "@/constants/routes";

const MobileMenu = ({isLoggedIn, providers, onSignInClick}) => {
    return (
        <div id='mobile-menu'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
                <NavLink
                    href={Routes.HOME}
                    className='block text-base font-medium'
                >
                    Home
                </NavLink>
                <NavLink
                    href={Routes.PROPERTIES}
                    className='block text-base font-medium'
                >
                    Properties
                </NavLink>
                {isLoggedIn && (
                    <NavLink
                        href={Routes.PROPERTIES_ADD}
                        className='block text-base font-medium'
                    >
                        Add Property
                    </NavLink>
                )}
                {!isLoggedIn && (

                        <div className='flex items-center'>
                            {providers &&
                                Object.values(providers).map((provider) => (
                                    <button onClick={() => onSignInClick(provider.id)} className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-3'>
                                        <span>Login or Register</span>
                                    </button>
                                ))}
                        </div>

                )}
            </div>
        </div>
    );
};

export default MobileMenu;
