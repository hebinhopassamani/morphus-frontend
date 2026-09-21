export type MorphusProps = {
    children?: React.ReactNode;
    styleClass?: string;
};

export type PositionsType = 'left' | 'top' | 'right' | 'botton';
export type StringEnumOf<T> = T | (string & {});

export interface MpxBoolean {
    off: string;
    on: string;
}
export interface MpxStateColors {
    info: string;
    failure: string;
    success: string;
    warning: string;
}
export interface MpxColors extends MpxStateColors {
    [key: string]: string;
    blue: string;
    cyan: string;
    dark: string;
    gray: string;
    green: string;
    indigo: string;
    light: string;
    lime: string;
    pink: string;
    purple: string;
    red: string;
    teal: string;
    yellow: string;
}
export type MpxHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface MpxPositions {
    'bottom-left': string;
    'bottom-right': string;
    'bottom-center': string;
    'top-left': string;
    'top-center': string;
    'top-right': string;
    'center-left': string;
    center: string;
    'center-right': string;
}
export interface MpxSizes {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
}
