import { Outlet } from 'react-router';
import { WebNavigation } from '@website/layout/Navigation';
import { WebContent } from '@website/layout/Content';
import './Styles.css';

export function WebSiteLayout() {
    return (
        <div className='morphus-container'>
            <WebNavigation />
            <WebContent>
                <Outlet />
            </WebContent>
        </div>
    );
}
