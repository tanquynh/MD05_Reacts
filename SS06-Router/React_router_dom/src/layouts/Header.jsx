import React from 'react'

function Header() {
    return (
        <div style={{ background: "#ccc" }}>
            <div style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/products"}>Product</NavLink>
            </div>
        </div>
    )
}

export default Header
