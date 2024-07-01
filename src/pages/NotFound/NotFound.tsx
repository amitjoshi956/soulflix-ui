import { NavLink } from 'react-router-dom';
import { Routes } from 'core/base/consts/routes';

import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="not-found__message">The page you are looking for is not available</h1>
            <div className="not-found__helping-message">
                Would you rather check out these pages instead?
            </div>
            <div className="not-found__alt-pages">
                <NavLink className="not-found__alt-page-link" to={Routes.HOME}>
                    Home
                </NavLink>
                <NavLink className="not-found__alt-page-link" to={Routes.MOVIES}>
                    Movies
                </NavLink>
                <NavLink className="not-found__alt-page-link" to={Routes.SERIES}>
                    Series
                </NavLink>
                <NavLink className="not-found__alt-page-link" to={Routes.PODCASTS}>
                    Podcasts
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;
