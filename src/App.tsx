import YTPlayer from 'components/base/YTPlayer';

import './App.scss';

function App() {
    return (
        <div className="app">
            <div className="nav-temp">
                <span>Soulflix</span>
            </div>
            <YTPlayer
                videoId={'abmsniEmfh0'}
                title={'Srila Prabhupada Interview - San Francisco'}
            />
        </div>
    );
}

export default App;
