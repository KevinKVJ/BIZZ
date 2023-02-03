import { css } from '@emotion/react';
import { useState } from 'react';

import Dropdown from '@/components/Dropdown/Dropdown_CM';
import FlexLayout from '@/components/FlexLayout/FlexLayout';
import SvgIcon from '@/components/SvgIcon';

const DeliveryDropdownContent = () => {
    const DDWrapperStyle = css``;
    const deliveryDateStyle = css``;
    const deliveryTimeStyle = css``;
    return (
        <div css={DDWrapperStyle}>
            <div css={deliveryDateStyle}>
                <div className='ddd-title'>
                    <span>Delivery Date</span>
                </div>
            </div>
            <div css={deliveryTimeStyle}>
                <div className='ddt-title'>
                    <span>Delivery Time</span>
                </div>
            </div>
        </div>
    );
};

const DeliveryDD = () => {
    const [dropdownActive, setDropdownActive] = useState(false);

    const deliveryDDTitle = css`
        font-weight: 600;

        cursor: pointer;
        user-select: none;
    `;

    return (
        <>
            <div
                className='delivery_DD_wrapper'
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropdownActive(!dropdownActive);
                }}
            >
                <FlexLayout className='Delivery_DD' spacing={5} css={deliveryDDTitle}>
                    <span>Delivery</span>
                    <SvgIcon name='dropdown' width={10} height={10} />
                </FlexLayout>
            </div>
            <Dropdown
                activeSwitch={dropdownActive}
                onClose={() => setDropdownActive(false)}
            >
                <DeliveryDropdownContent />
            </Dropdown>
        </>
    );
};
export default DeliveryDD;
