import { mpsInitialCardTheme } from '@components/Card/Theme';
import { MorphusIcon } from '@components/Icons';
import { useThemeProvider } from 'flowbite-react';
import { get } from 'flowbite-react/helpers/get';
import { resolveProps } from 'flowbite-react/helpers/resolve-props';
import { useResolveTheme } from 'flowbite-react/helpers/resolve-theme';
import { twMerge } from 'flowbite-react/helpers/tailwind-merge';
import { type IconName } from '@components/Icons/icons.Data';
import { morphusColors, type MorphusColors } from '@core/util/types/Colors.types';
import { type ThemingProps } from 'flowbite-react/types';
import { type ComponentProps } from 'react';

export interface CardHeaderTheme {
    base: string;
    color: keyof MorphusColors;
    title: {
        label: string;
        base: string;
    };
    icon: {
        base: string;
    };
}

export interface MpsCardHeaderProps extends ComponentProps<'div'>, ThemingProps<CardHeaderTheme> {
    title: string;
    color?: keyof MorphusColors;
    icon?: IconName;
    children?: React.ReactNode;
}

export function MpsCardHeader(props: MpsCardHeaderProps) {
    const provider = useThemeProvider();

    const theme = useResolveTheme(
        [mpsInitialCardTheme, provider.theme?.mpsCardTheme?.root?.header, props.theme],
        [get(provider.clearTheme, 'card.root'), props.clearTheme],
        [get(provider.applyTheme, 'card.root'), props.applyTheme]
    );

    const { className, color, title, icon, children, ...restProps } = resolveProps(props, provider.props?.mpsCardProps);

    return (
        <>
            {title ? (
                <div className={twMerge(className, theme.root?.header?.base, morphusColors[color ?? theme.root?.header?.color])} {...restProps}>
                    <div className={twMerge(theme.root?.header?.icon?.base)}>
                        <MorphusIcon icon={icon ?? 'save'} />
                    </div>
                    <div className={twMerge(theme.root?.header?.title?.base)}>
                        <label className={twMerge(theme.root?.header?.title?.label)}>{title}</label>
                    </div>
                </div>
            ) : (
                <div className={twMerge(className, theme.root?.header?.base, morphusColors[color ?? theme.root?.header?.color])} {...restProps}>
                    {children}
                </div>
            )}
        </>
    );
}
