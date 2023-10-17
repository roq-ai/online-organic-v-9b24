import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().integer().required(),
  stock: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
