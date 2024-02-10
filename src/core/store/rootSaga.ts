import { all } from 'redux-saga/effects';
import { fetchLandingPageCategoriesWatcher } from 'core/api/landing-page/landingPage.saga';

export default function* rootSaga() {
    yield all([fetchLandingPageCategoriesWatcher()]);
}
