import type { MpsCardTheme } from '@components/Card/Card';
import { AppRoutes } from '@src/routes/App.routes';
import { createTheme, ThemeProvider } from 'flowbite-react';

const mpsCardTheme = createTheme<MpsCardTheme>({
    root: {
        color: 'secondary',
        base: 'flex flex-col justify-start items-center  flex-auto w-200 border-3 border-mps-neutral-variante-600 overflow-hidden rounded-xl shadow-gray-600 shadow-2xl',
        header: {
            color: 'secondary',
            base: 'flex flex-row justify-start items-center h-18 w-full px-4 gap-4 border-b-2 border-b-mps-neutral-variante-600',
            icon: {
                base: 'flex flex-row justify-start items-center h-full',
            },
            title: {
                label: 'flex flex-row justify-start items-center h-full w-full mps-title text-xl',
                base: 'flex flex-col justify-center items-start h-full flex-auto',
            },
        },
        content: {
            base: 'flex flex-col justify-start items-center flex-auto w-full p-3',
        },
        footer: {
            base: 'flex flex-row justify-start items-center h-18 w-full',
        },
    },
});

export function App() {
    return (
        <>
            <ThemeProvider>
                <AppRoutes />;
            </ThemeProvider>
        </>
    );
}
