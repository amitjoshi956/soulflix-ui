import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { isDevEnv } from 'common/utils/env';
import { Routes as ROUTES } from 'core/base/consts/routes';
import Loader from 'components/custom/Loader';
import AppLayout from 'layouts/AppLayout';

const TestRoutes = lazy(() => import('pages/Test/Test.routes'));
const NotFound = lazy(() => import('pages/NotFound'));
const Home = lazy(() => import('pages/Home'));

import './App.scss';

function App() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    {isDevEnv && (
                        <Route path={`${ROUTES.TEST}/${ROUTES.ANY}`} element={<TestRoutes />} />
                    )}
                    <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
                    <Route path={ROUTES.ANY} element={<Navigate to={ROUTES.NOT_FOUND} />} />
                </Routes>
            </Suspense>
            <AppLayout />
        </>
    );
}

export default App;
