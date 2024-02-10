import { ApiStatus } from 'core/base/enums';
import { LandingPageState } from 'core/base/types/landing-page';

export const initialLandingPageState: LandingPageState = {
    data: {
        categories: [],
        totalCount: 0,
    },
    status: ApiStatus.DEFAULT,
};
