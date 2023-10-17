import * as yup from 'yup';

export const deliveryValidationSchema = yup.object().shape({
  status: yup.string().required(),
  address: yup.string().required(),
  contact_number: yup.string().required(),
  user_id: yup.string().nullable().required(),
  order_id: yup.string().nullable().required(),
});
