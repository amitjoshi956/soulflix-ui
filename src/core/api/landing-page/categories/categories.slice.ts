import { createSlice } from '@reduxjs/toolkit';
import { GenericAction } from 'core/base/types/store';
import { ApiStatus } from 'core/base/enums';
import { initialCategoriesState } from './categories.state';
import { LandingPageCategoriesData } from 'core/base/types/landing-page';

export const categoriesSlice = createSlice({
    name: 'landingPage',
    initialState: initialCategoriesState,
    reducers: {
        fetchLandingPageCategories(state, { params }: GenericAction) {
            state.status = ApiStatus.LOADING;
            state.params = params;
        },
        fetchLandingPageCategoriesSuccess(
            state,
            { payload }: GenericAction<LandingPageCategoriesData>
        ) {
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
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
