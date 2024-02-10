import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLandingPageCategories } from 'core/api/landing-page/landingPage.slice';
import HeroCarousel from 'components/HeroCarousel';

import './Home.scss';
import { AppState } from 'core/store/rootReducer';

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
        dispatch(fetchLandingPageCategories());
    }, []);

    const { categories } = useSelector((state: AppState) => state.landingPage.data);

    console.log('###Categories', categories);

    return (
        <div className="home">
            <section className="home__hero">
                <HeroCarousel items={dummyItems} />
            </section>
        </div>
    );
};

export default Home;
