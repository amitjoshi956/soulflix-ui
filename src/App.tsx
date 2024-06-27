import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

const TestRoutes = lazy(() => import('pages/Test/Test.routes'));

import './App.scss';

function App() {
    const App = (
        <div className="app">
            <NavLink to="/test">Test Page</NavLink>
        </div>
    );

    // TODO: replace temp loader with common loader component
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={App} />
                    <Route path="/test/*" element={<TestRoutes />} />
                </Routes>
                <div id="modal"></div>
            </Suspense>
        </>
    );
}

export default App;
