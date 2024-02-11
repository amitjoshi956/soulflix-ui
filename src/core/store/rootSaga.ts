import { all } from 'redux-saga/effects';
import { fetchLandingPageCategoriesWatcher } from 'core/api/landing-page/categories/categories.saga';

export default function* rootSaga() {
    yield all([fetchLandingPageCategoriesWatcher()]);
}
