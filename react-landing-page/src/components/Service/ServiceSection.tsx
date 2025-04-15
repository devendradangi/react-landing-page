import React from 'react';
import './ServiceSection.scss';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    isActive?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, isActive = false }) => {
    return (
        <div className={`service-card ${isActive ? 'service-card--active' : ''}`}>
            <img src={icon} alt={`${title} Icon`} className="service-icon" />
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: "weather.png",
            title: "Calculated Weather",
            description: "Built Wicket longer admire do barton vanity itself do in it.",
            active: false
        },
        {
            icon: "travel-icon-png-4962.png",
            title: "Best Flights",
            description: "Engrossed listening. Park gate sell they west hard for the.",
            active: true
        },
        {
            icon: "microphone.png",
            title: "Local Events",
            description: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
            active: false
        },
        {
            icon: "customization-icon.png",
            title: "Customization",
            description: "We deliver outsourced aviation services for military customers.",
            active: false
        }
    ];

    return (
        <section className="services-section">
            <div className="container">
                <p className="services-section__subtitle">CATEGORY</p>
                <h2 className="services-section__title">We Offer Best Services</h2>

                <div className="services-section__grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            isActive={service.active}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;