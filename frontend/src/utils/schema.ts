import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup.string().required().min(3),
    cnpj: yup.string().required().length(18),
    about: yup.string().required().max(300),
    phone: yup.string().required().length(15),
    instructions: yup.string().required().max(300),
})