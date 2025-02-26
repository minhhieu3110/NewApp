/* eslint-disable no-bitwise */
import {_onUnmount} from 'redux/actions';

// export const handleFormData = (objectBody = {}) => {
//   if (objectBody instanceof FormData) {
//     return objectBody;
//   }
//   const formData = new FormData();
//   for (const [key, value] of Object.entries(objectBody)) {
//     if (Array.isArray(value)) {
//       value.forEach(v => {
//         if (v || v === 0) {
//           formData.append(key, v);
//         }
//       });
//     } else if (value || value === 0) {
//       formData.append(key, value);
//     }
//   }
//   return formData;
// };
export const handleFormData = (objectBody = {}) => {
  // Return if already FormData
  if (objectBody instanceof FormData) {
    return objectBody;
  }

  const formData = new FormData();

  for (const [key, value] of Object.entries(objectBody)) {
    // Skip undefined values (keep null, 0, false, etc.)
    if (value === undefined) continue;

    // Handle array values
    if (Array.isArray(value)) {
      value.forEach(item => {
        // Use key[] syntax if needed (common in PHP/APIs)
        formData.append(`${key}[]`, item);
        // Or use the same key for repeated entries:
        // formData.append(key, item);
      });
    }
    // Handle File/Blob objects (common in React Native file uploads)
    else if (value instanceof File || value instanceof Blob) {
      formData.append(key, value, value.name || 'file');
    }
    // Handle nested objects (convert to JSON string)
    else if (typeof value === 'object' && value !== null) {
      formData.append(key, JSON.stringify(value));
    }
    // Handle primitives (0, false, strings, etc.)
    else {
      formData.append(key, value);
    }
  }

  return formData;
};
