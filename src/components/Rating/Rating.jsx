import './index.css'
import iconImg from '../../assets/rating.png'

function Rating({ rate, icon }) {
    return (
        <div className="rating_container">
            <div className="flex_cont">
                <img src={icon} alt="1" />
                <p>{rate}/5</p>
            </div>
            <div>
                <img src={iconImg} alt="" />    
            </div>
        </div>
    );
}

export default Rating;