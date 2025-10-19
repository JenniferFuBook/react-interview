import { useRef, useEffect } from 'react';
import './AccessibleModal.css';

type AccessibleModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AccessibleModal = ({ isOpen, onClose }: AccessibleModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null); // Reference the <dialog> element

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal(); // Open the native <dialog> in modal mode
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }

    const handleClose = () => onClose(); // Call onClose when the dialog closes
    dialog.addEventListener('close', handleClose); // Listen for the close event

    // Cleanup event listener on unmount or when dependencies change
    return () => {
      dialog.removeEventListener('close', handleClose);
    };
  }, [isOpen, onClose]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="modal-title" // Associate a title with modal for screen readers
      aria-describedby="modal-desc" // Associate a description with modal for screen readers
      className="modal-content"
    >
      <h2 id="modal-title">Modal Title</h2>

      {/* Provide screen reader instructions (visually hidden) */}
      <p id="modal-desc" className="sr-only">
        Press Escape or "Close" to dismiss this dialog.
      </p>

      <p>Modal content here.</p>
      <button>Button 1</button>
      <button>Button 2</button>
      <button onClick={onClose}>Close</button>
    </dialog>
  );
};

export default AccessibleModal;
