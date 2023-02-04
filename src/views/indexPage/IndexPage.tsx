import { css } from '@emotion/react';

import Article from '../common/Article';
import ArticleSection from '../common/ArticleSection';
import Navbar from '../common/Navbar';

const IndexPage = () => {
    const indexPageStyles = css`
        background-color: #eeeeee;
        min-height: 100vh;

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
