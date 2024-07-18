import { lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Test from './Test';

const NotFound = lazy(() => import('pages/NotFound'));
const TestYtPlayer = lazy(() => import('./YTPlayer'));
const Buttons = lazy(() => import('./Buttons'));
const AppHeader = lazy(() => import('./AppHeader'));
const TSlider = lazy(() => import('./TSlider'));

const TestRoutes = () => {
    return (
        <>
            <NavLink
                to="/test"
                style={{
                    textDecoration: 'none',
                    fontSize: '16px',
                    color: 'lightgray',
                    margin: '20px',
                }}
            >
                {'< Go back'}
            </NavLink>
            <Routes>
                <Route index element={<Test />} />
                <Route path="yt-player" element={<TestYtPlayer />} />
                <Route path="buttons" element={<Buttons />} />
                <Route path="app-header" element={<AppHeader />} />
                <Route path="slider" element={<TSlider />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default TestRoutes;
