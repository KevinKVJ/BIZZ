import { css } from '@emotion/react';
import { useState } from 'react';

import Dropdown from '@/components/Dropdown/Dropdown_CM';
import FlexLayout from '@/components/FlexLayout/FlexLayout';
import SvgIcon from '@/components/SvgIcon';

const A_D_DD = () => {
    const [dropdownActive, setDropdownActive] = useState(false);

    const ADDDTitleStyle = () => css`
        font-weight: 600;

        cursor: pointer;
        user-select: none;
    `;

    return (
        <>
            <div
                onClick={e => {
                    // e.nativeEvent.stopImmediatePropagation();
                    e.preventDefault();
                    e.stopPropagation();
                    setDropdownActive(prev => !prev);
                }}
            >
                <FlexLayout className='Delivery_Type DD' spacing={5} css={ADDDTitleStyle}>
                    <div>Manhattan, NY</div>
                    <div>
                        ASAP <SvgIcon name='dropdown' width={10} height={10} />
                    </div>
                </FlexLayout>
            </div>
            <Dropdown
                activeSwitch={dropdownActive}
                onClose={() => setDropdownActive(false)}
            ></Dropdown>
        </>
    );
};
export default A_D_DD;
