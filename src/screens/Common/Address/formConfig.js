import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {resolver} from '../../../../metro.config';

export const FORM_INPUT = {
  name: 'name',
  phone: 'phone',
  province: 'province',
  district: 'district',
  ward: 'ward',
  location: 'location',
};
const schema = yup
  .object({
    [FORM_INPUT.name]: yup.string().nullable(),
    [FORM_INPUT.phone]: yup.string().nullable(),
    [FORM_INPUT.province]: yup.string().nullable(),
    [FORM_INPUT.district]: yup.string().nullable(),
    [FORM_INPUT.ward]: yup.string().nullable(),
    [FORM_INPUT.location]: yup.string().nullable(),
  })
  .required();
const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_INPUT.name]: '',
    [FORM_INPUT.phone]: '',
    [FORM_INPUT.province]: null,
    [FORM_INPUT.district]: null,
    [FORM_INPUT.ward]: null,
    [FORM_INPUT.location]: '',
  },
};
export default formConfig;
