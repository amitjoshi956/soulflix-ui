import { LandingPageState } from './reducer';
import { initialCategoriesState } from './categories/categories.state';

export const initialLandingPageState: LandingPageState = {
    categories: initialCategoriesState,
};
