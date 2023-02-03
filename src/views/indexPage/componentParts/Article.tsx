import { css } from '@emotion/react';

const Article = () => {
    const articleStyle = css`
        /* width: fit-content; */
        padding: 10px;

        background-color: #0000000c;

        .series_name {
            color: #00000099;
            font-weight: 700;
        }

        .chapter_title {
            font-weight: 700;
        }

        .author_info {
            display: flex;
            align-items: center;
            column-gap: 5px;

            margin-top: 10px;
            margin-bottom: 20px;
        }

        .author_avatar {
            width: 20px;
            height: 20px;

            border-radius: 100px;
            background-color: skyblue;
        }

        .author_name {
            font-weight: 700;
            font-size: 13px;
            color: #00000099;
        }

        .tags {
            font-size: 14px;
            color: #014955;
        }

        .likes_and_stats {
            display: flex;
            align-items: center;

            margin-top: 10px;
            color: #0000007f;
            font-size: 14px;
            .likes {
                display: flex;
                align-items: center;
                column-gap: 5px;

                margin-right: 5px;

                .like_icon {
                    width: 18px;
                    height: 18px;
                    border-radius: 100px;
                    background-color: skyblue;
                }
            }
        }
    `;
    return (
        <div className='article_wrapper' css={articleStyle}>
            <div className='series_name'>Series</div>
            <div className='chapter_title'>Chapter Title</div>
            <div className='author_info'>
                <div className='author_avatar'></div>
                <div className='author_name'>Mr. Beaver</div>
            </div>
            <div className='tags'>#Gaming</div>
            <div className='likes_and_stats'>
                <div className='likes'>
                    <div className='like_icon'></div>
                    <div className='like_amount'>42k</div>
                </div>
                <div className='stats'>4000 character(s)</div>
            </div>
        </div>
    );
};

export default Article;
