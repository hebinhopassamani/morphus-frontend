import type { MpsCardProps, MpsCardTheme } from '@components/Card/Card';

declare module 'flowbite-react/types' {
    interface FlowbiteTheme {
        mpsCardTheme: MpsCardTheme;
    }

    interface FlowbiteProps {
        mpsCardProps: Partial<WithoutThemingProps<MpsCardProps>>;
    }
}
