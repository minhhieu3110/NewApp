import {CODE_REGEX} from '@constants';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const FORM_INPUT = {
  userName: 'userName',
  phone: 'phone',
  pass: 'pass',
  fb: 'fb',
  gg: 'gg',
  ap: 'ap',
};

const schema = yup
  .object({
    [FORM_INPUT.userName]: yup
      .string()
      .nullable()
      .required('CheckForm.userName')
      .matches(CODE_REGEX, 'CheckForm.regexName'),

    [FORM_INPUT.pass]: yup.string().nullable().required('CheckForm.pass'),
    [FORM_INPUT.fb]: yup.string(),
    [FORM_INPUT.gg]: yup.string(),
    [FORM_INPUT.ap]: yup.string(),
  })
  .required();

const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_INPUT.userName]: '',
    [FORM_INPUT.pass]: '',
    [FORM_INPUT.fb]: '',
    [FORM_INPUT.gg]: '',
    [FORM_INPUT.ap]: '',
  },
};

export default formConfig;
