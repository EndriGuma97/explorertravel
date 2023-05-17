import { Fragment, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
// import { NavigationContainer, LogoContainer, NavLink, InvertedButton, BaseButton } from './navigation.styles'
import logo from '../img/logo.png'
import {ReactComponent as ListIcon} from '../img/list.svg';
import {ReactComponent as XIcon} from '../img/x.svg';
import {ReactComponent as SwapIcon} from '../img/swap.svg';
import { LangContext } from '../contexts/lang-context';

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { isEnglish, setIsEnglish } = useContext(LangContext);
  const toggleisEnglish = () => setIsEnglish(!isEnglish);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

    return (
        <Fragment>
        {/* <NavigationContainer>

                <img className='logo' src={logo} alt="Logo"/>
                  <NavLink as='span'>Hot Destinations</NavLink>
                <NavLink as='span'>Services</NavLink>
                <NavLink as='span'>Testimonials</NavLink>
                <InvertedButton>Tel: 355698858963</InvertedButton>
                <BaseButton>Book Now</BaseButton>
                
              

            
        </NavigationContainer> */}
        <div className={`header ${isOpen ? 'nav-open' : ''}`}>
          <a href="#">
        <img className="logo" alt="logo" src={logo} />
      </a>
          <nav class="main-nav">
        <ul class="main-nav-list">
          <li><a class="main-nav-link" href="#services" onClick={toggleNav}>{isEnglish ? 'About Our Services' : 'Shërbimet'}</a></li>
          <li><a class="main-nav-link" href='#testimonials' onClick={() => {
          const cta = document.querySelector('#testimonials');

          cta.scrollIntoView({ behavior: 'smooth', block: 'center' })
          toggleNav();}
        }>{isEnglish ? 'Testimonials' : 'Dëshmi/Komente'}</a></li>
          <li>
            <a class="main-nav-link nav-cta-inverted" href="tel:355692367151">069-236-7151</a>
          </li>
          <li><a class="main-nav-link nav-cta" href='#cta' onClick={toggleNav}>{isEnglish ? 'Book Now' : 'Rezervo Tani'}</a></li>
        </ul>
      </nav>
      <div className='lang'> 

      <div className='swaping'><SwapIcon /><span className='langSpan' onClick={toggleisEnglish}>{isEnglish ? 'Shqip' : 'English'}</span></div>
        <button onClick={toggleNav} class="btn-mobile-nav"><ListIcon className='icon-mobile-nav' name='menu-outline'/><XIcon className='icon-mobile-nav' name='close-outline'/></button></div>
      </div>
        
       
        <Outlet />
        </Fragment>
    )
}

export default Navigation