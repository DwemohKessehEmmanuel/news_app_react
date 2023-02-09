import React from 'react'
import './NewsNav.css'
import HamburgerIcon from './HamburgerIcon';

const NewsNav = ({setCategory}) => {
  return (
    <div className='Nav'>
          <div className="icon">
              <HamburgerIcon setCategory={ setCategory} />
          </div>
          <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
              alt='inshortslogo'
              height='85%'
              style={{cursor:'pointer'}}
          />
    </div>
  );
}

export default NewsNav
