import type { MorphusProps } from '@core/util/types/Morphus.types';

export type SecTopBarProps = {} & MorphusProps;

export function SecTopBar({ children }: SecTopBarProps) {
    return <div className='security-topbar shadow-lg shadow-black/50 border-b border-b-gray-300'>{children}</div>;
}
