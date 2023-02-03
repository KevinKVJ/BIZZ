import { CSSProperties, useMemo } from 'react';

import useParseStyles from '@/utils/parseStyles';

import { FlexProps } from './FlexLayout_Types';

export const useClassNameStr = (classStringArray: (string | undefined)[]) => {
    return classStringArray
        .filter(value => value !== undefined)
        .join(' ')
        .trim();
};

// const flexSpacingStrategies = {
//     NumVal:(spacing:number) => String(spacing),
//     Row_Col:(spacing:[number,number]) => spacing.map(val => `${val}px`).join(' '),
//     [/[abc]/]:(spacing:string) => spacing
// }
type Spacing = FlexProps['spacing'];
export const useFlexSpacings = (spacing: Spacing) =>
    useMemo(() => {
        let retVal: [string, string];
        switch (spacing) {
            case 'small':
                retVal = ['10', '10'];
                break;
            case 'medium':
                retVal = ['20', '20'];
                break;
            case 'large':
                retVal = ['30', '30'];
                break;
            default:
                // eslint-disable-next-line no-case-declarations
                const spacVal = String(spacing).split(',');
                retVal = (spacVal.length === 1 ? [spacVal[0], spacVal[0]] : spacVal) as [
                    string,
                    string
                ];
                break;
        }
        return retVal;
    }, [spacing]);

type ItemStyle = FlexProps['itemStyle'];
export const useItemStyle = (itemStyle: ItemStyle) =>
    useMemo(
        () => (typeof itemStyle === 'string' ? useParseStyles(itemStyle) : itemStyle),
        [itemStyle]
    );
