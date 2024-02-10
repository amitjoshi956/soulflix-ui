import { put, takeLatest } from 'redux-saga/effects';
import { Video } from 'core/base/types/videos';
import { LandingPageService } from 'core/api/landing-page/landing-page.service';
import {
    fetchLandingPageCategories,
    fetchLandingPageCategoriesFailure,
    fetchLandingPageCategoriesSuccess,
} from './landingPage.slice';

const fetchLandingPageCategoriesSaga = function* () {
    const videos: Video[] = yield LandingPageService.getLandingPageCategories();

    if (videos) {
        yield put(fetchLandingPageCategoriesSuccess(videos));
    } else {
        yield put(fetchLandingPageCategoriesFailure());
    }
};

export const fetchLandingPageCategoriesWatcher = function* () {
    yield takeLatest(fetchLandingPageCategories, fetchLandingPageCategoriesSaga);
};
