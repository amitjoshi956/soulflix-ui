import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Routes as ROUTES } from 'core/base/consts/routes';
import AppHeader from 'components/custom/AppHeader';

const Home = lazy(() => import('pages/Home'));

import './AppLayout.scss';

const AppLayout = () => {
    return (
        <div className="app-layout">
            <AppHeader />
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
            </Routes>
        </div>
    );
};

export default AppLayout;
