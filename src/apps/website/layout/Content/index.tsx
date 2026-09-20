import type { MorphusProps } from '@core/util/types/Morphus.types';

export type WebContentProps = {} & MorphusProps;

export function WebContent({ children }: WebContentProps) {
    return <div className='morphus-content'>{children}</div>;
}
