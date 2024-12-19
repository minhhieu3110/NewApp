/* eslint-disable no-bitwise */
import {_onUnmount} from 'redux/actions';

export const handleFormData = (objectBody = {}) => {
  if (objectBody instanceof FormData) {
    return objectBody;
  }
  const formData = new FormData();
  for (const [key, value] of Object.entries(objectBody)) {
    if (Array.isArray(value)) {
      value.forEach(v => {
        if (v || v === 0) {
          formData.append(key, v);
        }
      });
    } else if (value || value === 0) {
      formData.append(key, value);
    }
  }
  return formData;
};
