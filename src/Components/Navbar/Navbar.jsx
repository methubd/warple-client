import { Link } from 'react-router-dom';
import WebsiteLogo from '../WebsiteLogo/WebsiteLogo';
import './Navbar.css'
import ButtonArrow from '../ButtonArrow/ButtonArrow';

const navLinks = [
    {
        path: '/',
        titleEng: 'About',
        titleJp: 'warpleについて'
    },
    {
        path: '/',
        titleEng: 'About',
        titleJp: 'warpleについて'
    },
    {
        path: '/',
        titleEng: 'About',
        titleJp: 'warpleについて'
    },
]

const Navbar = () => {
    return (
        <nav>
            <WebsiteLogo/>
            <div>
                <ul className='warple-nav-link-container'>
                    {
                        navLinks.map(({path, titleEng, titleJp}) => <Link
                        key={path}
                        to={path}
                        className='warple-navlink'
                        >
                            <div>
                                <h4 className='warple-navlink-title-eng'>{titleEng}</h4>
                                <h2 className='warple-navlink-title-jp'>{titleJp}</h2>
                            </div>
                        </Link>)
                    }
                    <button className='btn-primary'>ログイン・新規会員登録 <ButtonArrow/> </button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;