import './AboutPage.css'

import AboutBanner from './AboutBanner/AboutBanner';
import Difference from './Difference/Difference';
import GreatCoupons from './GreatCoupons/GreatCoupons';
import HowToUse from './HowToUse/HowToUse';
import Point from './Point/Point';
import PointGroup from './PointGroup/PointGroup';
import WhatIsWarple from './WhatIsWarple/WhatIsWarple';
import Footer from '../Shared/Footer/Footer';

const AboutPage = () => {
    return (
        <div>
            <AboutBanner/>
            <WhatIsWarple/>
            <Point/>
            <PointGroup/>
            <GreatCoupons/>
            <HowToUse/>
            <Difference/>
            <GreatCoupons/>
            <Footer/>
        </div>
    );
};

export default AboutPage;