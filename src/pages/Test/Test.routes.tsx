import { lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Test from './Test';

const TestYtPlayer = lazy(() => import('./YTPlayer'));
const Buttons = lazy(() => import('./Buttons'));
const AppHeader = lazy(() => import('components/custom/Navigation/AppHeader'));

const TestRoutes = () => {
    return (
        <>
            <Link to={'/'}>{'<- Home'}</Link>
            <Routes>
                <Route index element={<Test />} />
                <Route path="yt-player" element={<TestYtPlayer />} />
                <Route path="buttons" element={<Buttons />} />
                <Route path="app-header" element={<AppHeader />} />
            </Routes>
        </>
    );
};

export default TestRoutes;
