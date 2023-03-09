import { css } from '@emotion/react';

import Article from '../common/Article';
import ArticleSection from '../common/ArticleSection';
import Navbar from '../common/Navbar';
import ProfileBanner from './ProfileBanner';

const ProfilePage = () => {
    const profilePageStyle = css`
        background-color: #eeeeee;
        min-height: 100vh;
        > .content {
            margin: 0 auto;
            max-width: 1240px;
            padding: 50px 20px;

            > div {
                margin-bottom: 30px;
            }
            .categories_selector {
                width: 100%;
                display: flex;
                justify-content: center;

                .selectors {
                    background-color: #0000000c;
                    display: flex;
                    align-items: center;

                    column-gap: 4px;

                    border-radius: 5px;
                    padding: 4px;

                    > div {
                        flex: 0 0 auto;

                        box-sizing: content-box;

                        padding: 8px 12px;
                        border-radius: 5px;

                        column-gap: 5px;

                        color: #000000;
                        font-weight: 700;
                        letter-spacing: -0.25px;

                        &:hover {
                            background-color: rgba(0, 0, 0, 0.1);
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    `;

    const sortByOptions = (
        <div
            css={css`
                color: #1687a7;
                cursor: pointer;
                > span {
                    color: rgba(0, 0, 0, 0.65);
                }
            `}
        >
            Sort By: <span>Popularity</span>
        </div>
    );

    return (
        <div className='profile-page_wrapper' css={profilePageStyle}>
            <Navbar />

            <div className='content'>
                <div>
                    <ProfileBanner />
                </div>
                <div>
                    <div className='categories_selector'>
                        <div className='selectors'>
                            <div className='works'>Works</div>
                            <div className='collections'>Collections</div>
                            <div className='likes'>Likes</div>
                        </div>
                    </div>
                </div>
                <div>
                    <ArticleSection title='Featured' operationComponent={<div></div>}>
                        <Article></Article>
                        <Article></Article>
                        <Article></Article>
                    </ArticleSection>
                </div>
                <div>
                    <ArticleSection title='All' operationComponent={sortByOptions}>
                        <Article></Article>
                        <Article></Article>
                        <Article></Article>
                        <Article></Article>
                        <Article></Article>
                        <Article></Article>
                        <Article></Article>
                        <Article></Article>
                        <Article></Article>
                        <Article></Article>
                        <Article></Article>
                    </ArticleSection>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
