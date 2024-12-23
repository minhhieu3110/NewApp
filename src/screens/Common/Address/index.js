import AddressSaved from './AddressSaved';
import Add_Address from './AddAddress';
import Edit_Address from './EditAddress';
import {useState} from 'react';
export const [addAddressModal, setAddAddressModal] = useState(false);
export const [editAddressModal, setEditAddressModal] = useState(false);
export default function Address() {
  return (
    <>
      <AddressSaved />
    </>
  );
}
