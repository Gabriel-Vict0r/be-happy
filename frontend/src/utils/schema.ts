import * as yup from 'yup'
import { Iorphanage } from '@/interfaces/Iorphanage'
import { IPosition } from '@/interfaces/IForms';
import { ImageList } from '@/types/All';
import { IHour } from '@/interfaces/IHour';
import { ptForm } from 'yup-locale-pt';
yup.setLocale(ptForm);
export interface OrphanageForm {
    nome: string;
    //posicao: IPosition;
    cnpj: string;
    sobre: string;
    telefone: string;
    instrucoes: string;
    imagens: any; //é feio, mas fui obrigado a colocar pq o yup n sabe ler tipo file
    horario_visitas: IHour;
    abrir_fim_de_semana: boolean | undefined;
}

const supportedFormats = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];

const validateFormatImage = (filename: any) => {
    return filename && supportedFormats.includes(filename.toLowerCase())
}
export const schema: yup.ObjectSchema<OrphanageForm> = yup.object({
    nome: yup.string().required().min(3),
    // posicao: yup.object().shape({
    //     lat: yup.number().required(),
    //     lng: yup.number().required(),
    // }).required(),
    cnpj: yup.string().required().length(18),
    sobre: yup.string().required().max(300),
    telefone: yup.string().required().length(15),
    instrucoes: yup.string().required().max(300),
    imagens: yup.mixed().required(),
    //.test('validate-format-image', 'formato de imagem incorreto',
    //(value) => validateFormatImage(value)),
    horario_visitas: yup.object().shape({
        initial_hour: yup.string().required(),
        final_hour: yup.string().required()
    }),
    abrir_fim_de_semana: yup.boolean(),
})