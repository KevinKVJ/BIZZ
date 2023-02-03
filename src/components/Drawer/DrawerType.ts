import type { CSSProperties } from 'react';
import { PropsWithChildren } from 'react';

// type activeSwitchUseStateType =
//     | ReturnType<typeof useState<boolean>>
//     | [boolean, Dispatch<SetStateAction<boolean>>];

export interface drawerProps extends PropsWithChildren {
    activeSwitch: boolean;
    drawerWidth?: number;
    onClose?: () => void;
    transitionDuration?: number;
    withMask?: boolean;
    clickMaskToClose?: boolean;
    keepMounted?: boolean;
    drawerContentStyle?: CSSProperties;
    destroyOnClose?: boolean;
}

export interface drawerInternalProps extends PropsWithChildren {
    InternalActiveSwitch: boolean;
    drawerWidth?: number;
    InternalOnClose?: () => void;
    transitionDuration?: number;
    withMask?: boolean;
    clickMaskToClose?: boolean;
    keepMounted?: boolean;
    drawerContentStyle?: CSSProperties;
    destroyOnClose?: boolean;
}
