import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
export const FORM_LOGIN = {
  username: 'username',
  password: 'password',
};
const schema = yup
  .object({
    [FORM_LOGIN.username]: yup
      .string()
      .nullable()
      .required('Login.username_empty_error'),
    [FORM_LOGIN.password]: yup
      .string()
      .nullable()
      .required('Login.password_empty_error'),
  })
  .required();

const formConfig = {
  resolver: yupResolver(schema),
  mode: 'all',
  defaultValues: {
    [FORM_LOGIN.username]: '',
    [FORM_LOGIN.password]: '',
  },
};
export default formConfig;
