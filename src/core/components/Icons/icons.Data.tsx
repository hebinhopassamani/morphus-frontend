import { List, LucideLogOut, LucideSave } from 'lucide-react';

export const MPS_ICON = {
    'save': <LucideSave />,
    'signout': <LucideLogOut />,
    'list': <List />,
};

export type IconName = keyof typeof MPS_ICON;
