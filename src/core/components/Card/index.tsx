import { forwardRef } from 'react';
import { useThemeProvider } from 'flowbite-react';
import { useResolveTheme } from 'flowbite-react/helpers/resolve-theme';
import { get } from 'flowbite-react/helpers/get';
import { resolveProps } from 'flowbite-react/helpers/resolve-props';
import { twMerge } from 'flowbite-react/helpers/tailwind-merge';
import { cardTheme, type MpsCardThemeProps } from '@components/Card/Theme';
import { MorphusIcon } from '@components/Icons';
import styles from './Styles.module.css';

export const MpsCardTheme = forwardRef<HTMLDivElement, MpsCardThemeProps>((props, ref) => {
    const provider = useThemeProvider();

    const theme = useResolveTheme(
        [cardTheme, provider.theme?.mpsCardTheme, props.theme],
        [get(provider.clearTheme, 'mpsCardTheme'), props.clearTheme],
        [get(provider.applyTheme, 'mpsCardTheme'), props.applyTheme]
    );

    const { className, title, color = 'info', icon = 'list', children, ...restProps } = resolveProps(props, provider.props?.mpsCardProps);

    return (
        <div ref={ref} className={twMerge(className, styles[theme.root?.base ?? ''], styles[color])} {...restProps}>
            <div className={twMerge(styles[theme.content?.base ?? ''])}>
                <div className={styles[theme.content?.title ?? '']}>
                    <div className={styles.titleIcon}>{<MorphusIcon icon={icon} />}</div>
                    <label className={styles.titleLabel}>{title}</label>
                </div>
                <div className={twMerge(styles[theme.content?.body ?? ''])}>{children}</div>
            </div>
        </div>
    );
});

MpsCardTheme.displayName = 'MpsCard';
