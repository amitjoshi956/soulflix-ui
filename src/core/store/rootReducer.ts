import { combineReducers } from 'redux';
import landingPageSlice from 'core/api/landing-page/reducer';

const rootReducer = combineReducers({
    landingPage: landingPageSlice,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
