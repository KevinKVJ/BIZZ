import { css } from '@emotion/react';
import { useLayoutEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import Mask from '@/components/Mask/Mask';

import type { drawerInternalProps, drawerProps } from './DrawerType';

/*
 *  onClose 关闭回调
 *  title 标题
 *  width 宽度
 *  zIndex zIndex
 *  placement 抽屉方向
 *  mask 是否展示遮罩
 *  maskClosable 点击遮罩是否关闭
 *  closable 是否显示右上角关闭按钮
 *  destroyOnClose 关闭抽屉销毁子元素
 *  getContainer 指定 Drawer 挂载的 HTML 节点, 可以将抽屉挂载在任何元素上
 *  drawerStyle 能自定义抽屉弹出层样式
 */

const DrawerInternal = ({
    InternalActiveSwitch,
    children,
    drawerWidth = 400,
    transitionDuration = 0.25,
    withMask = true,
    clickMaskToClose = true,
    InternalOnClose: onClose,
    drawerContentStyle = {},
    destroyOnClose = true,
}: drawerInternalProps) => {
    /* -----------------States------------------ */
    const [drawerInternalActiveState, setDrawerInternalActiveState] = useState(false);
    const [wrapperState, setWrapperState] = useState(false);
    // const [drawerContentDisplay, setDrawerContentDisplay] = useState(false);
    /* -----------------Styles------------------ */
    useLayoutEffect(() => {
        // console.log('lililil');

        if (InternalActiveSwitch) {
            setDrawerInternalActiveState(true);
            setWrapperState(true);
        } else {
            drawerInternalActiveState && setDrawerInternalActiveState(false);
        }
        // console.log('LayoutEffect Internal');
        // console.log('Effect Internal');
    }, [InternalActiveSwitch]);

    const drawerWrapperStyle = useMemo(
        () => css`
            position: absolute;
            top: 0;
            width: ${wrapperState ? '100%' : '0'};
            bottom: 0;
            overflow: hidden;
        `,
        [wrapperState]
    );

    const drawerStyle = useMemo(
        () => css`
            position: absolute;
            top: 0;
            bottom: 0;
            right: ${drawerInternalActiveState ? 0 : -drawerWidth}px;
            z-index: 1000;
            width: ${drawerWidth}px;
            background-color: #fff;
            transition: right ease-in-out ${transitionDuration}s;
        `,
        [drawerInternalActiveState]
    );

    // useEffect(() => {
    //     console.log('Effect Internal');
    //     /* return () => {
    //         if (InternalActiveSwitch && !drawerInternalActiveState) {
    //             !!onClose && onClose();
    //         }
    //     }; */
    // }, [InternalActiveSwitch]);

    const handleClose = () => {
        if (!drawerInternalActiveState) {
            setWrapperState(false);
            onClose?.();
        }
    };

    const childrenDestroyedOnClose = useMemo(() => {
        if (destroyOnClose) {
            return InternalActiveSwitch && children;
        }
        return children;
    }, [InternalActiveSwitch]);

    const portalElement = (
        <div className='drawer-wrapper' css={drawerWrapperStyle}>
            {withMask && (
                <Mask
                    onClick={() =>
                        clickMaskToClose && setDrawerInternalActiveState(false)
                    }
                />
            )}
            <div className='drawer' css={drawerStyle} onTransitionEnd={handleClose}>
                <div
                    className='drawer-children'
                    style={{ width: '100%', ...drawerContentStyle }}
                >
                    {childrenDestroyedOnClose}
                </div>
            </div>
        </div>
    );

    return createPortal(portalElement, document.body);
};

const Drawer = ({ activeSwitch, keepMounted = true, onClose, ...props }: drawerProps) => {
    const [drawerMount, setDrawerMount] = useState<boolean>(keepMounted);
    // const [drawerState, setDrawerState] = useState<boolean>(false);
    useLayoutEffect(() => {
        if (activeSwitch) {
            setDrawerMount(true);
        }
        // console.log('LayoutEffect External');
    }, [activeSwitch]);

    // useEffect(() => {
    //     if (activeSwitch) {
    //         setDrawerState(true);
    //     } else {
    //         if (drawerState) {
    //             setDrawerState(false);
    //         }
    //     }
    //     // console.log('Effect External');
    // }, [activeSwitch]);

    // useLayoutEffect(() => {
    //     if (activeSwitch) {
    //         setDrawerState(true);
    //     }
    //     // drawerState && setDrawerMount(true);
    //     // console.log('Effect External');
    // }, [activeSwitch]);

    const unmountAndOnClose = () => {
        !keepMounted && setDrawerMount(false);
        // setDrawerState(false);
        !!onClose && onClose();
    };

    return drawerMount ? (
        <DrawerInternal
            InternalActiveSwitch={activeSwitch}
            InternalOnClose={unmountAndOnClose}
            {...props}
        />
    ) : null;
};

export default Drawer;
