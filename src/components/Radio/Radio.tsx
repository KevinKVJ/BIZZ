import { css } from '@emotion/react';
import { FC, HTMLProps } from 'react';

export interface IRadio {
    label?: string;
    name?: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: HTMLProps<HTMLInputElement>['onChange'];
}

const Radio: FC<IRadio> = ({ name, value, onChange, checked, disabled, label }) => {
    const radioWrapper = css`
        display: flex;
        align-items: center;
        height: 20px;

        .radio-title {
            padding-bottom: 1px;
            margin-left: 5px;
        }
    `;
    return (
        <div className='radio-wrapper' css={radioWrapper}>
            <input
                type='radio'
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
                disabled={disabled}
            />
            <div className='radio-title'>{label}</div>
        </div>
    );
};
export default Radio;
