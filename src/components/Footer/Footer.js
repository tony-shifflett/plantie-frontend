import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div>
            <Link to="/" 
                style={{textDecoration:"none", color:"black"}}>
                <FontAwesomeIcon icon={['fas', 'home']} />
            </Link>
            <Link to="/Tasks" 
                style={{textDecoration:"none", color:"black"}}>
                <FontAwesomeIcon icon={['fas', 'calendar']} />
            </Link>
            <Link to="/Calendar" 
                style={{textDecoration:"none", color:"black"}}>
                <FontAwesomeIcon icon={['fas', 'spa']} />
            </Link>
            <Link to="/Profile" 
                style={{textDecoration:"none", color:"black"}}>
                <FontAwesomeIcon icon={['fas', 'user']} />
                </Link>
        </div>
    )
}

export default Footer
