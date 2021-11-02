import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
       <div className="header d-flex">
           <h3>
               <a href="#">
                   Pokemon DB
               </a>
           </h3>
            <ul className="d-flex">
                <li>
                    <Link to="/pokemon" >
                        PokeDex
                    </Link>
                </li>
                <li>
                    <Link to="/shiny">
                        ShinyDex
                    </Link>
                </li>
            </ul>
       </div>
    );
};

export default Header;