import React, {ReactNode} from "react";
import {Link} from "react-router-dom";


interface Props {
    className?: string,
    to: string,
    children: ReactNode
}
export const NetNinjaLink = ({className="",children, to, ...props}:Props) => {
    return <Link {...props} className={`${className} nav-link`} to={to}>
        {children}
    </Link>
}