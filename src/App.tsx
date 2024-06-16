import { NavLink, Route, Routes } from 'react-router-dom';
import TestRoutes from 'pages/Test/Test.routes';

import './App.scss';

function App() {
    const App = (
        <div className="app">
            <NavLink to="/test">Test Page</NavLink>
        </div>
    );

    return (
        <>
            <Routes>
                <Route path="/" element={App} />
                <Route path="/test/*" element={<TestRoutes />} />
            </Routes>
            <div id="modal"></div>
        </>
    );
}

export default App;
