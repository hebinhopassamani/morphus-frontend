export type MorphusThemeProps = keyof MorphusTheme;
export type MorphusColorsTheme = keyof MorphusTheme['colors'];
export type MorphusColorGroupNames = keyof MorphusColorsGroup;
export type MorphusColorNames = keyof MorphusColors;
export type MorphusThypographyNames = keyof MorphusTheme['thypography'];
export type MorphusShapeNames = keyof MorphusTheme['shape'];

export interface MorphusTheme {
    colors?: MorphusColors;
    thypography?: MorphusThypography;
    shape?: MorphusShape;
}

export interface MorphusColors {
    primary?: MorphusColorsGroup;
    secondary?: MorphusColorsGroup;
    tertiary?: MorphusColorsGroup;
    surface?: MorphusColorsGroup;
    neutral?: MorphusColorsGroup;
    alternative?: MorphusColorsGroup;
    info?: MorphusColorsGroup;
    warning?: MorphusColorsGroup;
    success?: MorphusColorsGroup;
    error?: MorphusColorsGroup;
}

export interface MorphusColorsGroup {
    containerLow?: string;
    container?: string;
    containerHeight?: string;
    textContainerLow?: string;
    textContainer?: string;
    textContainerHeight?: string;
    containerHighest?: string;
    textContainerHighest?: string;
    borderColor?: string;
}

export interface MorphusThypography {
    fontFamily?: string;
    fontSmall?: string;
    fontMedium?: string;
    fontLarge?: string;
    fontLight?: string;
    fontRegular?: string;
    fontSemibold?: string;
    fontBold?: string;
    labelSmall?: string;
    labelMedium?: string;
    labelLarge?: string;
    titleSmall: string;
    titleMedium?: string;
    titleLarge?: string;
    headlineSmall?: string;
    headlineMedium?: string;
    headlineLarge?: string;
    displaySmall?: string;
    displayMedium?: string;
    displayLarge?: string;
}

export type MorphusShape = {
    radiusNone?: string;
    radiusExtraSmall?: string;
    radiusSmall?: string;
    radiusMedium?: string;
    radiusLarge?: string;
    radiusExtraLarge?: string;
    radiusNoneTop?: string;
    radiusExtraSmallTop?: string;
    radiusSmallTop?: string;
    radiusMediumTop?: string;
    radiusLargeTop?: string;
    radiusExtraLargeTop?: string;
    radiusNoneBotton?: string;
    radiusExtraSmallBotton?: string;
    radiusSmallBotton?: string;
    radiusMediumBotton?: string;
    radiusLargeBotton?: string;
    radiusExtraLargeBotton?: string;
};

export function getColor(theme: MorphusTheme, color?: MorphusColorNames) {
    if (theme.colors && color) {
        return theme.colors[color];
    }
}

export function getShape(theme: MorphusTheme, shape: MorphusShapeNames) {
    if (theme.shape && shape) {
        return theme.shape[shape];
    }
}

export function getThypography(theme: MorphusTheme, thypographt: MorphusThypographyNames) {
    if (theme.thypography && thypographt) {
        return theme.thypography[thypographt];
    }
}

