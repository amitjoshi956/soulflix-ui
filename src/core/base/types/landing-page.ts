import { GenericState } from './store';
import { Category } from './category';

export type LandingPageCategoriesData = {
    categories: Category[];
    totalCount: number;
};

export type LandingPageCategoryState = GenericState<LandingPageCategoriesData>;
