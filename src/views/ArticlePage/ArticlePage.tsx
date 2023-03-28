import { css } from '@emotion/react';

import Navbar from '../common/Navbar';
import CommentsArea from './page_parts/comments_area/CommentsArea';
import AsideArea from './page_parts/side_area/AsideArea';

const ArticlePage = () => {
    const articlePage = css`
        background-color: #eeeeee;

        > .article_main {
            min-height: calc(100vh - 50px);
            max-width: 1240px;
            margin: 0 auto;
            padding: 50px 20px;

            display: flex;
            justify-content: space-between;
            column-gap: 25px;

            .article_content {
                /* word-wrap: break-word; */
                /* width: 0; */
                /* flex-basis: 0%; */
                /* flex-shrink: 0; */
                /* flex-grow: 1; */

                flex: 1 0 0%;
                display: flex;
                flex-direction: column;
                row-gap: 20px;

                .content_head {
                    > div {
                        margin: 3px 0;
                    }
                    .series_title {
                        color: #00000099;
                        font-weight: 700;
                        font-size: 14px;
                    }
                    .article_title {
                        font-size: 22px;
                        font-weight: 600;

                        padding: 5px 0;
                    }
                    .tags {
                        font-size: 12px;
                        color: #1687a7;
                    }

                    .desc {
                        font-size: 12px;
                    }

                    .post-info_operations {
                        margin-top: 20px;

                        display: flex;
                        justify-content: space-between;
                    }

                    .count_and_edited_date {
                        font-size: 10.5px;
                        font-weight: bold;
                        color: #00000099;
                    }

                    .various_count {
                        display: flex;
                        column-gap: 10px;

                        .icon {
                            width: 20px;
                            height: 20px;
                            background-color: #000000;
                        }
                    }
                }
                .content_body {
                    min-height: 500px;
                    background-color: #fff;
                }
            }
        }
    `;
    return (
        <div className='articlePage_wrapper' css={articlePage}>
            <Navbar />
            <main className='article_main'>
                <div className='article_content'>
                    <div className='content_head'>
                        <div className='series_title'>Series Name #4</div>
                        <div className='article_title'>Very long article title</div>
                        <div className='tags'>
                            #some-tag #some-other-tag #YOLO #tags #frío #vocals #dslr
                            #soulmate #hiphop #istanbul #sunsets #soccer #vacaciones #cafe
                            #newspaper #forex #strong #streetwear +
                        </div>
                        <div className='desc'>Some brief description of the article</div>
                        <div className='post-info_operations'>
                            <div className='count_and_edited_date'>
                                3559 characters, last edited on November 28, 2022
                            </div>
                            <div className='various_count'>
                                <div className='views'>
                                    <div className='icon'></div>
                                </div>
                                <div className='likes'>
                                    <div className='icon'></div>
                                </div>
                                <div className='collections'>
                                    <div className='icon'></div>
                                </div>
                                <div className='comments'>
                                    <div className='icon'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content_body'></div>
                    <CommentsArea />
                </div>
                <AsideArea />
            </main>
        </div>
    );
};

export default ArticlePage;
