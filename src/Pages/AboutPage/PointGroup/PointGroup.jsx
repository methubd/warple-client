import './PointGroup.css';
import PointSteps from './PointSteps/PointSteps';
import Reason from './Reason/Reason';

const PointGroup = () => {
    return (
        <section className="point-group-container">
            <div className='point-middle'>
                <PointSteps/>
                <Reason/>
            </div>
        </section>
    );
};

export default PointGroup;