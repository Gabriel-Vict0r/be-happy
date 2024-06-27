import * as yup from 'yup'
import { Iorphanage } from '@/interfaces/Iorphanage'
import { IPosition } from '@/interfaces/IForms';
import { ImageList } from '@/types/All';
import { IHour } from '@/interfaces/IHour';
import { ptForm } from 'yup-locale-pt';
yup.setLocale(ptForm);

type Tposition = {
    latitude: number;
    longitude: number;
}
export interface OrphanageForm {
    name: string;
    //position: Tposition;
    about: string;
    phone: string;
    instructions: string;
    pictures: any; //é feio, mas fui obrigado a colocar pq o yup n sabe ler tipo file
    hours: IHour;
    acept_weekend: boolean | undefined;
}

const supportedFormats = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];

const validateFormatImage = (filename: any) => {
    return filename && supportedFormats.includes(filename.toLowerCase())
}
export const schema: yup.ObjectSchema<OrphanageForm> = yup.object({
    name: yup.string().required().min(3),
    // position: yup.object().shape({
    //     latitude: yup.number().required(),
    //     longitude: yup.number().required(),
    // }).required(),
    about: yup.string().required().max(300),
    phone: yup.string().required().length(15),
    instructions: yup.string().required().max(300),
    pictures: yup.mixed().required(),
    //.test('validate-format-image', 'formato de imagem incorreto',
    //(value) => validateFormatImage(value)),
    hours: yup.object().shape({
        initial_hour: yup.string().required(),
        final_hour: yup.string().required()
    }),
    acept_weekend: yup.boolean(),
})