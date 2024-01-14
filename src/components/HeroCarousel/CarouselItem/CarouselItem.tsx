import { FC } from 'react'

import './CarouselItem.scss'

type CarouselItemProps = {
    title: string
    description: string
    imageUrl: string
}
const CarouselItem: FC<CarouselItemProps> = ({
    title,
    description,
    imageUrl,
}) => {
    return (
        <li className="carousel-item">
            <img className="carousel-item__image" src={imageUrl} alt={title} />
            <h3 className="carousel-item__title">{title}</h3>
            <p className="carousel-item__description">{description}</p>
        </li>
    )
}

export default CarouselItem
