import { useState } from 'react';
import ButtonArrow from '../../ButtonArrow/ButtonArrow';
import './SmallNav.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const SmallNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div className='small-nav-container'>
            <button className='btn-primary'>登録 <ButtonArrow/> </button>
            {
                isMenuOpen ? 
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='btn-toggle'><XMarkIcon width={60}/></button>
                :
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='btn-toggle'><Bars3Icon width={60}/></button>
            }
        </div>
    );
};

export default SmallNav;