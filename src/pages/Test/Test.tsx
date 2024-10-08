import { Link } from 'react-router-dom';

import './Test.scss';

const TestPages: { [key: string]: string } = {
    'yt-player': 'YT-Player',
    buttons: 'Buttons',
    'app-header': 'App Header',
    slider: 'Slider',
};

const Test = () => {
    return (
        <div className="test-page">
            <div className="test-page__temp-nav">
                <a href="/">Soulflix</a>
            </div>
            <ul className="test-page__links">
                {Object.keys(TestPages).map((route) => (
                    <li key={route}>
                        <Link className="test-page__link" to={`${route}`}>
                            {TestPages[route]}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Test;
