import { useState } from 'react';
import AccessibleModal from '../components/accessible-modal/AccessibleModal';

const AccessibleModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <AccessibleModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default AccessibleModalExample;
