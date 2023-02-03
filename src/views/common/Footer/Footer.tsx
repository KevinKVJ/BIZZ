import { css } from '@emotion/react';
import { useMemo } from 'react';

const Footer = () => {
    const footerWrapperStyles = useMemo(
        () => css`
            text-align: center;
            /* margin-top: 10px; */
        `,
        []
    );
    return <div css={footerWrapperStyles}>Food Ordering System</div>;
};
export default Footer;
