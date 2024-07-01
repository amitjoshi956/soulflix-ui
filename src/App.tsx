import { Suspense, lazy } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { isDevEnv } from 'common/utils/env';
import { Routes as ROUTES } from 'core/base/consts/routes';
import Loader from 'components/custom/Loader';

const TestRoutes = lazy(() => import('pages/Test/Test.routes'));
const NotFound = lazy(() => import('pages/NotFound'));

import './App.scss';

function App() {
    const App = (
        <div className="app">
            <NavLink to="/test">Test Page</NavLink>
        </div>
    );

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path={ROUTES.HOME} element={App} />
                    {isDevEnv && <Route path={ROUTES.TEST} element={<TestRoutes />} />}
                    <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
                    <Route path={ROUTES.ANY} element={<Navigate to={ROUTES.NOT_FOUND} />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
