import BookTripSection from "../../components/BookTripSection/BookTripSection";
import DestinationSection from "../../components/Destination/DestinationSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ServicesSection from "../../components/Service/ServiceSection";
import Subscribe from "../../components/Subscribe/Subscribe";
import Testimonials from "../../components/Testimonial/Testimonials";
import TravelDestination from "../../components/TravelDestination/TravelDestination";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <section className="page-section"><Header /></section>
            <section className="page-section"><TravelDestination /></section>
            <section className="page-section"><ServicesSection /></section>
            <section className="page-section"><DestinationSection /></section>
            <section className="page-section"><BookTripSection /></section>
            <section className="page-section"><Testimonials /></section>
            <section className="page-section"><Subscribe /></section>
            <section className="page-section"><Footer /></section>
        </div>
    );
}

export default Home;