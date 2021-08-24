import Link from "next/link";
import React from 'react'
import {useRouter} from 'next/router';

interface customLinkProps {
    href: string;
    className?: string;
    onClick?: () => unknown;
    children: React.ReactChild
}

export const NavLink: React.FC<customLinkProps> = ({children, href, className, onClick}) => {

    const router = useRouter();
    let newClassName = className
    if (router.pathname === href) {
        newClassName = `${className}  border-b-4 border-indigo-100`
    }


    return (
        <Link href={{pathname: href}}>
            <a className={newClassName} onClick={onClick}>
                {children}
            </a>
        </Link>
    );
};

