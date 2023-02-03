import classnames from 'classnames';
import {
    ButtonHTMLAttributes,
    CSSProperties,
    FC,
    // FocusEventHandler,
    // HTMLProps,
    // MouseEventHandler,
    PropsWithChildren,
    useMemo,
} from 'react';

import styles from './button.module.scss';
/* 
    1. background color
    2. size
    3. Any type of Button styles
*/
interface IButtonBaseProps extends PropsWithChildren {
    size?: 'small' | 'medium' | 'large' | 'x-large';
    type?: 'success' | 'warning' | 'error' | 'info';
    label?: string;
    fontSize?: number;
    radium?: number;
    className?: string;
    // onClick?: MouseEventHandler;
    // onFocus?: FocusEventHandler;
    // onBlur?: FocusEventHandler;
}

type ButtonType = IButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonType> = ({
    size = 'x-large',
    type = 'default',
    label = 'the button',
    fontSize = 16,
    // radium = 6,
    className,
    ...props
}) => {
    const buttonStyles = useMemo(() => {
        const sizeMap = {
            small: 0.35,
            medium: 0.5,
            large: 0.65,
            'x-large': 0.8,
        };
        const typeMap = {
            success: '#A0D347',
            info: '#3C8FFD',
            warning: '#FFDE1E',
            error: '#FF0D0C',
            default: '#FE8A8A',
        } as { [key: string]: string };
        return {
            '--button_bkg-color': typeMap[type],
            '--button_font-size': `${fontSize}px`,
            '--button_size': sizeMap[size],
            // '--button_radium': `${radium}px`,
        } as CSSProperties;
        /* radium, */
    }, [size, type, fontSize]);

    const baseButtonClasses = classnames(
        'button-wrapper',
        className,
        styles['base-button']
    );
    const baseButtonContentClasses = classnames(
        'button-content',
        styles['base-button_content']
    );

    return (
        <button style={buttonStyles} className={baseButtonClasses} {...props}>
            <span className={baseButtonContentClasses}>{label}</span>
        </button>
    );
};
export default Button;
