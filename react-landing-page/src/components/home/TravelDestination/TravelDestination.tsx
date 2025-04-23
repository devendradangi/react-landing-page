import { FaPlay } from 'react-icons/fa';
import './TravelDestination.scss';

const TravelDestination = () => {
    return (
        <section className="travel-destination">
            <div className="container">
                <p className="subheading">BEST DESTINATIONS AROUND THE WORLD</p>

                <div className="content-wrapper">
                    <div className="text-content">
                        <h1>
                            Travel, enjoy<br />
                            and live a new<br />
                            and full life
                        </h1>

                        <p className="description">
                            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                        </p>

                        <div className="cta-buttons">
                            <button className="primary-button">Find out more</button>
                            <button className="demo-button">
                                <span className="play-icon"><>{FaPlay({})}</></span>
                                Play Demo
                            </button>
                        </div>
                    </div>

                    <div className="image-content">
                        <img
                            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21"
                            alt="Travel illustration"
                            className="main-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelDestination;