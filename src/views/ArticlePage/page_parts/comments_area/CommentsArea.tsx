import { css } from '@emotion/react';

import CommentAvatar from './CommentAvatar';
import CommentItem from './CommentItem';

const CommentsArea = () => {
    const commentsAreaStyle = css`
        min-height: 300px;

        > .comment_title {
            color: #00000099;
            font-family: Inter;
            font-weight: bold;
            font-size: 20px;
            letter-spacing: 0px;
        }
    `;

    const commentContent =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas consectetur, natus voluptatibus et molestiae, incidunt fuga temporibus, placeat illo labore corporis tenetur quos! Sequi possimus modi nihil porro neque!';

    return (
        <div className='comments_area_wrapper' css={commentsAreaStyle}>
            <div className='comment_title'>Comments</div>
            <div className='add_comment'>
                <CommentAvatar />
                <div className='input_area'>
                    <input type='text' placeholder='Leave a comment' />
                </div>
                <div className='post_btn'></div>
            </div>
            <div className='comment_list'>
                <CommentItem
                    username='Alice'
                    contents={commentContent}
                    avatar={<CommentAvatar />}
                />
            </div>
        </div>
    );
};

export default CommentsArea;
