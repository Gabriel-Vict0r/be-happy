import React from "react";


export const cnpjMask = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1/$2')
        .replace(/(\d{4})(\d{1,2})/, '$1-$2')
}
export const phoneMask = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    return value.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
}
export type MaskTypes = 'cnpj' | 'phone';

type Masks = Record<
    MaskTypes,
    (event: React.FormEvent<HTMLInputElement>) => string
>

const masks: Masks = {
    cnpj: cnpjMask,
    phone: phoneMask
}

export default masks;