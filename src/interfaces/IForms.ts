import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

export interface ISubTitle {
    subTitle: string;
}

type values = string | number | readonly string[] | undefined
export interface IInput {
    label: string;
    type?: "text" | "phone" | "file" | "checkbox" | "submit"
    name: string;
    value?: values;
    handleInput?: React.ChangeEventHandler<HTMLInputElement>;
}
export interface ITextArea extends IInput {
    handleTextArea: React.ChangeEventHandler<HTMLTextAreaElement>
}
export interface IFields<T> {
    [index: string]: (e: T) => void;
}