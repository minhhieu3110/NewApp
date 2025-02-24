import {CODE_REGEX} from '@constants';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FORM_INPUT} from '../LoginScreen/formConfig';
import {resolver} from '../../../../metro.config';

export const FROM_INPUT = {
  username: 'username',
  password: 'password',
  phone: 'phone',
  fb: 'fb',
  gg: 'gg',
};
const schema = yup
  .object({
    [FROM_INPUT.username]: yup.string().nullable(),
    [FORM_INPUT.password]: yup.string().nullable(),
    [FROM_INPUT.phone]: yup.string().nullable(),
    [FROM_INPUT.fb]: yup.string(),
    [FROM_INPUT.gg]: yup.string(),
  })
  .required();
const formCofig = {
  resolver: yupResolver(schema),
  defaultValus: {
    [FROM_INPUT.username]: '',
    [FROM_INPUT.password]: '',
    [FROM_INPUT.phone]: '',
    [FROM_INPUT.fb]: '',
    [FROM_INPUT.gg]: '',
  },
};
export default formCofig;
