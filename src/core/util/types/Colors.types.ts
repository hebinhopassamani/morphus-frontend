export type AllColors = SeverityColors | ThemeColors;
export type SeverityColors = 'warn' | 'info' | 'success' | 'error' | 'help';
export type ThemeColors = 'primary' | 'secondary' | 'tertiary' | 'surface' | 'neutral' | 'neutral-variant';
export type ThemeTypes = 'light' | 'dark';

export interface MorphusColors {
    'mps-primary': string;
    'mps-primary-over': string;
    'mps-primary-container': string;
    'mps-primary-container-over': string;
    'mps-secondary': string;
    'mps-secondary-over': string;
    'mps-secondary-container': string;
    'mps-secondary-container-over': string;
    'mps-tertiary': string;
    'mps-tertiary-over': string;
    'mps-tertiary-container': string;
    'mps-tertiary-container-over': string;
    'mps-surface': string;
    'mps-surface-over': string;
    'mps-surface-container': string;
    'mps-surface-container-over': string;
    'mps-info': string;
    'mps-info-over': string;
    'mps-info-container': string;
    'mps-info-container-over': string;
    'mps-warning': string;
    'mps-warning-over': string;
    'mps-warning-container': string;
    'mps-warning-container-over': string;
    'mps-success': string;
    'mps-success-over': string;
    'mps-success-container': string;
    'mps-success-container-over': string;
    'mps-error': string;
    'mps-error-over': string;
    'mps-error-container': string;
    'mps-error-container-over': string;
    'mps-neutral': string;
    'mps-neutral-over': string;
    'mps-neutral-container': string;
    'mps-neutral-container-over': string;
    'mps-neutralVariant': string;
    'mps-neutralVariant-over': string;
    'mps-neutralVariant-container': string;
    'mps-neutralVariant-container-over': string;
}

export const morphusColors: MorphusColors = {
    'mps-primary': 'mps-primary',
    'mps-primary-over': 'mps-primary-over',
    'mps-primary-container': 'mps-primary-container',
    'mps-primary-container-over': 'mps-primary-container-over',
    'mps-secondary': 'mps-secondary',
    'mps-secondary-over': 'mps-secondary-over',
    'mps-secondary-container': 'mps-secondary-container',
    'mps-secondary-container-over': 'mps-secondary-container-over',
    'mps-tertiary': 'mps-tertiary',
    'mps-tertiary-over': 'mps-tertiary-over',
    'mps-tertiary-container': 'mps-tertiary-container',
    'mps-tertiary-container-over': 'mps-tertiary-container-over',
    'mps-surface': 'mps-surface',
    'mps-surface-over': 'mps-surface-over',
    'mps-surface-container': 'mps-surface-container',
    'mps-surface-container-over': 'mps-surface-container-over',
    'mps-info': 'mps-info',
    'mps-info-over': 'mps-info-over',
    'mps-info-container': 'mps-info-container',
    'mps-info-container-over': 'mps-info-container-over',
    'mps-warning': 'mps-warning',
    'mps-warning-over': 'mps-warning-over',
    'mps-warning-container': 'mps-warning-container',
    'mps-warning-container-over': 'mps-warning-container-over',
    'mps-success': 'mps-success',
    'mps-success-over': 'mps-success-over',
    'mps-success-container': 'mps-success-container',
    'mps-success-container-over': 'mps-success-container-over',
    'mps-error': 'mps-error',
    'mps-error-over': 'mps-error-over',
    'mps-error-container': 'mps-error-container',
    'mps-error-container-over': 'mps-error-container-over',
    'mps-neutral': 'mps-neutral',
    'mps-neutral-over': 'mps-neutral-over',
    'mps-neutral-container': 'mps-neutral-container',
    'mps-neutral-container-over': 'mps-neutral-container-over',
    'mps-neutralVariant': 'mps-neutrau-cariant',
    'mps-neutralVariant-over': 'mps-neutrau-cariant-over',
    'mps-neutralVariant-container': 'mps-neutrau-cariant-container',
    'mps-neutralVariant-container-over': 'mps-neutrau-cariant-container-over',
} as const;

export type MorphusTheme = {
    colors: MorphusColor;
    thypography: MorphusThypography;
    shape: MorphusShape;
};

export type MorphusColor = {
    'primary': MorphusColorsGroup;
    'secondary': MorphusColorsGroup;
    'tertiary': MorphusColorsGroup;
    'surface': MorphusColorsGroup;
    'info': MorphusColorsGroup;
    'warning': MorphusColorsGroup;
    'success': MorphusColorsGroup;
    'error': MorphusColorsGroup;
    'neutral': MorphusColorsGroup;
    'alternative': MorphusColorsGroup;
};

export type MorphusColorsGroup = {
    'container-low': string;
    'container': string;
    'container-height': string;
    'text-container-low': string;
    'text-container': string;
    'text-container-height': string;
    'container-highest': string;
    'text-container-highest': string;
    'border-color': string;
};

