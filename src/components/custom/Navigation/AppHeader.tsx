import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavigationConfig } from 'core/base/consts/appHeader';

import './AppHeader.scss';

const AppHeader = () => {
    const { t } = useTranslation(['common']);

    return (
        <header className="app-header">
            <div className="app-header__title">{t('soulflix')}</div>
            <nav className="app-header__navigation">
                <ul className="app-header__nav-links">
                    {NavigationConfig.map(({ name, link }) => (
                        <li key={name}>
                            <NavLink
                                className={({ isActive }) =>
                                    !isActive
                                        ? 'app-header__link'
                                        : 'app-header__link app-header__link--active'
                                }
                                to={link}
                                aria-label={name}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="app-header__nav-secondary">
                    {/* TODO: To be implemented in iteration 2 */}
                </div>
            </nav>
        </header>
    );
};

export default AppHeader;
