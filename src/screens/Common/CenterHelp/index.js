import CenterHelp from './CenterHelp';
import HelpWithEmail from './HelpWithEmail';
import {useState} from 'react';
export const [helpWithEmailModal, setHelpWithEmailModal] = useState(false);
export default function Help() {
  return (
    <>
      <CenterHelp />
    </>
  );
}
