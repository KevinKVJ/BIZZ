import { css } from '@emotion/react';

import AsidePopular from './AsidePopular';
import AsideSeriesList from './AsideSeriesList';
import AsideUserInfoBlock from './AsideUserInfoBlock';

const AsideArea = () => {
    const asideAreaStyle = css`
        flex: 0 0 300px;
        max-width: 300px;

        display: flex;
        flex-direction: column;
        row-gap: 40px;
    `;
    return (
        <aside className='article_aside_wrapper' css={asideAreaStyle}>
            <AsideUserInfoBlock authorName='Aurelia Prehistoric' />
            <AsideSeriesList />
            <AsidePopular />
        </aside>
    );
};

export default AsideArea;
