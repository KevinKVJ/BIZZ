import { CSSProperties, FC, MouseEventHandler, useEffect, useMemo } from 'react';

/* HTMLProps, */
import Button from '@/components/Buttons/Button';
import styles from '@/components/Radio/radio_button.module.scss';

interface IRadioButtonProps {
    name?: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    changeValue?: (val: string) => void;
}

const RadioButton: FC<IRadioButtonProps> = ({ value, changeValue, checked }) => {
    const handleClick: MouseEventHandler = e => {
        // e.nativeEvent.preventDefault();
        changeValue?.(value);
        return e.target;
    };

    const radioStyles = useMemo(
        () =>
            ({
                '--radio-button-border': checked ? 'none' : '1px solid #000',
            } as CSSProperties),
        [checked]
    );
    // useEffect(

    return (
        <div className='radio-button-wrapper' style={radioStyles}>
            <Button
                onClick={handleClick}
                className={styles['radio-button']}
                onMouseDown={e => {
                    e.preventDefault();
                }}
            />
        </div>
    );
};

export default RadioButton;
