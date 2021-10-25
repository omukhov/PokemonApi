import React from 'react';

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
                    <a href="#">
                        PokeDex
                    </a>
                </li>
                <li>
                    <a href="#">
                        ShinyDex
                    </a>
                </li>
            </ul>
       </div>
    );
};

export default Header;