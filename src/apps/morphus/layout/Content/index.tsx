import type { MorphusProps } from '@core/util/types/Morphus.types';

export type MpsContentProps = {} & MorphusProps;

export function MpsContent({ children }: MpsContentProps) {
    return <div className='morphus-content'>{children}</div>;
}
