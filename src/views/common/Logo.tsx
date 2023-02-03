import { css } from '@emotion/react';
import { useMemo } from 'react';

const Logo = () => {
    const logoStyle = useMemo(
        () => css`
            width: 150px;
            height: 50px;
            background-color: skyblue;
            border-radius: 5px;
        `,
        []
    );
    return <div css={logoStyle}></div>;
};

export default Logo;
