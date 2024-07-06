import AppHeader from 'components/custom/AppHeader';
import Billboard from 'components/custom/Billboard';

import './AppLayout.scss';

const AppLayout = () => {
    return (
        <div className="app-layout">
            <AppHeader />
            <Billboard
                videoId="cgsmjYXs8m0"
                title="Purpose of Life"
                onPlay={() => {
                    // TODO: implement logic
                }}
                onShowMoreDetails={() => {
                    // TODO: implement logic
                }}
                onToggleVolume={() => {
                    // TODO: implement logic
                }}
            />
            <div style={{ height: '100vh' }}></div>
        </div>
    );
};

export default AppLayout;
