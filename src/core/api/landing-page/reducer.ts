import { combineReducers } from '@reduxjs/toolkit';
import categoriesSlice from './categories/categories.slice';

const landingPageSlice = combineReducers({
    categories: categoriesSlice,
});

export type LandingPageState = ReturnType<typeof landingPageSlice>;

export default landingPageSlice;
