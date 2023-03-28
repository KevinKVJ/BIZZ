import { css } from '@emotion/react';

import Article from '@/views/common/Article';

const AsidePopular = () => {
    const asidePopularStyle = css`
        > .title {
            color: #00000099;
            font-weight: bold;
            font-size: 14px;

            margin-bottom: 10px;
        }
        > .popular_list {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
        }
    `;
    return (
        <div className='aside_popular_wrapper' css={asidePopularStyle}>
            <div className='title'>From Aurelia Prehistoric</div>
            <div className='popular_list'>
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </div>
    );
};

export default AsidePopular;
