import { ApiStatus } from 'core/base/enums';
import { LandingPageCategoryState } from 'core/base/types/landing-page';

export const initialCategoriesState: LandingPageCategoryState = {
    data: {
        categories: [],
        totalCount: 0,
    },
    status: ApiStatus.DEFAULT,
};
