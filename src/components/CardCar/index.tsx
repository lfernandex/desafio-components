import carImgae from '../../assets/image/car-card 1.svg';
import './stryles.css';

export default function CardCar() {

    return (

        <>
            <div className="car-card">
                <div className="car-image">
                    <img src={carImgae} alt="Audi TT" />
                </div>
                <div className="car-details">
                    <p>Lorem ipsum dolor</p>
                </div>
            </div>
        </>
    );

}