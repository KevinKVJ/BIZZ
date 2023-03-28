import { css } from '@emotion/react';

import ArticlePageAvatar from '../ArticlePageAvatar';

const AsideUserInfoBlock = ({ authorName }: { authorName?: string }) => {
    const asideUserInfoBlockStyle = css`
        > .about_author {
            display: flex;
            align-items: center;

            .author_name {
                color: #000000bf;
                font-family: Inter;
                font-weight: bold;
                font-size: 16px;

                margin-left: 15px;
            }
        }

        > .follow_btn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 36px;

            margin-top: 10px;

            border-radius: 5px;
            background: #1687a7;
            border: 1px solid #ffffff3f;

            color: #ffffff;
            font-size: 16px;
        }
    `;
    return (
        <div className='user_info_block_wrapper' css={asideUserInfoBlockStyle}>
            <div className='about_author'>
                <div className='avatar'>
                    <ArticlePageAvatar />
                </div>
                <div className='author_name'>{authorName}</div>
            </div>
            <div className='follow_btn'>+ Follow</div>
        </div>
    );
};

export default AsideUserInfoBlock;
