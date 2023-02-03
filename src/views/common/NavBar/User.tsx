import { css } from '@emotion/react';
import { useMemo } from 'react';

import SvgIcon from '@/components/SvgIcon';

const User = () => {
    const userStyles = useMemo(
        () => css`
            width: 34px;
            height: 34px;
            border: 1px solid #e9e9ea;
            border-radius: 1000px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .user_icon {
                margin-left: 0.5px;
            }
        `,
        []
    );
    return (
        <div css={userStyles}>
            <SvgIcon className='user_icon' name='user' width={20} height={20} />
        </div>
    );
};
export default User;
