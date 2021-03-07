import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h2>Logo</h2>
            <ul>
                <Link to="/shop"><li>Shop</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </nav>
    );
};

export default Nav;