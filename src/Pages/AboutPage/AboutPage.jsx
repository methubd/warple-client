import AboutBanner from './AboutBanner/AboutBanner';
import './AboutPage.css'
import GreatCoupons from './GreatCoupons/GreatCoupons';
import Point from './Point/Point';
import PointGroup from './PointGroup/PointGroup';
import WhatIsWarple from './WhatIsWarple/WhatIsWarple';

const AboutPage = () => {
    return (
        <div>
            <AboutBanner/>
            <WhatIsWarple/>
            <Point/>
            <PointGroup/>
            <GreatCoupons/>
        </div>
    );
};

export default AboutPage;