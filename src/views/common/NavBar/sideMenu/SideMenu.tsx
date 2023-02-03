import { css } from '@emotion/react';
import { FC } from 'react';

/* , PropsWithChildren, useState */
import Drawer from '@/components/Drawer/Drawer';
import SvgIcon from '@/components/SvgIcon';

interface ISideMenuProps {
    sideMenuSwitch: boolean;
    sideMenuOnClose: () => void;
}

const SideMenu: FC<ISideMenuProps> = ({ sideMenuSwitch, sideMenuOnClose, ...props }) => {
    // const [drawerSwitch, setDrawerSwitch] = useState<boolean>(false);
    const sideMenuContentHeader = css`
        height: 60px;
        display: flex;
        align-items: center;
    `;
    const sideMenuContentMain = css`
        height: 500px;
        /* background-color: violet; */
        outline: 1px solid black;
    `;
    return (
        <div className='side-menu-wrapper' {...props}>
            <Drawer
                activeSwitch={sideMenuSwitch}
                onClose={
                    () => sideMenuOnClose()
                    // console.log('lululala');
                }
            >
                <div className='side-menu-content-wrapper'>
                    <div className='side-menu-content'>
                        <div
                            className='side-menu-content-header'
                            css={sideMenuContentHeader}
                        >
                            <div
                                style={{
                                    marginRight: 0,
                                    marginLeft: 'auto',
                                    width: 'fit-content',
                                }}
                                onClick={() => sideMenuOnClose()}
                                className='smc-cross-icon'
                            >
                                <SvgIcon
                                    name='cross'
                                    width={30}
                                    height={30}
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                        </div>
                        <div
                            className='side-menu-content-main'
                            css={sideMenuContentMain}
                        ></div>
                        <div className='side-menu-content-footer'></div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};
export default SideMenu;
