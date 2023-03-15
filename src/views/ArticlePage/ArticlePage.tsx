// import React from 'react';

import { css } from '@emotion/react';

import Navbar from '../common/Navbar';

const ArticlePage = () => {
    const articlePage = css`
        background-color: #eeeeee;

        > .article_main {
            min-height: calc(100vh - 50px);
            max-width: 1240px;
            margin: 0 auto;

            display: flex;
            column-gap: 25px;

            .article_aside {
                flex: 0 0 300px;
                max-width: 300px;
                background-color: skyblue;
            }

            .article_content {
                flex-grow: 1;
                flex-shrink: 0;
                
                .content_head {
                    margin-bottom: 20px;
    
                    .series_title {
                        color: #00000099;
                        font-weight: 700;
                        font-size: 14px;
                    }
                    .article_title {
                        font-size: 22px;
                        font-weight: 600;
                    }
                    .tags {
                        font-size: 12px;
                        color: #1687a7;
                    }
    
                    .desc {
                        font-size: 12px;
                    }
    
                    .info {
                        display: flex;
                        justify-content: space-between;
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
                        <div className='info'>
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
                    <div className='content_comment'>
                        <div className='comment_title'></div>
                        <div className='add_comment'></div>
                        <div className='comment_list'></div>
                    </div>
                </div>
                <aside className='article_aside'>
                    <div className='user_info_block'></div>
                    <div className='series_list'></div>
                    <div className='article_from_users'></div>
                </aside>
            </main>
        </div>
    );
};

export default ArticlePage;
