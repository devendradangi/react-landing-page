import BookTripSection from "../../components/home/BookTrip/BookTripSection";
import DestinationSection from "../../components/home/Destination/DestinationSection";
import Footer from "../../components/home/Footer/Footer";
import Header from "../../components/home/Header/Header";
import ServicesSection from "../../components/home/Services/ServiceSection";
import Subscribe from "../../components/home/Subscribe/Subscribe";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import TravelDestination from "../../components/home/TravelDestination/TravelDestination";
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