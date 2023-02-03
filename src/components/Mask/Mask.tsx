import { css } from '@emotion/react';
import { PropsWithChildren, useMemo } from 'react';
// import { createPortal } from 'react-dom';

/* Mask PropTypes */
interface maskProps extends PropsWithChildren {
    color?: string;
    zIndex?: string | number;
    onClick?: () => void;
}

/* Mask Comp */
const Mask = ({
    color = 'rgb(233, 233, 234, 0.5)',
    zIndex = 500,
    onClick,
}: maskProps) => {
    const maskStyle = useMemo(
        () => css`
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: ${zIndex};
            background-color: ${color};
        `,
        [color]
    );

    return <div css={maskStyle} onClick={onClick} />;
};

export default Mask;
