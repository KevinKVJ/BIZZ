import { css } from '@emotion/react';

import Navbar from '../common/Navbar';
import Article from '../common/Article';
import ArticleSection from '../common/ArticleSection';

const IndexPage = () => {
    const indexPageStyles = css`
        > .content {
            max-width: 1240px;
            /* outline: 1px solid; */
            padding: 50px 20px;
            margin: 0 auto;

            .followings {
                margin-bottom: 30px;
            }
        }
    `;
    return (
        <div className='index_page_wrapper' css={indexPageStyles}>
            <Navbar />
            <div className='content'>
                <ArticleSection title='From Users You Follow' className='followings'>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </ArticleSection>
                <ArticleSection title='Recommended'>
                    <Article />
                    <Article />
                    <Article />
                </ArticleSection>
            </div>
        </div>
    );
};

export default IndexPage;
