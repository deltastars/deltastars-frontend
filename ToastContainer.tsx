
import React from 'react';
import { useToast } from './ToastContext';
import { Toast } from './lib/Toast';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 z-[110] flex flex-col items-end px-4 py-6 space-y-4 pointer-events-none sm:p-6"
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={removeToast} />
      ))}
    </div>
  );
};
