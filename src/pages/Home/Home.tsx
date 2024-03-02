import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLandingPageCategories } from 'core/api/landing-page/categories/categories.slice';
import { AppState } from 'core/store';
import HeroCarousel from 'components/HeroCarousel';

import './Home.scss';

const dummyItems = [
    {
        id: '1',
        title: 'Title 1',
        description: 'Description 1',
        imageUrl: 'https://via.placeholder.com/1080x720',
    },
    {
        id: '2',
        title: 'Title 2',
        description: 'Description 2',
        imageUrl: 'https://via.placeholder.com/1080x720',
    },
    {
        id: '3',
        title: 'Title 3',
        description: 'Description 3',
        imageUrl: 'https://via.placeholder.com/1080x720',
    },
    {
        id: '4',
        title: 'Title 4',
        description: 'Description 4',
        imageUrl: 'https://via.placeholder.com/1080x720',
    },
];

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLandingPageCategories({}));
    }, []);

    const { categories = [] } = useSelector((state: AppState) => state.landingPage.categories.data);
    const videoItems = categories[0]?.items ?? [];

    return (
        <div className="home">
            <section className="home__hero">
                <HeroCarousel items={dummyItems} />
                <ul
                    style={{ marginTop: '1rem', backgroundColor: 'rebeccapurple', padding: '10px' }}
                >
                    {videoItems.map(({ id, title, description }) => (
                        <li
                            key={id}
                            style={{
                                backgroundColor: 'turquoise',
                                color: 'rebeccapurple',
                                marginBottom: '10px',
                            }}
                        >{`${title} - ${description}`}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Home;
