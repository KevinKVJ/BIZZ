import { css } from '@emotion/react';

import AsideSeriesListItem from './AsideSeriesListItem';

const AsideSeriesList = () => {
    const asideSeriesListStyle = css`
        > .title {
            color: #00000099;
            font-weight: bold;
            font-size: 14px;
        }
        > .series_list {
            margin-top: 5px;

            display: flex;
            flex-direction: column;
            row-gap: 4px;
        }
    `;
    const listArr = ['Very long article title', 'Chapter Two', 'Many years later...'];
    return (
        <div className='series_list_wrapper' css={asideSeriesListStyle}>
            <div className='title'>Series</div>
            <div className='series_list'>
                {listArr.map((item, index) => {
                    return (
                        <AsideSeriesListItem
                            key={index}
                            prefix={`${index}`}
                            contents={item}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AsideSeriesList;
