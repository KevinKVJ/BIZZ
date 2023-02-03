import { css } from '@emotion/react';
/* CSSProperties, */
import type { FC } from 'react';
import React, { useMemo } from 'react';

import { useFlexSpacings, useItemStyle } from './FlexLayout_CustomHooks';
import type { FlexProps } from './FlexLayout_Types';

const Flex: FC<FlexProps> = ({
    children,
    className,
    spacing = 'medium',
    itemStyle,
    vertical,
    wrap,
    justifyContent = 'flex-start',
    alignItems = 'center',
    ...props
}) => {
    const flexSpacing = useFlexSpacings(spacing);
    const childStyle = useItemStyle(itemStyle);

    const wrapperCss = useMemo(() => {
        const [flexSpacingX, flexSpacingY] = flexSpacing;
        return css`
            /* width:fit-content; */
            display: flex;
            flex-direction: ${vertical ? 'column' : 'row'};
            flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
            justify-content: ${justifyContent};
            align-items: ${alignItems};
            gap: ${flexSpacingX === 'unset'
                ? flexSpacingX
                : `${flexSpacingX}px ${flexSpacingY}px`};
            flex: 0 0 auto;
        `;
    }, [vertical, wrap, justifyContent, alignItems, flexSpacing]);

    const childCss = useMemo(
        () => css`
            /* width: 100%; */
            flex: 0 0 auto;
        `,
        []
    );

    return (
        <>
            <div className={className} css={wrapperCss} {...props}>
                {React.Children.toArray(children).map((child, index, oriChilds) => {
                    return (
                        <div
                            key={index}
                            css={childCss}
                            className='flexLayout_Child'
                            style={childStyle}
                        >
                            {child}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Flex;
