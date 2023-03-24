import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {


    return (
        <nav className="navbar bg-body-tertiary d-flex justify-content-center align-items-center">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Task Train</Link>
            </div>
        </nav>
    )
}