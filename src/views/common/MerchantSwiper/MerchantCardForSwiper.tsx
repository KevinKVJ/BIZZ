import { css } from '@emotion/react';
import { FC, useMemo } from 'react';

import image2 from '@/assets/mockPages/image2.jpg';
import Flex from '@/components/FlexLayout/FlexLayout';

/* Merchant PropTypes */
interface IMCFSProps {
    imgHeight?: number;
}

/* Merchant Comp */
const MCFS: FC<IMCFSProps> = ({ imgHeight = 170 }) => {
    const mcfsWrapperStyle = css`
        padding: 0 8px;
    `;

    const imgStyle = useMemo(
        () => css`
            width: 100%;
            height: ${imgHeight}px;
            border-radius: 4px;

            object-fit: cover;
            object-position: center;
        `,
        []
    );

    const mcInfoWrapperStyle = css`
        margin-top: 12px;
    `;

    const headerStyle = css`
        width: 100%;

        .main-header {
            font-size: 17px;
            font-weight: 600;
        }

        .extra-header {
            font-size: 15.5px;
        }
    `;
    const subHeaderStyle = css`
        font-size: 15.5px;
        /* font-weight: 600; */
    `;

    return (
        <div className='mcfs-wrapper' css={mcfsWrapperStyle}>
            <img src={image2} alt='' css={imgStyle} />
            <Flex
                vertical
                justifyContent='space-between'
                alignItems='stretch'
                spacing={5}
                className='mc-info'
                css={mcInfoWrapperStyle}
            >
                <div className='mc-info-main-title' css={headerStyle}>
                    <Flex justifyContent='space-between'>
                        <div className='main-header'>666666</div>
                        <div className='extra-header'>40 min</div>
                    </Flex>
                </div>
                <div className='mc-info-sub-title' css={subHeaderStyle}>
                    cccccc
                </div>
            </Flex>
        </div>
    );
};

export default MCFS;
