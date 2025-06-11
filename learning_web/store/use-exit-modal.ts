import { create } from 'zustand';


// Store quản lý trạng thái mở/đóng modal thoát bài học
type ExitModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useExitModal = create<ExitModalState>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

