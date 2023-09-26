import { Link } from 'react-router-dom';
import WebsiteLogo from '../../../Components/WebsiteLogo/WebsiteLogo';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <div className='web-logo-footer'>
                    <WebsiteLogo/>
                </div>
            </div>
            <div className='footer-menu-container'>
                <div className='footer-menu-sub-container'>
                    <h4>warpleの3つのポイント</h4>
                    <Link className='footer-menu'>Option 1</Link>
                    <Link className='footer-menu'>Option 2</Link>
                    <Link className='footer-menu'>Option 3</Link>
                    <Link className='footer-menu'>Option 4</Link>
                    <Link className='footer-menu'>Option 5</Link>
                </div>
                <div className='footer-menu-sub-container'>
                    <h4>warpleの3つのポイント</h4>
                    <Link className='footer-menu'>Option 1</Link>
                    <Link className='footer-menu'>Option 2</Link>
                    <Link className='footer-menu'>Option 3</Link>
                    <Link className='footer-menu'>Option 4</Link>
                    <Link className='footer-menu'>Option 5</Link>
                </div>
                <div className='footer-menu-sub-container'>
                    <h4>warpleの3つのポイント</h4>
                    <Link className='footer-menu'>Option 1</Link>
                    <Link className='footer-menu'>Option 2</Link>
                    <Link className='footer-menu'>Option 3</Link>
                    <Link className='footer-menu'>Option 4</Link>
                    <Link className='footer-menu'>Option 5</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;