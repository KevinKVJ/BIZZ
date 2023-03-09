import { css } from '@emotion/react';

const ColumnSplitLine = () => {
    const columnSplitLineStyles = css`
        width: 0;
        border-right: 1px solid #fff;
        height: 30px;

        margin: 0 10px;
    `;
    return <div css={columnSplitLineStyles}></div>;
};

export default ColumnSplitLine;
