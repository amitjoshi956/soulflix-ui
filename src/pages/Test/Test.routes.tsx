import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Test from './Test';

const TestYtPlayer = lazy(() => import('./YTPlayer'));
const Buttons = lazy(() => import('./Buttons'));
const AppHeader = lazy(() => import('./AppHeader'));

const TestRoutes = () => {
    return (
        <>
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
