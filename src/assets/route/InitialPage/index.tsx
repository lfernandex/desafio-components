import CarAvaliation from '../../../components/CarAvaliation';
import CardCar from '../../../components/CardCar';
import FooterPage from '../../../components/FooterPage';
import HeaderCar from '../../../components/HeaderCar';
import './styles.css';

export default function InitialPage() {

    return (

        <>
            <HeaderCar />

            <body>
                <section className="card-details">
                    <div className="card-car">
                        <CardCar />
                        <CardCar />
                    </div>

                </section>
                <section className="cards-avaliations">
                    <div className="card-validation">
                        <div className="avaliation-title">
                            <h1>O que estão dizendo</h1>
                        </div>
                        <CarAvaliation />
                        <CarAvaliation />
                        <CarAvaliation />
                        <CarAvaliation />
                        <CarAvaliation />
                        <CarAvaliation />
                    </div>

                </section>

                <footer className="footer-page">
                    <div className="rodape">
                    <FooterPage />
                    </div>
                    
                </footer>
            </body>
        </>

    );
}