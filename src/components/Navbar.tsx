import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <div className="overflow-visible">
            <nav className="navbar h-[64px] flex items-center justify-center navbar-expand-lg navbar-light bg-light">
                <ul className="flex items-center justify-center py-5 bg-slate-900 text-white w-full navbar-nav">
                    <li className="px-4 nav-item hover:text-orange-500 hover:underline hover:text-lg transition-all duration-200">
                        <Link className="nav-link active" aria-current="page" href="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-4 nav-item hover:text-orange-500 hover:underline hover:text-lg transition-all duration-200">
                        <Link className="nav-link" href="/Influencers">
                            Influencers
                        </Link>
                    </li>
                    <li className="px-4 nav-item hover:text-orange-500 hover:underline hover:text-lg transition-all duration-200">
                        <Link className="nav-link" href="/Campaigns">
                            Campaigns
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
