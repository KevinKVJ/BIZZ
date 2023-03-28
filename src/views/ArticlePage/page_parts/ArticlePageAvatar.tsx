import { css } from '@emotion/react';
import { FC } from 'react';

interface ICommentAvatar {
    background?: string;
}

const ArticlePageAvatar: FC<ICommentAvatar> = () => {
    const ArticlePageAvatarStyle = css`
        width: 50px;
        height: 50px;
        border-radius: 1000px;
        background-color: #dd0a35;
    `;
    return <div className='article_page_wrapper' css={ArticlePageAvatarStyle}></div>;
};

export default ArticlePageAvatar;
