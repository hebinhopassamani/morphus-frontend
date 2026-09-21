// import type { MpxTheme } from '@core/util/types/MorphusTHeme.type';
// import { MORPHUS_COLORS } from './MorphusColors.data';
// import { primary } from '@core/theme/MorphusTheme.type';

import type { MorphusColorGroupNames } from '@core/util/types/Colors.types';
import type { FlowbiteTheme } from 'flowbite-react/types';

// export const mpxColors = {
//     'mpx-amber': MORPHUS_COLORS['amber']['50'],
// };

// export const mpxTheme: MpxTheme = {
//     colors: {
//         primary: {
//             'sm': `bg-${MORPHUS_COLORS[primary]['50']}`,
//             'md': `bg-${MORPHUS_COLORS[primary]['100']}`,
//             'lg': `bg-${MORPHUS_COLORS[primary]['200']}`,
//             'xl': `bg-${MORPHUS_COLORS[primary]['300']}`,
//             '1x': `bg-${MORPHUS_COLORS[primary]['400']}`,
//             '2x': `bg-${MORPHUS_COLORS[primary]['500']}`,
//             '3x': `bg-${MORPHUS_COLORS[primary]['600']}`,
//             '4x': `bg-${MORPHUS_COLORS[primary]['700']}`,
//             '5x': `bg-${MORPHUS_COLORS[primary]['800']}`,
//             '6x': `bg-${MORPHUS_COLORS[primary]['900']}`,
//         },
//     },
// };

export interface MpxThemeProps extends Partial<FlowbiteTheme> {
    root: {
        base: MorphusColorGroupNames;
    };
}

// export const mpxTheme = createTheme<MpxThemeProps>();
