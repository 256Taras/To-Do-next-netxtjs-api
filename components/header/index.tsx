import React from 'react';
import {Navbar} from "../navbar";

export const Header = () => {

    return (
        <nav
            className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid ">
            <div
                className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <span className="font-semibold text-xl tracking-tight">To-Do List</span>
                </div>

            </div>

            <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <Navbar/>

                <div className="relative mx-auto text-gray-600 lg:block hidden">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 pl-2 pr-1 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search"/>

                </div>

            </div>

        </nav>
    );
};

