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
    const commentItemStyle = css`
        display: flex;

        > .user_info_wrapper {
            margin-left: 20px;

            display: flex;
            flex-direction: column;
            row-gap: 10px;

            .user_name {
                color: #000000bf;
                font-weight: bold;
                font-size: 16px;
            }

            .comment_content {
                color: #000000bf;
                font-size: 14px;
            }

            .post_info {
                display: flex;
                column-gap: 6px;
                > div {
                    color: #00000099;
                    font-weight: bold;
                    font-size: 10px;
                }
            }
        }

        > .comment_content {
        }
    `;
    return (
        <div className='comment_wrapper' css={commentItemStyle}>
            <div className='user_avatar'>{avatar}</div>
            <div className='user_info_wrapper'>
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
