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
            'container-low': 'bg-blue-100',
            'container': 'bg-blue-200',
            'container-height': 'bg-blue-400',
            'text-container-low': 'text-blue-900',
            'text-container': 'text-blue-900',
            'text-container-height': 'text-blue-900',
            'container-highest': 'bg-blue-600',
            'text-container-highest': 'text-blue-50',
            'border-color': 'bg-blue-400/30',
        },
        secondary: {
            'container-low': 'bg-sky-100',
            'container': 'bg-sky-200',
            'container-height': 'bg-sky-400',
            'text-container-low': 'text-sky-900',
            'text-container': 'text-sky-900',
            'text-container-height': 'text-sky-900',
            'container-highest': 'bg-sky-600',
            'text-container-highest': 'text-sky-50',
            'border-color': 'bg-sky-400/30',
        },
        tertiary: {
            'container-low': 'bg-violet-100',
            'container': 'bg-violet-200',
            'container-height': 'bg-violet-400',
            'text-container-low': 'text-violet-900',
            'text-container': 'text-violet-900',
            'text-container-height': 'text-violet-900',
            'container-highest': 'bg-violet-600',
            'text-container-highest': 'text-violet-50',
            'border-color': 'bg-violet-400/30',
        },
        surface: {
            'container-low': 'bg-slate-100',
            'container': 'bg-slate-200',
            'container-height': 'bg-slate-400',
            'text-container-low': 'text-slate-900',
            'text-container': 'text-slate-900',
            'text-container-height': 'text-slate-900',
            'container-highest': 'bg-slate-600',
            'text-container-highest': 'text-slate-50',
            'border-color': 'bg-slate-400/30',
        },
        info: {
            'container-low': 'bg-infigo-100',
            'container': 'bg-infigo-200',
            'container-height': 'bg-infigo-400',
            'text-container-low': 'text-infigo-900',
            'text-container': 'text-infigo-900',
            'text-container-height': 'text-infigo-900',
            'container-highest': 'bg-infigo-600',
            'text-container-highest': 'text-infigo-50',
            'border-color': 'bg-infigo-400/30',
        },
        warning: {
            'container-low': 'bg-amber-100',
            'container': 'bg-amber-200',
            'container-height': 'bg-amber-400',
            'text-container-low': 'text-amber-900',
            'text-container': 'text-amber-900',
            'text-container-height': 'text-amber-900',
            'container-highest': 'bg-amber-600',
            'text-container-highest': 'text-amber-50',
            'border-color': 'bg-amber-400/30',
        },
        success: {
            'container-low': 'bg-green-100',
            'container': 'bg-green-200',
            'container-height': 'bg-green-400',
            'text-container-low': 'text-green-900',
            'text-container': 'text-green-900',
            'text-container-height': 'text-green-900',
            'container-highest': 'bg-green-600',
            'text-container-highest': 'text-green-50',
            'border-color': 'bg-green-400/30',
        },
        error: {
            'container-low': 'bg-red-100',
            'container': 'bg-red-200',
            'container-height': 'bg-red-400',
            'text-container-low': 'text-red-900',
            'text-container': 'text-red-900',
            'text-container-height': 'text-red-900',
            'container-highest': 'bg-red-600',
            'text-container-highest': 'text-red-50',
            'border-color': 'bg-red-400/30',
        },
        neutral: {
            'container-low': 'bg-neutrau-100',
            'container': 'bg-neutrau-200',
            'container-height': 'bg-neutrau-400',
            'text-container-low': 'text-neutrau-900',
            'text-container': 'text-neutrau-900',
            'text-container-height': 'text-neutrau-900',
            'container-highest': 'bg-neutrau-600',
            'text-container-highest': 'text-neutrau-50',
            'border-color': 'bg-neutrau-400/30',
        },
        alternative: {
            'container-low': 'bg-zinc-100',
            'container': 'bg-zinc-200',
            'container-height': 'bg-zinc-400',
            'text-container-low': 'text-zinc-900',
            'text-container': 'text-zinc-900',
            'text-container-height': 'text-zinc-900',
            'container-highest': 'bg-zinc-600',
            'text-container-highest': 'text-zinc-50',
            'border-color': 'bg-zinc-400/30',
        },
    },
    thypography: {
        'font-family': 'Geist Mono',
        'font-small': 'text-sm',
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
