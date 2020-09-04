import React from 'react'
import {Link} from 'wouter'
import './Category.css'

export default function Category({name, options = [], ...props}){
    return (
        <div className={props.className}>
            <h3 className="AppTitle">{name}</h3>
            <ul className="CategoryList">
                {options.map(popularGif => (
                    <li key={popularGif}>
                        <Link 
                            className="CategoryLink"
                            to={`/search/${popularGif}`}
                        >
                            {popularGif}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}