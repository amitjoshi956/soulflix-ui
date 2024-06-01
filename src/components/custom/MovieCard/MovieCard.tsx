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
                <div className="movie-card__controls"></div>
                <div className="movie-card__tags"></div>
            </div>
        </div>
    );
};

export default MovieCard;
