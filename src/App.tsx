import { NavLink, Route, Routes } from 'react-router-dom';
import Test from 'pages/Test';

import './App.scss';

function App() {
    const App = (
        <div className="app">
            <NavLink to="/test">Test Page</NavLink>
        </div>
    );

    return (
        <Routes>
            <Route path="/" element={App} />
            <Route path="/test" element={<Test />} />
        </Routes>
    );
}

export default App;
