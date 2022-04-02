import React from 'react'
import { ChevronDownIcon } from "@heroicons/react/solid";

const HeaderNavList = [
    {
        Text: "APEX",
        Link: "Https://gg.com",
    },
    {
        Text: "Products",
        Link: "Https://gg.com",
    },
    {
        Text: "Solutions",
        Link: "Https://gg.com",
    },
    {
        Text: "Services",
        Link: "Https://gg.com",
    },
    {
        Text: "Supports",
        Link: "Https://gg.com",
    },
    {
        Text: "Deals",
        Link: "Https://gg.com",
    },
    {
        Text: "About Us",
        Link: "Https://gg.com",
    },
];

function HeaderNav() {
    return (
        <div className="hidden md:inline-flex relative px-6 space-x-4 p-2">
            {HeaderNavList.map((navItem) => {
                return (
                    <div>
                        <div className="flex items-center space-x-1 text-gray-600 text-sm font-light cursor-pointer">
                            <div>{navItem.Text}</div>
                            <ChevronDownIcon className="h-4" />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default HeaderNav