export const morphusTheme: MorphusTheme = {
    colors: {
        primary: {
            containerLow: 'bg-blue-100',
            container: 'bg-blue-200',
            containerHeight: 'bg-blue-400',
            textContainerLow: 'text-blue-900',
            textContainer: 'text-blue-900',
            textContainerHeight: 'text-blue-900',
            containerHighest: 'bg-blue-600',
            textContainerHighest: 'text-blue-50',
            borderColor: 'bg-blue-400/30',
        },
        secondary: {
            containerLow: 'bg-sky-100',
            container: 'bg-sky-200',
            containerHeight: 'bg-sky-400',
            textContainerLow: 'text-sky-900',
            textContainer: 'text-sky-900',
            textContainerHeight: 'text-sky-900',
            containerHighest: 'bg-sky-600',
            textContainerHighest: 'text-sky-50',
            borderColor: 'bg-sky-400/30',
        },
        tertiary: {
            containerLow: 'bg-violet-100',
            container: 'bg-violet-200',
            containerHeight: 'bg-violet-400',
            textContainerLow: 'text-violet-900',
            textContainer: 'text-violet-900',
            textContainerHeight: 'text-violet-900',
            containerHighest: 'bg-violet-600',
            textContainerHighest: 'text-violet-50',
            borderColor: 'bg-violet-400/30',
        },
        surface: {
            containerLow: 'bg-slate-100',
            container: 'bg-slate-200',
            containerHeight: 'bg-slate-400',
            textContainerLow: 'text-slate-900',
            textContainer: 'text-slate-900',
            textContainerHeight: 'text-slate-900',
            containerHighest: 'bg-slate-600',
            textContainerHighest: 'text-slate-50',
            borderColor: 'bg-slate-400/30',
        },
        info: {
            containerLow: 'bg-indigo-100',
            container: 'bg-indigo-200',
            containerHeight: 'bg-indigo-400',
            textContainerLow: 'text-indigo-900',
            textContainer: 'text-indigo-900',
            textContainerHeight: 'text-indigo-900',
            containerHighest: 'bg-indigo-600',
            textContainerHighest: 'text-indigo-50',
            borderColor: 'bg-indigo-400/30',
        },
        warning: {
            containerLow: 'bg-amber-100',
            container: 'bg-amber-200',
            containerHeight: 'bg-amber-400',
            textContainerLow: 'text-amber-900',
            textContainer: 'text-amber-900',
            textContainerHeight: 'text-amber-900',
            containerHighest: 'bg-amber-600',
            textContainerHighest: 'text-amber-50',
            borderColor: 'bg-amber-400/30',
        },
        success: {
            containerLow: 'bg-green-100',
            container: 'bg-green-200',
            containerHeight: 'bg-green-400',
            textContainerLow: 'text-green-900',
            textContainer: 'text-green-900',
            textContainerHeight: 'text-green-900',
            containerHighest: 'bg-green-600',
            textContainerHighest: 'text-green-50',
            borderColor: 'bg-green-400/30',
        },
        error: {
            containerLow: 'bg-red-100',
            container: 'bg-red-200',
            containerHeight: 'bg-red-400',
            textContainerLow: 'text-red-900',
            textContainer: 'text-red-900',
            textContainerHeight: 'text-red-900',
            containerHighest: 'bg-red-600',
            textContainerHighest: 'text-red-50',
            borderColor: 'bg-red-400/30',
        },
        neutral: {
            containerLow: 'bg-neutrau-100',
            container: 'bg-neutrau-200',
            containerHeight: 'bg-neutrau-400',
            textContainerLow: 'text-neutrau-900',
            textContainer: 'text-neutrau-900',
            textContainerHeight: 'text-neutrau-900',
            containerHighest: 'bg-neutrau-600',
            textContainerHighest: 'text-neutrau-50',
            borderColor: 'bg-neutrau-400/30',
        },
        alternative: {
            containerLow: 'bg-zinc-100',
            container: 'bg-zinc-200',
            containerHeight: 'bg-zinc-400',
            textContainerLow: 'text-zinc-900',
            textContainer: 'text-zinc-900',
            textContainerHeight: 'text-zinc-900',
            containerHighest: 'bg-zinc-600',
            textContainerHighest: 'text-zinc-50',
            borderColor: 'bg-zinc-400/30',
        },
    },
    thypography: {
        fontFamily: 'Geist Mono',
        fontSmall: 'text-sm',
        fontMedium: 'text-lg',
        fontLarge: 'text-xl',
        fontLight: '400',
        fontRegular: '500',
        fontSemibold: '600',
        fontBold: '700',
        labelSmall: 'text-base',
        labelMedium: 'text-lg',
        labelLarge: 'text-xl',
        titleSmall: 'text-lg',
        titleMedium: 'text-xl',
        titleLarge: 'text-2xl',
        headlineSmall: 'text-lg',
        headlineMedium: 'text-xl',
        headlineLarge: 'ext-2xl',
        displaySmall: 'text-lg',
        displayMedium: 'text-xl',
        displayLarge: 'text-3xl',
    },
    shape: {
        radiusNone: 'rounded-none',
        radiusExtraSmall: 'rounded-sm',
        radiusSmall: 'rounded-md',
        radiusMedium: 'rounded-lg',
        radiusLarge: 'rounded-xl',
        radiusExtraLarge: 'rounded-2xl',
        radiusNoneTop: 'rounded-t-none',
        radiusExtraSmallTop: 'rounded-t-sm',
        radiusSmallTop: 'rounded-t-md',
        radiusMediumTop: 'rounded-t-lg',
        radiusLargeTop: 'rounded-t-xl',
        radiusExtraLargeTop: 'rounded-t-2x1',
        radiusNoneBotton: 'rounded-b-none',
        radiusExtraSmallBotton: 'rounded-b-sm',
        radiusSmallBotton: 'rounded-b-md',
        radiusMediumBotton: 'rounded-b-lg',
        radiusLargeBotton: 'rounded-b-xl',
        radiusExtraLargeBotton: 'rounded-b-2x1',
    },
};
