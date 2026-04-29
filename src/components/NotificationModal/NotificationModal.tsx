import { ReactNode, useEffect, useId, useRef } from 'react';

import { CLOSE_ARIA_LABEL, CONFIRM_LABEL } from './consts/content';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const NotificationModal = ({
  isOpen,
  onClose,
  title,
  children,
}: NotificationModalProps) => {
  const titleId = useId();
  const confirmRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current =
      typeof document !== 'undefined'
        ? (document.activeElement as HTMLElement | null)
        : null;
    confirmRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-9999"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg max-w-[500px] shadow-xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          id={titleId}
          className="text-(--color-primary) mb-4 text-2xl m-0"
        >
          {title}
        </h3>
        <div className="text-(--color-secondary) mb-6">{children}</div>
        <button
          ref={confirmRef}
          type="button"
          aria-label={CLOSE_ARIA_LABEL}
          className="px-6 py-3 text-base bg-white text-(--color-primary) border-2 border-(--color-primary) rounded-md cursor-pointer transition-all hover:bg-(--color-primary) hover:text-white"
          onClick={onClose}
        >
          {CONFIRM_LABEL}
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
