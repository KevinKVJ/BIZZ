import { css } from '@emotion/react';

import Followings from './componentParts/Followings';
import Navbar from './componentParts/Navbar';

const IndexPage = () => {
    const indexPageStyles = css`
        > .content {
            width: 1240px;
            outline: 1px solid;
            padding: 20px 0;
            margin: 0 auto;
        }
    `;
    return (
        <div className='index_page_wrapper' css={indexPageStyles}>
            <Navbar />
            <div className='content'>
                <Followings />
            </div>
        </div>
    );
};

export default IndexPage;
