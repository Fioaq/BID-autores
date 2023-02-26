import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({linkText, linkDirection, subtitle}) => {
    return (
        <div className='p-4'>
            <h1>Favorite authors</h1>
            <Link className='m-2' to={linkDirection}>{linkText}</Link>
            <h5 className='mt-2' style={{color: '#6f42c1'}}>{subtitle}</h5>
        </div>
    )
}

export default Header