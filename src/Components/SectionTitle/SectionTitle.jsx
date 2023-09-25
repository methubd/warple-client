import './SectionTitle.css'

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='section-title-container'>
            <h1 className='section-main-title'>{title}</h1>
            <p className='section-sub-title'>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;