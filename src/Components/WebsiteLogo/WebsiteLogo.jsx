import { Link } from 'react-router-dom';
import './WebsiteLogo.css'

const WebsiteLogo = () => {
    return (
        <Link to='/' className='logo-container'>
            <img className='web-logo' src="https://i.ibb.co/4m5YrQ6/logo.png" alt="warple-official-logo-png-format" />
        </Link>
    );
};

export default WebsiteLogo;