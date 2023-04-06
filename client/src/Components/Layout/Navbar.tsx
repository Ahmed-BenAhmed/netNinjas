import React from "react";


export const Navbar = () => {
    return <div className="header">
                <nav>

                    <ul className="menu">
                        <li><a href="#">LOGO</a></li>
                        <li><a className="logo" href="#">Home</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Groups</a></li>
                        <li><a href="#">Workspace</a></li>
                        <li><a href="#"><img className="image" width="20" height="20" src="search.png"/></a></li>
                        <li><a href="#"><img width="25" height="25" src="cloche.png"/></a></li>
                        <li><a href="#"><img width="25" height="25" src="COPY3.png"/></a></li>
                        <li><a href="#">pfp</a></li>
                    </ul>
                </nav>
            </div>
}