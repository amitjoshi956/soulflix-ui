import { Link, Route, Routes } from 'react-router-dom';
import Test from './Test';
import TestYtPlayer from './YTPlayer';
import Buttons from './Buttons';

const TestRoutes = () => {
    return (
        <>
            <Link to={'/'}>{'<- Home'}</Link>
            <Routes>
                <Route index element={<Test />} />
                <Route path="yt-player" element={<TestYtPlayer />} />
                <Route path="buttons" element={<Buttons />} />
            </Routes>
        </>
    );
};

export default TestRoutes;
