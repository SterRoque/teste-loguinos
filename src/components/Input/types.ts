import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { icons } from '.';

export type IconTypes = keyof typeof icons;

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
   type?: HTMLInputTypeAttribute;
};
