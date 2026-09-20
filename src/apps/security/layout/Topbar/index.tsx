import type { MorphusProps } from '@core/util/types/Morphus.types';

export type SecTopBarProps = {} & MorphusProps;

export function SecTopBar({ children }: SecTopBarProps) {
    return <div className='security-topbar shadow-slate-400 shadow-xl'>{children}</div>;
}
