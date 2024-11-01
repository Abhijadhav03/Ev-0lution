import video1 from '../../Assets/video1.mp4';
import './Background.css';
import image1 from '../../Assets/image1.png';
import image2 from '../../Assets/image2.png';
import image3 from '../../Assets/image3.png';

const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className='background' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        );
    }

    switch (heroCount) {
        case 0:
            return <img src={image1} className='background fade-in' alt='Background Image 1' />;
        case 1:
            return <img src={image2} className='background fade-in' alt='Background Image 2' />;
        case 2:
            return <img src={image3} className='background fade-in' alt='Background Image 3' />;
        default:
            return <div className='background'>Default Background</div>; 
    }
};

export default Background;
