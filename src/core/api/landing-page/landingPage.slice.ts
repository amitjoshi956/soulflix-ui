import { createSlice } from '@reduxjs/toolkit';
import { initialLandingPageState } from './landingPage.state';
import { ApiStatus } from 'core/base/enums';

export const landingPageSlice = createSlice({
    name: 'landingPage',
    initialState: initialLandingPageState,
    reducers: {
        fetchLandingPageCategories(state) {
            state.status = ApiStatus.LOADING;
        },
        fetchLandingPageCategoriesSuccess(state, { payload }) {
            state.data = payload;
            state.status = ApiStatus.SUCCESS;
        },
        fetchLandingPageCategoriesFailure(state) {
            state.status = ApiStatus.ERROR;
        },
    },
});

export const {
    fetchLandingPageCategories,
    fetchLandingPageCategoriesSuccess,
    fetchLandingPageCategoriesFailure,
} = landingPageSlice.actions;

export default landingPageSlice.reducer;
