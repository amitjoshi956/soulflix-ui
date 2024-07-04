import AppHeader from 'components/custom/AppHeader';
import Billboard from 'components/custom/Billboard';

import './AppLayout.scss';

const AppLayout = () => {
    return (
        <div className="app-layout">
            <AppHeader />
            <Billboard />
            <div style={{ height: '100vh' }}></div>
        </div>
    );
};

export default AppLayout;
