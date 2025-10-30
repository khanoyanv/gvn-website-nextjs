import { ReactNode } from 'react';
import styles from './NotificationModal.module.css';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const NotificationModal = ({
  isOpen,
  onClose,
  title,
  children,
}: NotificationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>{children}</div>
        <button className={styles.button} onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
};
