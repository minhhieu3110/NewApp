import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const FORM_INPUT = {
  username: 'username',
  password: 'password',
  phone: 'phone',
  fb: 'fb',
  gg: 'gg',
};
const schema = yup
  .object({
    [FORM_INPUT.username]: yup.string().nullable(),
    [FORM_INPUT.password]: yup.string().nullable(),
    [FORM_INPUT.phone]: yup.string().nullable(),
    [FORM_INPUT.fb]: yup.string(),
    [FORM_INPUT.gg]: yup.string(),
  })
  .required();
const formCofig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_INPUT.username]: '',
    [FORM_INPUT.password]: '',
    [FORM_INPUT.phone]: '',
    [FORM_INPUT.fb]: '',
    [FORM_INPUT.gg]: '',
  },
};
export default formCofig;
