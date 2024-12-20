import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {CODE_REGEX, EMAIL_REGEX, PHONE_REGEX} from '@constants';
export const FORM_INPUT = {
  username: 'username',
  numberPhone: 'numberPhone',
  password: 'password',
  gg: 'gg',
  fb: 'fb',
};
const schema = yup
  .object({
    [FORM_INPUT.username]: yup
      .string()
      .nullable()
      .required('CheckForm.username')
      .matches(EMAIL_REGEX, 'CheckForm.regexName'),
    [FORM_INPUT.numberPhone]: yup
      .string()
      .nullable()
      .required('CheckForm.numberPhone')
      .matches(PHONE_REGEX, 'CheckForm.regexPhone'),
    [FORM_INPUT.password]: yup
      .string()
      .nullable()
      .required('CheckForm.password'),
  })
  .required();
const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_INPUT.username]: '',
    [FORM_INPUT.numberPhone]: '',
    [FORM_INPUT.password]: '',
  },
};
export default formConfig;
