import { css } from '@emotion/react';
import { FC } from 'react';

interface ICommentAvatar {
    background?: string;
}

const CommentAvatar: FC<ICommentAvatar> = () => {
    const commentAvatarStyle = css`
        width: 50px;
        height: 50px;
        border-radius: 1000px;
        background-color: #dd0a35;
    `;
    return <div className='comment_avatar_wrapper' css={commentAvatarStyle}></div>;
};

export default CommentAvatar;
