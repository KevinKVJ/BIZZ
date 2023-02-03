import type { SVGProps } from 'react';
import { PropsWithChildren } from 'react';

interface SvgProps extends PropsWithChildren<SVGProps<SVGSVGElement>> {
    name: string;
    prefix?: string;
    color?: string;
}

/* {name,prefix,color,...props}:{name:string,prefix:string,color:string} & React.SVGProps<SVGSVGElement>  */
const SVGIcon = ({ name, prefix = `icon`, color, ...props }: SvgProps) => {
    const symbolId = `#${prefix}-${name}`;
    return (
        <svg {...props} aria-hidden='true'>
            <use href={symbolId} fill={color} />
        </svg>
    );
};

export default SVGIcon;
