import { ChangeEvent } from 'react';

export interface IRadioProps {
    name?: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface IRadioButtonProps {
    name?: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
