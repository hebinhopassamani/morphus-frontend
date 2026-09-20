import { mpsInitialCardTheme } from '@components/Card/Theme';
import { useThemeProvider } from 'flowbite-react';
import { get } from 'flowbite-react/helpers/get';
import { resolveProps } from 'flowbite-react/helpers/resolve-props';
import { useResolveTheme } from 'flowbite-react/helpers/resolve-theme';
import { twMerge } from 'flowbite-react/helpers/tailwind-merge';
import { type ThemingProps } from 'flowbite-react/types';
import { type ComponentProps } from 'react';

export interface MpsCardContentTheme {
    base: string;
}

export interface MpsCardContentProps extends ComponentProps<'div'>, ThemingProps<MpsCardContentTheme> {
    children?: React.ReactNode;
}

export function MpsCardContent(props: MpsCardContentProps) {
    const provider = useThemeProvider();

    const theme = useResolveTheme(
        [mpsInitialCardTheme, provider.theme?.mpsCardTheme?.root?.content, props.theme],
        [get(provider.clearTheme, 'card.root'), props.clearTheme],
        [get(provider.applyTheme, 'card.root'), props.applyTheme]
    );

    const { className, children, ...restProps } = resolveProps(props, provider.props?.mpsCardProps);

    return (
        <div className={twMerge(className, theme.root?.content?.base)} {...restProps}>
            {children}
        </div>
    );
}
