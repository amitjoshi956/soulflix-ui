import { put, takeLatest } from 'redux-saga/effects';
import { LandingPageService } from 'core/api/landing-page/landing-page.service';
import {
    fetchLandingPageCategories,
    fetchLandingPageCategoriesFailure,
    fetchLandingPageCategoriesSuccess,
} from './categories.slice';
import { GenericApiResponse } from 'core/base/types';
import { Video } from 'core/base/types/videos';

const fetchLandingPageCategoriesSaga = function* () {
    const { data: videos, hasError }: GenericApiResponse<Video[]> =
        yield LandingPageService.getLandingPageCategories();

    if (videos) {
        yield put(
            fetchLandingPageCategoriesSuccess({
                // TODO: Make this dynamic
                categories: [
                    {
                        id: 'AIPxtMTTX3YFMOCcenf8',
                        title: 'Bhagavad Gita As It Is',
                        items: videos,
                        showOnLandingPage: true,
                    },
                ],
                totalCount: videos.length,
            })
        );
    } else if (hasError) {
        yield put(fetchLandingPageCategoriesFailure());
    }
};

export const fetchLandingPageCategoriesWatcher = function* () {
    yield takeLatest(fetchLandingPageCategories, fetchLandingPageCategoriesSaga);
};
