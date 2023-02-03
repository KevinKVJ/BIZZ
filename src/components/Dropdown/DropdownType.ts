import { PropsWithChildren } from 'react';

export interface IDropdownProps extends PropsWithChildren {
    activeSwitch: boolean;
    onClose?: () => void;
}
