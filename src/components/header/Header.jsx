import React from 'react'
import './header.scss'

import {ImSpoonKnife} from 'react-icons/im'

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?cs=srgb&dl=pexels-lukas-616401.jpg&fm=jpg)` }}>
      <div className="layer">
        <div className="container">
          <nav className="logo-wrapper">
            <div className="logo">
              <ImSpoonKnife className='brand' />
            </div>
          </nav>
          <div className="header-text">
            <h1>CooksCorner - Receipe Finder</h1>
            <p>Where Every Recipe Finds Home....</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header