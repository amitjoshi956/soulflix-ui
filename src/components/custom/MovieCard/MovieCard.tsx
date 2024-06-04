import Button from 'components/base/Button';
import { MdPlayArrow, MdAdd, MdKeyboardArrowDown } from 'react-icons/md';

import './MovieCard.scss';

const MovieCard = () => {
    return (
        <div className="movie-card">
            <div className="movie-card__preview">
                <img
                    className="movie-card__thumbnail"
                    src="https://www.mayapur.com/wp-content/uploads/2017/10/RNS-1024x576.jpg"
                    alt="movie-card"
                />
            </div>
            <div className="movie-card__meta">
                <p className="movie-card__title">Glories of Srila Gopal Bhatta Goswami</p>
                <div className="movie-card__controls">
                    <div className="movie-card__controls-left">
                        <Button
                            variant="round-filled"
                            size="small"
                            label="Watch now"
                            Icon={MdPlayArrow}
                        />
                        <Button
                            variant="round-outlined"
                            size="small"
                            label="Add to watch list"
                            Icon={MdAdd}
                        />
                    </div>
                    <div className="movie-card__controls-right">
                        <Button
                            variant="round-outlined"
                            size="small"
                            label="More details"
                            Icon={MdKeyboardArrowDown}
                        />
                    </div>
                </div>
                <div className="movie-card__tags"></div>
            </div>
        </div>
    );
};

export default MovieCard;
