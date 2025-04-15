import BookTripSection from "../../components/BookTripSection/BookTripSection";
import DestinationSection from "../../components/Destination/DestinationSection";
import Header from "../../components/Header/Header";
import ServicesSection from "../../components/Service/ServiceSection";
import Testimonials from "../../components/Testimonial/Testimonials";
import TravelDestination from "../../components/TravelDestination/TravelDestination";
import "./Home.scss";

const Home = () => {
    return (
        <div>
            <Header />
            <TravelDestination />
            <ServicesSection />
            <DestinationSection />
            <BookTripSection />
            <Testimonials />
        </div>
    );
}

export default Home;