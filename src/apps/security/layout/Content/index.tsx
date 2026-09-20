import type { MorphusProps } from '@core/util/types/Morphus.types';

export type SecContentProps = {} & MorphusProps;

export function SecContent({ children }: SecContentProps) {
    return <div className='security-content'>{children}</div>;
}
