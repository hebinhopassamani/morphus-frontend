import type { MpsCardContentTheme } from '@components/Card/CardContent';
import type { MpsCardFooterTheme } from '@components/Card/CardFooter';
import type { CardHeaderTheme } from '@components/Card/CardHeader';
import { mpsInitialCardTheme } from '@components/Card/Theme';
import { morphusColors, type MorphusColors } from '@core/util/types/Colors.types';
import { useThemeProvider } from 'flowbite-react';
import { get } from 'flowbite-react/helpers/get';
import { resolveProps } from 'flowbite-react/helpers/resolve-props';
import { useResolveTheme } from 'flowbite-react/helpers/resolve-theme';
import { twMerge } from 'flowbite-react/helpers/tailwind-merge';
import type { FlowbiteTheme, ThemingProps } from 'flowbite-react/types';
import type { ComponentProps } from 'react';

export interface MpsCardTheme extends Partial<FlowbiteTheme> {
    root: {
        base: string;
        color: keyof MorphusColors;
        content: MpsCardContentTheme;
        header: CardHeaderTheme;
        footer: MpsCardFooterTheme;
    };
}

export interface MpsCardProps extends ComponentProps<'div'>, ThemingProps<MpsCardTheme> {
    color?: keyof MorphusColors;
    children?: React.ReactNode;
}

export function MpsCard(props: MpsCardProps) {
    const provider = useThemeProvider();

    const theme = useResolveTheme(
        [mpsInitialCardTheme, provider.theme?.mpsCardTheme?.root, props.theme],
        [get(provider.clearTheme, 'mpscard.root'), props.clearTheme],
        [get(provider.applyTheme, 'mpscard.root'), props.applyTheme]
    );

    const { className, color, children, ...restProps } = resolveProps(props, provider.props?.mpsCardProps);

    return (
        <div className={twMerge(className, theme.root.base, morphusColors[color ?? theme.root?.color])} {...restProps}>
            {children}
        </div>
    );
}
