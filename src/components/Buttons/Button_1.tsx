import classnames from 'classnames';
import { CSSProperties, FC, HTMLProps, PropsWithChildren, useMemo } from 'react';

import styles from './button.module.scss';

export interface IButtonProps extends PropsWithChildren {
    size?: 'small' | 'medium' | 'large' | 'x-large';
    type?: 'success' | 'warning' | 'error' | 'info';
    label?: string;
    fontSize?: number;
    radium?: number;
    onClick?: HTMLProps<HTMLDivElement>['onClick'];
    onFocus?: HTMLProps<HTMLDivElement>['onFocus'];
    onBlur?: HTMLProps<HTMLDivElement>['onBlur'];
}

const Button: FC<IButtonProps> = ({
    size = 'x-large',
    type = 'default',
    label = 'the button',
    fontSize = 16,
    radium = 6,
    onClick,
    onFocus,
    onBlur,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            '--button_radium': `${radium}px`,
        } as CSSProperties;
    }, [size, type, radium, fontSize]);
    return (
        <div
            style={buttonStyles}
            className={classnames('button-wrapper', styles['button-wrapper'])}
            tabIndex={-1}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            // {...props}
        >
            <div className={classnames('button-content', styles['button-content'])}>
                {label}
            </div>
        </div>
    );
};
export default Button;