export type MorphusThypography = {
    'font-family': string;
    'font-small': string;
    'font-medium': string;
    'font-large': string;
    'font-light-': string;
    'font-regular': string;
    'font-semibold': string;
    'font-bold': string;
    'label-small': string;
    'label-medium': string;
    'label-large': string;
    'title-small': string;
    'title-medium': string;
    'title-large': string;
    'headline-small': string;
    'headline-medium': string;
    'headline-large': string;
    'display-small': string;
    'display-medium': string;
    'display-large': string;
};

export type MorphusShape = {
    'radius-none': string;
    'radius-extra-small': string;
    'radius-small': string;
    'radius-medium': string;
    'radius-large': string;
    'radius-extra-large': string;
    'radius-none-top': string;
    'radius-extra-small-top': string;
    'radius-small-top': string;
    'radius-medium-top': string;
    'radius-large-top': string;
    'radius-extra-large-top': string;
    'radius-none-botton': string;
    'radius-extra-small-botton': string;
    'radius-small-botton': string;
    'radius-medium-botton': string;
    'radius-large-botton': string;
    'radius-extra-large-botton': string;
};

export const morphusTheme: MorphusTheme = {
    colors: {
        primary: {
            'container-low': 'bg-mps-primary-100',
            'container': '',
            'container-height': '',
            'text-container-low': '',
            'text-container': '',
            'text-container-height': '',
            'container-highest': '',
            'text-container-highest': '',
            'border-color': '',
        },
        secondary: {
            'container-low': '',
            'container': '',
            'container-height': '',
            'text-container-low': '',
            'text-container': '',
            'text-container-height': '',
            'container-highest': '',
            'text-container-highest': '',
            'border-color': '',
        },
        tertiary: {
            'container-low': '',
            'container': '',
            'container-height': '',
            'text-container-low': '',
            'text-container': '',
            'text-container-height': '',
            'container-highest': '',
            'text-container-highest': '',
            'border-color': '',
        },
        surface: {
            'container-low': '',
            'container': '',
            'container-height': '',
            'text-container-low': '',
            'text-container': '',
            'text-container-height': '',
            'container-highest': '',
            'text-container-highest': '',
            'border-color': '',
        },
        info: {
            'container-low': '',
            'container': '',
            'container-height': '',
            'text-container-low': '',
            'text-container': '',
            'text-container-height': '',
            'container-highest': '',
            'text-container-highest': '',
            'border-color': '',
        },
        warning: {
            'container-low': '',
            'container': '',
            'container-height': '',
            'text-container-low': '',
            'text-container': '',
            'text-container-height': '',
            'container-highest': '',
            'text-container-highest': '',
            'border-color': '',
        },
        success: {
            'container-low': '',
            'container': '',
            'container-height': '',
            'text-container-low': '',
            'text-container': '',
            'text-container-height': '',
            'container-highest': '',
            'text-container-highest': '',
            'border-color': '',
        },
        error: {
            'container-low': '',
            'container': '',
            'container-height': '',
            'text-container-low': '',
            'text-container': '',
            'text-container-height': '',
            'container-highest': '',
            'text-container-highest': '',
            'border-color': '',
        },
        neutral: {
            'container-low': '',
            'container': '',
            'container-height': '',
            'text-container-low': '',
            'text-container': '',
            'text-container-height': '',
            'container-highest': '',
            'text-container-highest': '',
            'border-color': '',
        },
        alternative: {
            'container-low': '',
            'container': '',
            'container-height': '',
            'text-container-low': '',
            'text-container': '',
            'text-container-height': '',
            'container-highest': '',
            'text-container-highest': '',
            'border-color': '',
        },
    },
    thypography: {
        'font-family': '',
        'font-small': '',
        'font-medium': '',
        'font-large': '',
        'font-light-': '',
        'font-regular': '',
        'font-semibold': '',
        'font-bold': '',
        'label-small': '',
        'label-medium': '',
        'label-large': '',
        'title-small': '',
        'title-medium': '',
        'title-large': '',
        'headline-small': '',
        'headline-medium': '',
        'headline-large': '',
        'display-small': '',
        'display-medium': '',
        'display-large': '',
    },
    shape: {
        'radius-none': '',
        'radius-extra-small': '',
        'radius-small': '',
        'radius-medium': '',
        'radius-large': '',
        'radius-extra-large': '',
        'radius-none-top': '',
        'radius-extra-small-top': '',
        'radius-small-top': '',
        'radius-medium-top': '',
        'radius-large-top': '',
        'radius-extra-large-top': '',
        'radius-none-botton': '',
        'radius-extra-small-botton': '',
        'radius-small-botton': '',
        'radius-medium-botton': '',
        'radius-large-botton': '',
        'radius-extra-large-botton': '',
    },
};
