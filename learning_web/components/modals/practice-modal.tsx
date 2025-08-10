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
import { useTranslation } from "react-i18next";



export const PraciceModal = () => {

    const [isClient, setIsClient] = useState(false); // đảm bảo chỉ hiển thị khi render client
    const { isOpen, close } = usePracticesModal(); // modal đang mở hay không
    const { t } = useTranslation();

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
                        {t("practice_modal_title")}
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        {t("practice_modal_description")}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        

                        <Button variant="primary" className="w-full" onClick={close}>
                            {t("practice_modal_understand")}
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};