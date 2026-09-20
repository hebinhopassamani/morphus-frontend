import type { MorphusProps } from '@core/util/types/Morphus.types';

export type MpsTopBarProps = {} & MorphusProps;

export function MpsTopBar({ children }: MpsTopBarProps) {
    return <div className='morphus-topbar'>{children}</div>;
}
