import { create } from 'zustand';


// Store quản lý trạng thái mở/đóng modal thoát bài học
type PracticeModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const usePracticesModal  = create<PracticeModalState>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

