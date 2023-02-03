import type { CSSProperties, PropsWithChildren } from 'react';

export interface FlexProps extends PropsWithChildren {
    className?: string | undefined;
    spacing?: 'small' | 'medium' | 'large' | number | [number, number] | 'unset';
    itemStyle?: string | CSSProperties;
    vertical?: boolean;
    wrap?: boolean;
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-around'
        | 'space-between'
        | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

// const wrapperClass: string = useMemo(() => {
//     /* vertical, wrap    `flex`, vertical ? `flex-col` : undefined, wrap ? `flex-wrap` : undefined */
//     return useClassNameStr([className]);
// }, []);

// const wrapperStyle: CSSProperties = useMemo(() => {
//     const [flexSpacingX, flexSpacingY] = flexSpacing;
//     return {
//         gap: `${flexSpacingX}px ${flexSpacingY}px`,
//     };
// }, [flexSpacing]);
