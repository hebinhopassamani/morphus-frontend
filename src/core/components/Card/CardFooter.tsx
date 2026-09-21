import { mpsInitialCardTheme } from '@components/Card/Theme';
import { useThemeProvider } from 'flowbite-react';
import { get } from 'flowbite-react/helpers/get';
import { resolveProps } from 'flowbite-react/helpers/resolve-props';
import { useResolveTheme } from 'flowbite-react/helpers/resolve-theme';
import { twMerge } from 'flowbite-react/helpers/tailwind-merge';
import { type ThemingProps } from 'flowbite-react/types';
import { type ComponentProps } from 'react';

export interface MpsCardFooterTheme {
    base: string;
}

export interface MpsCardFooterProps extends ComponentProps<'div'>, ThemingProps<MpsCardFooterTheme> {
    children?: React.ReactNode;
}

export function MpsCardFooter(props: MpsCardFooterProps) {
    const provider = useThemeProvider();

    const theme = useResolveTheme(
        [mpsInitialCardTheme, provider.theme?.mpsCardTheme?.root?.footer, props.theme],
        [get(provider.clearTheme, 'MpsCard.root'), props.clearTheme],
        [get(provider.applyTheme, 'MpsCard.root'), props.applyTheme]
    );

    const { className, children, ...restProps } = resolveProps(props, provider.props?.mpsCardProps);

    return (
        <div className={twMerge(className, theme.root?.footer?.base)} {...restProps}>
            {children}
        </div>
    );
}
