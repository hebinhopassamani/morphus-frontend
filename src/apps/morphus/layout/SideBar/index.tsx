import type { MorphusProps } from '@core/util/types/Morphus.types';

export type MpsSidebarProps = {} & MorphusProps;

export function MpsSidebar({ children }: MpsSidebarProps) {
    return <div className='morphus-sidebar'>{children}</div>;
}
