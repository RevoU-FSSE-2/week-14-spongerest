import * as yup from 'yup'

export const statusOptions = [
    'Aktiv',
    'Tidak Aktiv',
];

export const initialValues = {
    name: '',
    status: '',
    action: '',
}

export const validationSchema = yup.object({
    name: yup.string().required(),
    status: yup.string().required('Status is required')
})