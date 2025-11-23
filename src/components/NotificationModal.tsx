import { ReactNode } from 'react';

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg max-w-[500px] shadow-xl text-center" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-(--color-primary) mb-4 text-2xl m-0">{title}</h3>
        <div className="text-(--color-secondary) mb-6">{children}</div>
        <button className="px-6 py-3 text-base bg-white text-(--color-primary) border-2 border-(--color-primary) rounded-md cursor-pointer transition-all hover:bg-(--color-primary) hover:text-white" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
};
