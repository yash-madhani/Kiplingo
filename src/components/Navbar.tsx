import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar flex items-center justify-center navbar-expand-lg navbar-light bg-light">
                <ul className="flex items-center justify-center py-5 bg-slate-900 text-white w-full navbar-nav">
                    <li className="px-4 nav-item hover:text-orange-500 hover:underline hover:text-lg transition-all duration-200">
                        <a className="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                    </li>
                    <li className="px-4 nav-item hover:text-orange-500 hover:underline hover:text-lg transition-all duration-200">
                        <a className="nav-link" href="/Influencers">
                            Influencers
                        </a>
                    </li>
                    <li className="px-4 nav-item hover:text-orange-500 hover:underline hover:text-lg transition-all duration-200">
                        <a className="nav-link" href="/Brands">
                            Brands
                        </a>
                    </li>
                    <li className="px-4 nav-item hover:text-orange-500 hover:underline hover:text-lg transition-all duration-200">
                        <a className="nav-link" href="/Campaigns">
                            Campaigns
                        </a>
                    </li>
                    <li className="px-4 nav-item hover:text-orange-500 hover:underline hover:text-lg transition-all duration-200">
                        <a className="nav-link" href="/Pricing">
                            Pricing
                        </a>
                    </li>
                    <li className="px-4 nav-item hover:text-orange-500 hover:underline hover:text-lg transition-all duration-200">
                        <a className="nav-link" href="/Contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
