import type { IconName } from '@components/Icons/icons.Data';
import type { MorphusColors } from '@core/util/types/Colors.types';
import { createTheme } from 'flowbite-react/helpers/create-theme';
import type { ThemingProps } from 'flowbite-react/types';
import type { ComponentProps } from 'react';

declare module 'flowbite-react/types' {
    interface FlowbiteTheme {
        mpsCardTheme: MpsCardTheme;
    }

    interface FlowbiteProps {
        mpsCardProps: Partial<WithoutThemingProps<MpsCardThemeProps>>;
    }
}

export interface MpsCardTheme {
    root?: {
        base?: string;
        color?: MorphusColors;
    };
    content?: {
        base?: string;
        title?: string;
        body?: string;
    };
}

export const cardTheme = createTheme<MpsCardTheme>({
    root: {
        base: 'cardBase',
        color: {
            primary: '',
            secondary: 'secondary',
            tertiary: 'tertiary',
            surface: 'surface',
            info: 'info',
            warning: 'warning',
            success: 'success',
            error: 'error',
            neutral: 'neutral',
            neutralVariant: 'neutralVariant',
        },
    },
    content: {
        base: 'cardContent',
        title: 'cardTitleContent',
        body: 'cardBody',
    },
});

export interface MpsCardThemeProps extends ComponentProps<'div'>, ThemingProps<MpsCardTheme> {
    title: string;
    color?: keyof MorphusColors;
    icon?: IconName;
    children?: React.ReactNode;
}
