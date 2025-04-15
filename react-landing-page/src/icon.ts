import { IconBaseProps } from 'react-icons';

import { FaCar, FaCreditCard, FaMapMarkedAlt } from 'react-icons/fa';
type IconType = (props: IconBaseProps) => React.ReactNode

export const FaCarRef = FaCar as IconType
export const FaCreditCardrRef = FaCreditCard as IconType
export const FaMapMarkedAltRef = FaMapMarkedAlt as IconType