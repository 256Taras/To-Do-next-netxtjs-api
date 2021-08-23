import React from 'react';
import {NavLink} from "../nav-link";

export const Navbar = () => {
    return (
        <div className="text-md font-bold text-black lg:flex-grow">
            <NavLink href="completed"
                     className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-300 mr-2">
                Completed
            </NavLink>
            <NavLink href="/to-do"
                     className=" block  mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-300 mr-2">
                To Do
            </NavLink>
        </div>
    );
};

