import type { MpxShape } from '@core/util/types/Shape.type';
import type { MpxThypography } from '@core/util/types/Thypography.type';

export type AllColors = SeverityColors | ThemeColors;
export type SeverityColors = 'warn' | 'info' | 'success' | 'error';
export type ThemeColors = 'primary' | 'secondary' | 'tertiary' | 'surface' | 'neutral' | 'alternative';
export type ThemeTypes = 'light' | 'dark';

export type MpxTheme = {
    colors?: MpxColors;
    thypography?: MpxThypography;
    shape?: MpxShape;
};

export type MpxColors = {
    primary?: MpxColorVariant;
    secondary?: MpxColorVariant;
    tertiary?: MpxColorVariant;
    surface?: MpxColorVariant;
    neutral?: MpxColorVariant;
    alternative?: MpxColorVariant;
    info?: MpxColorVariant;
    warning?: MpxColorVariant;
    success?: MpxColorVariant;
    error?: MpxColorVariant;
};

export type MpxColorVariant = {
    'sm'?: string;
    'md'?: string;
    'lg'?: string;
    'xl'?: string;
    '1x'?: string;
    '2x'?: string;
    '3x'?: string;
    '4x'?: string;
    '5x'?: string;
    '6x'?: string;
};
