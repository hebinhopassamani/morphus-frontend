import { Outlet } from 'react-router';
import { MpsContent } from '@morphus/layout/Content';
import { MpsSidebar } from '@morphus/layout/SideBar';
import { MpsTopBar } from '@morphus/layout/Topbar';
import './Styles.css';

export function MorphusLayout() {
    return (
        <div className='morphus-container'>
            <MpsSidebar />
            <MpsContent>
                <MpsTopBar />
                <Outlet />
            </MpsContent>
        </div>
    );
}
