import { combineReducers } from 'redux';
import landingPageSlice from 'core/api/landing-page/landingPage.slice';

const rootReducer = combineReducers({
    landingPage: landingPageSlice,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
