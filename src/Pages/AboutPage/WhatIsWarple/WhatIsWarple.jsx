import './WhatIsWarple.css';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ButtonArrow from '../../../Components/ButtonArrow/ButtonArrow';

const WhatIsWarple = () => {
    return (
        <section>
            <SectionTitle
            title='WHAT IS warple'
            subTitle='warpleって?'
            ></SectionTitle>

            <div className='what-is-warple-container'>
                <div className='wiw-img-container'>
                    <img className='wiw-img' src="https://i.ibb.co/0yn0hQy/what-is-warple-img-1.png" alt="" />
                </div>

                <div>
                    <h1 className='wiw-title'>留学を、 <br /> もっとかしこく、 <br /> おもしろく。</h1>
                    <hr className='wiw-line' />
                    <p className='wiw-description'>warple は、語学学校/プログラムの検索や申込み、渡航 <br /> 
                    までの準備や学校/宿泊先の手配まで留学に必要なすべ <br /> 
                    てをインターネット上で完結させることにより、どこよりも安 <br /> 
                    く、どこよりもあなたらしく、留学が実現できるサービスです。</p>
                </div>
            </div>
            <div className='wiw-btn-container'>
                <button className='btn-primary'>初めての方へ <ButtonArrow/> </button>
            </div>
        </section>
    );
};

export default WhatIsWarple;