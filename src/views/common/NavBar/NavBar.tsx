import { css } from '@emotion/react';
import { useMemo, useState } from 'react';

import FlexLayout from '@/components/FlexLayout/FlexLayout';
import SvgIcon from '@/components/SvgIcon';
import Logo from '@/views/common/Logo';

import AddressDTypeDropDown from './Address_DeliveryType_Dropdown';
import DeliveryDropDown from './Delivery_Dropdown';
import SearchBar from './SearchBar';
import ShoppingCart from './shoppingCart/ShoppingCart';
import SideMenu from './sideMenu/SideMenu';
import User from './User';

const NavBar = () => {
    const [sideMenuState, setSideMenuState] = useState<boolean>(false);

    const wrapper = useMemo(
        () =>
            css`
                border-bottom: 1px solid #e9e9ea;
            `,
        []
    );
    const navStyles = useMemo(
        () =>
            css`
                max-width: 1280px;
                margin: 0 auto;

                height: 70px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                /* outline: 1px solid; */

                padding: 0 20px;
            `,
        []
    );

    const menuIconStyle = css`
        cursor: pointer;
    `;

    return (
        <div css={wrapper}>
            <div css={[navStyles]}>
                <FlexLayout className='navbar-left'>
                    <Logo />
                    <DeliveryDropDown />
                    <AddressDTypeDropDown />
                </FlexLayout>
                <SearchBar></SearchBar>
                <FlexLayout className='navbar-right'>
                    <ShoppingCart />
                    <User />
                    <SvgIcon
                        name='menu'
                        width={23}
                        height={23}
                        css={menuIconStyle}
                        onClick={() => setSideMenuState(true)}
                    />
                    <SideMenu
                        sideMenuSwitch={sideMenuState}
                        sideMenuOnClose={() => setSideMenuState(false)}
                    />
                </FlexLayout>
            </div>
        </div>
    );
};

export default NavBar;
