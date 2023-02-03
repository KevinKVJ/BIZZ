import {
    ChangeEvent,
    Children,
    cloneElement,
    FC,
    PropsWithChildren,
    ReactElement,
    ReactNode,
    useCallback,
} from 'react';

// import { ReactElement } from 'react';
import Radio, { IRadio } from './Radio';
// import { IRadioProps } from './RadioTypes';
// import { IRadioProps } from './RadioTypes';

interface IRadioGroup extends PropsWithChildren {
    name: string;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    // children:
    //     | ReactElement<IRadioProps, typeof Radio>
    //     | ReactElement<IRadioProps, typeof Radio>[];
}
function isReactElementType(ele: ReactNode): ele is ReactElement {
    return (
        // typeof (ele as ReactElement).type !== 'string' &&
        typeof (ele as ReactElement).type !== 'undefined'
    );
}
function isRadioType(ele: ReactNode): ele is ReactElement<IRadio, typeof Radio> {
    return (
        // typeof (ele as ReactElement).type !== 'string' &&
        typeof (ele as ReactElement<IRadio, typeof Radio>).type !== typeof Radio
    );
}
const RadioGroup: FC<IRadioGroup> = ({ children, name, onChange, value }) => {
    const checkChildren = useCallback(
        (children: ReactNode): ReactNode =>
            Children.map(children, (child, index) => {
                if (isReactElementType(child)) {
                    if (isRadioType(child)) {
                        return cloneElement(child, {
                            name,
                            key: index,
                            onChange,
                            // onClick: onChange,
                            checked: child.props.value === value,
                        });
                    } else {
                        return child.props.children
                            ? cloneElement(
                                  child,
                                  child.props,
                                  checkChildren(child.props.children)
                              )
                            : child;
                    }
                }
                return child;
            }),
        [children]
    );

    // const RGChildren = Children.map(children, (child, index) => {
    //     if (isReactElementType(child)) {
    //         // console.log('type: ', child.type === Radio);
    //         // console.log('type of Radio: ', typeof Radio);

    //         // return;
    //         return cloneElement(child, {
    //             name,
    //             key: index,
    //             onChange,
    //             onClick: onChange,
    //             checked: child.props.value === value,
    //         });
    //     } else {
    //         console.warn('Child Type is not Correct!');
    //         return child;
    //     }
    //     // console.log(child.props);
    // });

    console.log(checkChildren(children));

    /* {Children.map(children, (Child, index) => {
                if (Child.type !== Radio) {
                    console.warn('Child Type is not Correct!');
                    return;
                }
                Child();
            })} */
    return <div>{checkChildren(children)}</div>;
};
export default RadioGroup;
