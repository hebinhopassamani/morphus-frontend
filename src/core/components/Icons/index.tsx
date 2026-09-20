import { MPS_ICON, type IconName } from '@components/Icons/icons.Data';

type MorphusIconProps = {
    icon: IconName;
};

export function MorphusIcon({ icon }: MorphusIconProps) {
    return MPS_ICON[icon];
}
