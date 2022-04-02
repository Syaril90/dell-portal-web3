import { ShoppingCartIcon, UserIcon, MenuIcon } from "@heroicons/react/outline";
import { dellLogo } from "../constants";

function Header() {
    return (
        <header>
            <div className="flex m-1 justify-between items-center text-gray-600">
                <div className="flex space-x">
                    <MenuIcon className="w-14 h-14  p-2 hover:border-b-2 hover:border-gray-700" />
                    <img className="w-44 object-contain p-3" src={dellLogo} alt="" />
                </div>
                <input
                    className="flex h-10 max-w-2xl flex-grow outline-none p-3 border border-gray-300"
                    type="text"
                    placeholder="Search Dell"
                />
                <div className="flex space-x">
                    <ShoppingCartIcon className="w-14 h-14 p-3 hover:border-b-2 hover:border-gray-700" />
                    <UserIcon className="w-14 h-14 p-3 hover:border-b-2 hover:border-gray-700" />
                </div>
            </div>
        </header>
    )
}

export default Header