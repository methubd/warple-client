import './PointSteps.css';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const PointSteps = () => {
    return (
        <section className='pointSteps-container'>
            <SectionTitle
            title='POINT'
            subTitle='こんなひとにおすすめ!'
            ></SectionTitle>
            <div className='pointSteps'>
                <div className='pointStep'>
                    <img src="https://i.ibb.co/ChmJmYR/check-Mark.png" alt="" />
                    <h1>とにかく安<span className='colored-point'>く申し込みたい方</span></h1>
                </div>
                <div className='pointStep'>
                    <img src="https://i.ibb.co/ChmJmYR/check-Mark.png" alt="" />
                    <h1><span className='colored-point'>希望の国</span>や<span className='colored-point'>プラン</span> が決まっている方</h1>
                </div>
                <div className='pointStep'>
                    <img src="https://i.ibb.co/ChmJmYR/check-Mark.png" alt="" />
                    <h1>現地スタッフと<span className='colored-point'>直接やりとりをしたい方</span> </h1>
                </div>
                <div className='pointStep'>
                    <img src="https://i.ibb.co/ChmJmYR/check-Mark.png" alt="" />
                    <h1>自分のペースで<span className='colored-point'>留学プランを探したい方</span> </h1>
                </div>
            </div>
        </section>
    );
};

export default PointSteps;