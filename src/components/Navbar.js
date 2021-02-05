import React from 'react'

const Navbar = (props) => {
    return (
        <nav>
            <h3 className="logo">{props.name}</h3>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <button>For More</button>
        </nav>
    )
}

export default Navbar
