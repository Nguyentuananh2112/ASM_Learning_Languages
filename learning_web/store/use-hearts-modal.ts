import { create } from 'zustand';


// Store quản lý trạng thái mở/đóng modal thoát bài học
type HeartsModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useHeartsModal  = create<HeartsModalState>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

