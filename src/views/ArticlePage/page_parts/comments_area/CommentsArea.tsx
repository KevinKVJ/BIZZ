import { css } from '@emotion/react';

import ArticlePageAvatar from '../ArticlePageAvatar';
import CommentItem from './CommentItem';

const CommentsArea = () => {
    const commentsAreaStyle = css`
        min-height: 300px;

        > .add_comment {
            margin: 20px 0;

            display: flex;
            align-items: center;
            column-gap: 20px;
            .post_btn {
                background-color: #4da1b9;
                display: flex;
                justify-content: center;
                align-items: center;

                width: 60px;
                height: 40px;
                border-radius: 5px;

                color: #ffffff;
                font-weight: bold;
                font-size: 16px;
            }
        }

        > .comment_title {
            color: #00000099;
            font-family: Inter;
            font-weight: bold;
            font-size: 20px;
            letter-spacing: 0px;
        }

        > .comment_list {
            display: flex;
            flex-direction: column;
            row-gap: 20px;
        }
    `;

    const aliceCommentContent =
        'I have found that under load my CPU was not always hitting max turbo frequency, in particular when using one/two cores only. For instance, when running sdfsdf(1 core, test #1) my CPU is limited to about 3500 MHz over the theoretica';

    const alicePostDate = 'November 26, 2022';
    const alicePostTime = '3:45 PM';
    return (
        <div className='comments_area_wrapper' css={commentsAreaStyle}>
            <div className='comment_title'>Comments</div>
            <div className='add_comment'>
                <ArticlePageAvatar />
                <div className='input_area'>
                    <input type='text' placeholder='Leave a comment' />
                </div>
                <div className='post_btn'>Post</div>
            </div>
            <div className='comment_list'>
                <CommentItem
                    username='Alice'
                    contents={
                        'I have found that under load my CPU was not always hitting max turbo frequency, in particular when using one/two cores only. For instance, when running sdfsdf(1 core, test #1) my CPU is limited to about 3500 MHz over the theoretica'
                    }
                    avatar={<ArticlePageAvatar />}
                    postDate={'November 26, 2022'}
                    postTime={'3:45 PM'}
                />
                <CommentItem
                    username='Bob'
                    contents={aliceCommentContent}
                    avatar={<ArticlePageAvatar />}
                    postDate={alicePostDate}
                    postTime={alicePostTime}
                />
            </div>
        </div>
    );
};

export default CommentsArea;
