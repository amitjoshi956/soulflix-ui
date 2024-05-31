import { Link, Route, Routes } from 'react-router-dom';
import Test from './Test';
import TestYtPlayer from './YTPlayer';

const TestRoutes = () => {
    return (
        <>
            <Link to={'/'}>{'<- Home'}</Link>
            <Routes>
                <Route index element={<Test />} />
                <Route path="yt-player" element={<TestYtPlayer />} />
            </Routes>
        </>
    );
};

export default TestRoutes;
