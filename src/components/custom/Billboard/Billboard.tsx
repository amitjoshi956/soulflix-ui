import YTPlayer from 'components/base/YTPlayer';

import './Billboard.scss';

const Billboard = () => {
    return (
        <div className="billboard">
            <YTPlayer className="billboard__player" videoId="cgsmjYXs8m0" title="Purpose of Life" />
        </div>
    );
};

export default Billboard;
