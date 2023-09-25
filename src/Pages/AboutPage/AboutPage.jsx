import AboutBanner from './AboutBanner/AboutBanner';
import './AboutPage.css'
import Point from './Point/Point';
import WhatIsWarple from './WhatIsWarple/WhatIsWarple';

const AboutPage = () => {
    return (
        <div>
            <AboutBanner/>
            <WhatIsWarple/>
            <Point/>
        </div>
    );
};

export default AboutPage;