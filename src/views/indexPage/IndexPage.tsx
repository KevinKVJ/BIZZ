import { css } from '@emotion/react';

import Article from './componentParts/Article';
import ArticleSection from './componentParts/ArticleSection';
import Navbar from './componentParts/Navbar';

const IndexPage = () => {
    const indexPageStyles = css`
        > .content {
            max-width: 1240px;
            /* outline: 1px solid; */
            padding: 20px 0;
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
