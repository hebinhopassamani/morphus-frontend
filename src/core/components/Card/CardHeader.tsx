import { mpsInitialCardTheme } from '@components/Card/Theme';
import { MorphusIcon } from '@components/Icons';
import { useThemeProvider } from 'flowbite-react';
import { get } from 'flowbite-react/helpers/get';
import { resolveProps } from 'flowbite-react/helpers/resolve-props';
import { useResolveTheme } from 'flowbite-react/helpers/resolve-theme';
import { twMerge } from 'flowbite-react/helpers/tailwind-merge';
import { type IconName } from '@components/Icons/icons.Data';
import { type ThemingProps } from 'flowbite-react/types';
import { type ComponentProps } from 'react';
import { getColor, type MorphusColorNames } from '@core/util/types/Colors.types';

export interface CardHeaderTheme {
    base: string;
    color: MorphusColorNames;
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
    color?: MorphusColorNames;
    icon?: IconName;
    children?: React.ReactNode;
}

export function MpsCardHeader(props: MpsCardHeaderProps) {
    const provider = useThemeProvider();

    const theme = useResolveTheme(
        [mpsInitialCardTheme, provider.theme?.mpsCardTheme?.root?.header, props.theme],
        [get(provider.clearTheme, 'MpsCard.root'), props.clearTheme],
        [get(provider.applyTheme, 'MpsCard.root'), props.applyTheme]
    );

    const { className, color, title, icon, children, ...restProps } = resolveProps(props, provider.props?.mpsCardProps);
    const groupColor = getColor(theme.root.morphusTheme, color ?? theme.root.header.color);

    return (
        <>
            {title ? (
                <div className={twMerge(className, theme.root?.header?.base, groupColor?.containerLow)} {...restProps}>
                    <div className={twMerge(theme.root?.header?.icon?.base)}>
                        <MorphusIcon icon={icon ?? 'save'} />
                    </div>
                    <div className={twMerge(theme.root?.header?.title?.base)}>
                        <label className={twMerge(theme.root?.header?.title?.label, groupColor?.textContainer, theme.root.morphusTheme.thypography?.fontLarge)}>
                            {title}
                        </label>
                    </div>
                </div>
            ) : (
                <div className={twMerge(className, theme.root?.header?.base, groupColor?.containerLow)} {...restProps}>
                    {children}
                </div>
            )}
        </>
    );
}
