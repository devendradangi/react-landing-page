import React, { useState } from 'react';
import './Testimonials.scss';
import { Button } from 'react-bootstrap';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        quote: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
        name: 'Mike Taylor',
        location: 'Lahore, Pakistan',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: 2,
        quote: '“Incredible experience and amazing service. Loved every moment of it.”',
        name: 'Chris Thomas',
        location: 'CEO of Red Button',
        image: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
        id: 3,
        quote: '“Professional team and beautiful atmosphere. Highly recommended!”',
        name: 'Sophia Lee',
        location: 'Singapore',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
];

const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleUp = () => {
        if (activeIndex > 0) setActiveIndex(prev => prev - 1);
    };

    const handleDown = () => {
        if (activeIndex < testimonials.length - 1) setActiveIndex(prev => prev + 1);
    };

    const current = testimonials[activeIndex];
    const next = testimonials[activeIndex + 1];

    return (
        <div className="testimonial-container">
            <div className="left-content">
                <div className="muted-label">TESTIMONIALS</div>
                <h2>What people say about Us.</h2>
                <div className="pagination">
                    {testimonials.map((_, index) => (
                        <span key={index} className={index === activeIndex ? 'active' : ''}></span>
                    ))}
                </div>
            </div>

            <div className="right-card">
                <div className="testimonial-wrapper">
                    <div className="testimonial-card">
                        <img src={current.image} alt={current.name} className="avatar" />
                        <div className="quote">{current.quote}</div>
                        <h5>{current.name}</h5>
                        <div className="location">{current.location}</div>
                    </div>

                    {next && (
                        <div className="testimonial-card shadow-card">
                            <h5>{next.name}</h5>
                            <div className="location">{next.location}</div>
                        </div>
                    )}
                </div>

                <div className="navigation-buttons">
                    <Button variant="light" onClick={handleUp} disabled={activeIndex === 0}>
                        <>{FaChevronUp({})}</>
                    </Button>
                    <Button variant="light" onClick={handleDown} disabled={activeIndex === testimonials.length - 1}>
                        <>{FaChevronDown({})}</>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;