import type { MpsCardTheme } from '@components/Card/Card';
import { mpsInitialCardTheme } from '@components/Card/Theme';
import { AppRoutes } from '@src/routes/App.routes';
import { createTheme, ThemeProvider } from 'flowbite-react';

const mpsCardTheme = createTheme<MpsCardTheme>({
    ...mpsInitialCardTheme,
    root: {
        color: '',
    },
});

export function App() {
    return (
        <>
            <ThemeProvider theme={mpsCardTheme}>
                <AppRoutes />;
            </ThemeProvider>
        </>
    );
}
