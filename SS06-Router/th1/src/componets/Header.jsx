import React from 'react'

export default function Header() {
    return (
        <nav id="sidebar">
            <div className="p-4 pt-5">
                <a
                    href="#"
                    className="img logo rounded-circle mb-5"
                    style={{ backgroundImage: "url(images/logo.jpg)" }}
                />
                <ul className="list-unstyled components mb-5">
                    <li className="active">
                        <a href="./index.html" className="dropdown-toggle">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="./about.html">About</a>
                    </li>
                    <li>
                        <a href="./portfolio.html">Portfolio</a>
                    </li>
                    <li>
                        <a href="./contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
