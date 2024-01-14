import { useTranslation } from "react-i18next";

import "./AppHeader.scss";

const AppHeader = () => {
  const { t } = useTranslation("common");
  return (
    <nav className="app-header">
      <h1 className="app-header__title">{t("soulflix")}</h1>
    </nav>
  );
};

export default AppHeader;
