import {CODE_REGEX} from '@constants';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {resolver} from '../../../../metro.config';

export const FORM_INPUT = {
  username: 'username',
  password: 'password',
  fb: 'fb',
  gg: 'gg',
};
const schema = yup
  .object({
    [FORM_INPUT.username]: yup.string().nullable(),
    [FORM_INPUT.password]: yup.string().nullable(),
    [FORM_INPUT.fb]: yup.string(),
    [FORM_INPUT.fb]: yup.string(),
  })
  .required();
const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_INPUT.username]: '',
    [FORM_INPUT.password]: '',
    [FORM_INPUT.fb]: '',
    [FORM_INPUT.gg]: '',
  },
};
export default formConfig;
