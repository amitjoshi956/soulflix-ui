import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavigationConfig } from 'core/base/consts/appHeader';
import { isDevEnv } from 'common/utils/env';
import { Routes } from 'core/base/consts/routes';
import { AtomIcon } from 'assets/icons';
import Button from 'components/base/Button';

import './AppHeader.scss';

const AppHeader = () => {
    const { t } = useTranslation(['common']);

    return (
        <header className="app-header">
            <div className="app-header__title-container">
                <NavLink className="app-header__title" to={Routes.HOME}>
                    {t('soulflix')}
                </NavLink>
            </div>
            <nav className="app-header__navigation">
                <ul className="app-header__navigation-primary">
                    {NavigationConfig.filter(({ name }) => !(!isDevEnv && name === 'Test')).map(
                        ({ name, link }) => (
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
                        )
                    )}
                </ul>
                <div className="app-header__navigation-secondary">
                    <Button
                        className="app-header__my-account"
                        iconClassName="app-header__my-account-icon"
                        variant="default"
                        Icon={AtomIcon}
                        label={t('appHeader.myAccount')}
                    />
                </div>
            </nav>
        </header>
    );
};

export default AppHeader;
