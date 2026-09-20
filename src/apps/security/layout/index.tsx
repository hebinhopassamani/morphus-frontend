import { SecContent } from '@security/layout/Content';
import { SecTopBar } from '@security/layout/Topbar';
import { Outlet } from 'react-router';
import './Styles.css';
import { DarkThemeToggle, useThemeMode } from 'flowbite-react';

export function SecurityLayout() {
    const { toggleMode } = useThemeMode();
    return (
        <div className='security-container'>
            <SecTopBar>
                <DarkThemeToggle onToggle={toggleMode} />
            </SecTopBar>
            <SecContent>
                <Outlet />
            </SecContent>
        </div>
    );
}
