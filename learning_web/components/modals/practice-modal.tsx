"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { usePracticesModal } from "@/store/use-practice-modals";




export const PraciceModal = () => {

    const [isClient, setIsClient] = useState(false); // đảm bảo chỉ hiển thị khi render client
    const { isOpen, close } = usePracticesModal(); // modal đang mở hay không

    useEffect(() => setIsClient(true), []);

    

    if (!isClient) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                            src="/heart.svg"
                            alt="Heart"
                            height={100}
                            width={100}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Practice lesson
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Use practice lesson to regain hearts and points. You cannot loose hearts or points in practice lessons.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        

                        <Button variant="primary" className="w-full" onClick={close}>
                            I understand
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};