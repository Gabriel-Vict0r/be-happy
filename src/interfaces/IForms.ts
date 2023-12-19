export interface ISubTitle {
    subTitle: string;
}

export interface IInput {
    label: string;
    type?: "text" | "phone" | "file" | "checkbox" | "submit"
    name: string;
}