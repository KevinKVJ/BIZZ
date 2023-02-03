import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

interface articleSectionProps extends PropsWithChildren {
    title?: string;
    className?: string;
}

const ArticleSection = ({
    title = 'Title',
    className,
    children,
}: articleSectionProps) => {
    const articleSectionStyle = css`
        padding: 20px 30px;
        > .article_section-header {
            margin-bottom: 30px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            .title {
                font-size: 20px;
                font-weight: 700;
            }

            .showall_link {
                color: #1687a7;
                font-weight: 700;

                a {
                    cursor: pointer;
                }
            }
        }

        > .articles_container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
            grid-gap: 15px;
        }
    `;
    return (
        <div className={`article_section-wrapper ${className}`} css={articleSectionStyle}>
            <div className='article_section-header'>
                <div className='title'>{title}</div>
                <div className='showall_link'>
                    <a>Show All</a>
                </div>
            </div>
            <div className='articles_container'>{children}</div>
        </div>
    );
};

export default ArticleSection;
