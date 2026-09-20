export type AllColors = SeverityColors | ThemeColors;
export type SeverityColors = 'warn' | 'info' | 'success' | 'error' | 'help';
export type ThemeColors = 'primary' | 'secondary' | 'tertiary' | 'surface' | 'neutral' | 'neutral-variant';
export type ThemeTypes = 'light' | 'dark';

export interface MorphusColors {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    surface?: string;
    info?: string;
    warning?: string;
    success?: string;
    error?: string;
    neutral?: string;
    neutralVariant?: string;
}
