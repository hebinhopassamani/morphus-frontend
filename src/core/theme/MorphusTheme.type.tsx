import { MORPHUS_COLORS } from '@core/theme/MorphusColors.data';

export type MpxColorNames = keyof typeof MORPHUS_COLORS;
export type MpxColorVariants = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

export const primary: MpxColorNames = 'cyan';
export const secondary: MpxColorNames = 'sky';
export const tertiary: MpxColorNames = 'purple';
export const surface: MpxColorNames = 'gray';
export const neutrau: MpxColorNames = 'neutral';
export const info: MpxColorNames = 'blue';
export const warn: MpxColorNames = 'orange';
export const success: MpxColorNames = 'green';
export const error: MpxColorNames = 'red';

export const Primary = {
    'sm': MORPHUS_COLORS[primary]['50'],
    'md': MORPHUS_COLORS[primary]['100'],
    'lg': MORPHUS_COLORS[primary]['200'],
    'xl': MORPHUS_COLORS[primary]['300'],
    '1x': MORPHUS_COLORS[primary]['400'],
    '2x': MORPHUS_COLORS[primary]['500'],
    '3x': MORPHUS_COLORS[primary]['600'],
    '4x': MORPHUS_COLORS[primary]['700'],
    '5x': MORPHUS_COLORS[primary]['800'],
    '6x': MORPHUS_COLORS[primary]['950'],
};
export const Secondary = {
    'sm': MORPHUS_COLORS[secondary]['50'],
    'md': MORPHUS_COLORS[secondary]['100'],
    'lg': MORPHUS_COLORS[secondary]['200'],
    'xl': MORPHUS_COLORS[secondary]['300'],
    '1x': MORPHUS_COLORS[secondary]['400'],
    '2x': MORPHUS_COLORS[secondary]['500'],
    '3x': MORPHUS_COLORS[secondary]['600'],
    '4x': MORPHUS_COLORS[secondary]['700'],
    '5x': MORPHUS_COLORS[secondary]['800'],
    '6x': MORPHUS_COLORS[secondary]['950'],
};
export const Tertiary = {
    'sm': MORPHUS_COLORS[tertiary]['50'],
    'md': MORPHUS_COLORS[tertiary]['100'],
    'lg': MORPHUS_COLORS[tertiary]['200'],
    'xl': MORPHUS_COLORS[tertiary]['300'],
    '1x': MORPHUS_COLORS[tertiary]['400'],
    '2x': MORPHUS_COLORS[tertiary]['500'],
    '3x': MORPHUS_COLORS[tertiary]['600'],
    '4x': MORPHUS_COLORS[tertiary]['700'],
    '5x': MORPHUS_COLORS[tertiary]['800'],
    '6x': MORPHUS_COLORS[tertiary]['950'],
};
export const Surface = {
    'sm': MORPHUS_COLORS[surface]['50'],
    'md': MORPHUS_COLORS[surface]['100'],
    'lg': MORPHUS_COLORS[surface]['200'],
    'xl': MORPHUS_COLORS[surface]['300'],
    '1x': MORPHUS_COLORS[surface]['400'],
    '2x': MORPHUS_COLORS[surface]['500'],
    '3x': MORPHUS_COLORS[surface]['600'],
    '4x': MORPHUS_COLORS[surface]['700'],
    '5x': MORPHUS_COLORS[surface]['800'],
    '6x': MORPHUS_COLORS[surface]['950'],
};
export const Neutrau = {
    'sm': MORPHUS_COLORS[neutrau]['50'],
    'md': MORPHUS_COLORS[neutrau]['100'],
    'lg': MORPHUS_COLORS[neutrau]['200'],
    'xl': MORPHUS_COLORS[neutrau]['300'],
    '1x': MORPHUS_COLORS[neutrau]['400'],
    '2x': MORPHUS_COLORS[neutrau]['500'],
    '3x': MORPHUS_COLORS[neutrau]['600'],
    '4x': MORPHUS_COLORS[neutrau]['700'],
    '5x': MORPHUS_COLORS[neutrau]['800'],
    '6x': MORPHUS_COLORS[neutrau]['950'],
};
export const Info = {
    'sm': MORPHUS_COLORS[info]['50'],
    'md': MORPHUS_COLORS[info]['100'],
    'lg': MORPHUS_COLORS[info]['200'],
    'xl': MORPHUS_COLORS[info]['300'],
    '1x': MORPHUS_COLORS[info]['400'],
    '2x': MORPHUS_COLORS[info]['500'],
    '3x': MORPHUS_COLORS[info]['600'],
    '4x': MORPHUS_COLORS[info]['700'],
    '5x': MORPHUS_COLORS[info]['800'],
    '6x': MORPHUS_COLORS[info]['950'],
};
export const Warn = {
    'sm': MORPHUS_COLORS[warn]['50'],
    'md': MORPHUS_COLORS[warn]['100'],
    'lg': MORPHUS_COLORS[warn]['200'],
    'xl': MORPHUS_COLORS[warn]['300'],
    '1x': MORPHUS_COLORS[warn]['400'],
    '2x': MORPHUS_COLORS[warn]['500'],
    '3x': MORPHUS_COLORS[warn]['600'],
    '4x': MORPHUS_COLORS[warn]['700'],
    '5x': MORPHUS_COLORS[warn]['800'],
    '6x': MORPHUS_COLORS[warn]['950'],
};
export const Success = {
    'sm': MORPHUS_COLORS[success]['50'],
    'md': MORPHUS_COLORS[success]['100'],
    'lg': MORPHUS_COLORS[success]['200'],
    'xl': MORPHUS_COLORS[success]['300'],
    '1x': MORPHUS_COLORS[success]['400'],
    '2x': MORPHUS_COLORS[success]['500'],
    '3x': MORPHUS_COLORS[success]['600'],
    '4x': MORPHUS_COLORS[success]['700'],
    '5x': MORPHUS_COLORS[success]['800'],
    '6x': MORPHUS_COLORS[success]['950'],
};
export const Error = {
    'sm': MORPHUS_COLORS[error]['50'],
    'md': MORPHUS_COLORS[error]['100'],
    'lg': MORPHUS_COLORS[error]['200'],
    'xl': MORPHUS_COLORS[error]['300'],
    '1x': MORPHUS_COLORS[error]['400'],
    '2x': MORPHUS_COLORS[error]['500'],
    '3x': MORPHUS_COLORS[error]['600'],
    '4x': MORPHUS_COLORS[error]['700'],
    '5x': MORPHUS_COLORS[error]['800'],
    '6x': MORPHUS_COLORS[error]['950'],
};
