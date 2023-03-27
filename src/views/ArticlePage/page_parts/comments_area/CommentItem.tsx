import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';

interface ICommentItem {
    username?: string;
    contents?: string;
    postDate?: string;
    postTime?: string;
    avatar?: ReactNode;
}

const CommentItem: FC<ICommentItem> = ({
    username,
    contents,
    postDate,
    postTime,
    avatar,
}) => {
    const commentItemStyle = css``;
    return (
        <div className='comment_wrapper' css={commentItemStyle}>
            <div className='user_avatar'>{avatar}</div>
            <div>
                <div className='user_name'>{username}</div>
                <div className='comment_content'>{contents}</div>
                <div className='comment_post_meta'>
                    <div className='post_info'>
                        <div className='post_info_date'>{postDate}</div>
                        <div className='post_info_time'>{postTime}</div>
                    </div>
                    <div className='reply_btn'></div>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
