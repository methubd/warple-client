import ButtonArrow from '../../../Components/ButtonArrow/ButtonArrow';
import './GreatCoupons.css';

const GreatCoupons = () => {
    return (
        <section className='great-coupons-container'>
            {/* <img src="https://i.ibb.co/VSRsfG0/air-ticket-symbol-2.png" alt="" /> */}
            <h1><span className='gc-head-bg'>会員登録</span>でお得な<span className='gc-head-bg'>クーポン</span><br />
            プレゼント中!
            </h1>
            <div className='great-coupon-btn-container'>
                <button className='btn-primary'>簡単30秒！会員登録 <ButtonArrow/> </button>
            </div>
        </section>
    );
};

export default GreatCoupons;