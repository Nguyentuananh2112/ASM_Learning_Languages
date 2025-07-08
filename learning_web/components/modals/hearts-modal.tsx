"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
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
import { useHeartsModal } from "@/store/use-hearts-modal";
import { useTranslation } from "react-i18next"; 


export const HeartsModal = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const [isClient, setIsClient] = useState(false); // đảm bảo chỉ hiển thị khi render client
    const { isOpen, close } = useHeartsModal(); // modal đang mở hay không

    useEffect(() => setIsClient(true), []);

    const onClick = () => {
        close();
        router.push("/shop")
    }

    if (!isClient) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                            src="/logoBad.svg"
                            alt="Logo"
                            height={80}
                            width={80}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        {t("hearts_modal_title")}
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        {t("hearts_modal_description")}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button variant="primary" className="w-full" onClick={onClick}>
                            {t("hearts_modal_get_unlimited")}
                        </Button>

                        <Button variant="primaryOutline" className="w-full" onClick={close}>
                            {t("hearts_modal_no_thanks")}
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};