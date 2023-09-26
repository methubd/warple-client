import './HowToUse.css';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const HowToUse = () => {
    return (
        <section className='htu-container'>
            <SectionTitle
            title='HOW TO USE'
            subTitle='使い方は3ステップで簡単！'
            ></SectionTitle>
            <div className='htu-card-container'>
                <div className='htu-card'>
                    <div>
                        <img src="https://i.ibb.co/4TS3bms/how-to-use-icon-1.jpg" alt="" />
                    </div>
                    <hr className='htu-line' />
                    <h1>自分の希望に合った <br /> 語学学校・プランを探す</h1>
                </div>
                <div className='htu-card'>
                    <div>
                        <img src="https://i.ibb.co/xHPgfdY/how-to-use-icon-2.jpg" alt="" />
                    </div>
                    <hr className='htu-line' />
                    <h1>見積もりをとって <br /> 留学費用を確認する</h1>
                </div>
                <div className='htu-card'>
                    <div>
                        <img src="https://i.ibb.co/swk1ZS2/how-to-use-icon-3.jpg" alt="" />
                    </div>
                    <hr className='htu-line' />
                    <h1>空き状況を確認して <br /> お申し込みする</h1>
                </div>

            </div>
        </section>
    );
};

export default HowToUse;