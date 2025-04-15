import React from 'react';
import { Card } from 'react-bootstrap';
import { FaLocationArrow } from 'react-icons/fa';
import styles from './DestinationCard.module.scss';

interface Props {
    title: string;
    price: string;
    days: string;
    image: string;
}

const DestinationCard: React.FC<Props> = ({ title, price, days, image }) => {
    return (
        <Card className={styles.card}>
            <Card.Img variant="top" src={image} className={styles.cardImg} />
            <Card.Body className={styles.cardBody}>
                <div className={styles.cardTop}>
                    <h6>{title}</h6>
                    <span>{price}</span>
                </div>
                <div className={styles.cardBottom}>
                    <>{FaLocationArrow({ className: "me-2 text-dark" })}</>
                    <span>{days}</span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default DestinationCard;
