import './Point.css';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Point = () => {
    return (
        <section>
            <SectionTitle
            title='POINT'
            subTitle='warpleの3つのポイント'
            ></SectionTitle>
            <div className='point-container'>
                <div>
                    {/* Point - 1 */}
                    <div className='point'>
                        <div className='point-img-container'>
                            <img className='point-img' src="https://i.ibb.co/ZT3S7Tp/warple-point-1.png" alt="" />
                        </div>
                        <h1>どこよりも <br />安く留学できる</h1>
                        <hr className='wiw-line' />
                        <p>
                            warple は、お申し込みから渡航の準備まで留学に関わる <br />
                            すべてをWEB上で完結させることで、語学学校に直接申し <br />
                            込むよりも安い費用で留学することが可能です。
                        </p>
                    </div>
                    
                    {/* Point - 2 */}
                    <div className='point point-two-small-screen'>
                        <div className='point-img-container'>
                            <img className='point-img' src="https://i.ibb.co/PWdvpmr/warple-point-2.png" alt="" />
                        </div>
                        <h1>自分の理想プランを<br />見つけやすい</h1>
                        <hr className='wiw-line' />
                        <p>
                            語学学校と直接繋がることができるシステムになっており、 <br />
                            現地のリアルで正確な情報を知ることができるため、自分で <br />
                            自由に情報を見ながら留学プランを決めることができます。<br />
                            <span>※語学学校と1on1のチャットができるのは申し込み後です。</span>
                        </p>
                    </div> 

                    {/* Point - 3 */}
                    <div className='point'>
                        <div className='point-img-container'>
                            <img className='point-img' src="https://i.ibb.co/3Tb6nNL/warple-point-3.png" alt="" />
                        </div>
                        <h1>いつでもどこでも<br />申し込める</h1>
                        <hr className='wiw-line' />
                        <p>
                            語学学校/宿泊先の空き状況やキャンペーン情報をリアル <br />
                            タイムで知ることができるため、warpleならいつでもどこでも <br />
                            申し込んだり留学準備を進めることができます。<br />
                            <span></span>
                        </p>
                    </div>
                </div>

                {/* Point - 2 for Big Screen */}
                    <div className='point point-two-big-screen'>
                        <div className='point-img-container'>
                            <img className='point-img' src="https://i.ibb.co/PWdvpmr/warple-point-2.png" alt="" />
                        </div>
                        <h1>自分の理想プランを<br />見つけやすい</h1>
                        <hr className='wiw-line' />
                        <p>
                            語学学校と直接繋がることができるシステムになっており、 <br />
                            現地のリアルで正確な情報を知ることができるため、自分で <br />
                            自由に情報を見ながら留学プランを決めることができます。<br />
                            <span>※語学学校と1on1のチャットができるのは申し込み後です。</span>
                        </p>
                    </div>                
            </div>
        </section>
    );
};

export default Point;