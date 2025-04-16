import React, { JSX } from 'react';
import { FaMapMarkedAlt, FaCreditCard, FaCar, FaHeart, FaLocationArrow } from 'react-icons/fa';
import './BookTripSection.scss';
import { ProgressBar } from 'react-bootstrap';

interface BookingStep {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
    colorClass: string;
}

interface TripCard {
    id: number;
    image: string;
    title: string;
    date: string;
    author: string;
    peopleGoing: number;
}

interface StatusCard {
    id: number;
    image: string;
    status: string;
    title: string;
    progress: number;
}

const BookTripSection = () => {
    const bookingSteps: BookingStep[] = [
        {
            id: 1,
            icon: <>{FaMapMarkedAlt({ className: "text-dark" })}</>,
            title: "Choose Destination",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
            colorClass: "yellow"
        },
        {
            id: 2,
            icon: <>{FaCreditCard({ className: "text-dark" })}</>,
            title: "Make Payment",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
            colorClass: "orange"
        },
        {
            id: 3,
            icon: <>{FaCar({ className: "text-dark" })}</>,
            title: "Reach Airport on Selected Date",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
            colorClass: "teal"
        }
    ];

    const tripCard: TripCard = {
        id: 1,
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
        title: "Trip To Greece",
        date: "14-29 June",
        author: "Robbin joseph",
        peopleGoing: 24
    };

    const statusCard: StatusCard = {
        id: 1,
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
        status: "Ongoing",
        title: "Trip to Rome",
        progress: 40
    };

    return (
        <section className="book-trip">
            <div className="text-content">
                <p className="subheading">Easy and Fast</p>
                <h2>Book your next trip in 3 easy steps</h2>

                {bookingSteps.map((step) => (
                    <div className="step" key={step.id}>
                        <div className={`icon ${step.colorClass}`}>{step.icon}</div>
                        <div>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card-section">
                <div className="trip-card">
                    <img src={tripCard.image} alt={tripCard.title} />
                    <div className="info">
                        <h3>{tripCard.title}</h3>
                        <p>{tripCard.date} | by {tripCard.author}</p>
                        <div className="icons">
                            <>{FaMapMarkedAlt({ className: "icon" })}</>
                            <>{FaLocationArrow({ className: "icon" })}</>
                        </div>
                        <div className="footer">
                            <p className="people">{tripCard.peopleGoing} people going</p>
                            <>{FaHeart({ className: "like-icon" })}</>
                        </div>
                    </div>
                </div>

                <div className="status-card">
                    <img src={statusCard.image} alt={statusCard.title} />
                    <div className="status-content">
                        <p className="ongoing">{statusCard.status}</p>
                        <h5>{statusCard.title}</h5>
                        <p className="percent">{statusCard.progress}% completed</p>

                        <div className="progress-bar">
                            {/* <ProgressBar animated now={40} label={`${40}%`} /> */}
                            <div className="progress" style={{ width: `${statusCard.progress}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookTripSection;