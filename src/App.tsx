import { AppRoutes } from '@src/routes/App.routes';
import { createTheme, ThemeProvider } from 'flowbite-react';

const mpsCardTheme = createTheme({
    mpsCardTheme: {
        color: {
            primary: 'bg-blue-500 hover:bg-blue-600',
        },
        size: {
            lg: 'px-6 py-3',
        },
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
