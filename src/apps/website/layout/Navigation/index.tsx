import type { MorphusProps } from '@core/util/types/Morphus.types';

type WebNavigationProps = {} & MorphusProps;

export function WebNavigation({ children }: WebNavigationProps) {
    return <div className='morphus-navigation'>{children}</div>;
}
