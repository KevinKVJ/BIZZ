import { css } from '@emotion/react';

const AsideSeriesListItem = ({
    contents,
    prefix,
}: {
    contents?: string;
    prefix?: string;
}) => {
    const asideSeriesListItemStyle = css`
        display: flex;
        align-items: center;
        height: 30px;
        padding-left: 5px;

        color: #000000bf;
        font-weight: bold;
        font-size: 14px;

        :hover {
            color: #ffffff;
            font-weight: bold;
            font-size: 14px;

            background: #1687a7;
            cursor: pointer;
        }

        :focus {
            background-color: #e2e2e2;
        }

        > .contents {
            margin-left: 5px;
        }
    `;
    return (
        <div className='aside_series_list_item' css={asideSeriesListItemStyle}>
            <div className='prefix'>{`#${prefix}`}</div>
            <div className='contents'>{contents}</div>
        </div>
    );
};

export default AsideSeriesListItem;
