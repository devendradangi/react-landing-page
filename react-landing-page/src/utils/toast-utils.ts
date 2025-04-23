import { toast } from 'react-hot-toast';

export const showSuccessToast = (message: string) => {
    toast.success(message, {
        style: {
            background: '#d1fae5',
            color: '#065f46',
        },
        iconTheme: {
            primary: '#10b981',
            secondary: '#ecfdf5',
        },
    });
};

export const showErrorToast = (message: string) => {
    toast.error(message, {
        style: {
            background: '#fee2e2',
            color: '#991b1b',
        },
        iconTheme: {
            primary: '#ef4444',
            secondary: '#fef2f2',
        },
    });
};

export const showInfoToast = (message: string) => {
    toast(message, {
        style: {
            background: '#e0f2fe',
            color: '#1e40af',
        },
        icon: 'ℹ️',
    });
};

export const showLoadingToast = (message: string) => {
    return toast.loading(message, {
        style: {
            background: '#fef3c7',
            color: '#92400e',
        },
    });
};
