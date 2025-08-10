"use client";

import { Button } from "@/components/ui/button";
import { Notebook } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type Props = {
    title: string;
    description: string;
};
export const UnitBanner = ({
    title,
    description,
}: Props) => {

    const { t } = useTranslation();

    return (
        <div className="w-full rounded-xl bg-blue-400 p-5 text-white flex items-center justify-between">
            <div className="space-y-2.5">
                <h3 className="text-2xl font-bold">{t(title)}</h3>
                <p className="text-lg">{t(description)}</p>

            </div>
            <Link href="/lesson">
                <Button
                    size="lg"
                    variant="secondary"
                    className="hidden xl:flex border-2 border-b-4 active:border-2"
                >
                    <Notebook className="mr-2 dark:text-neutral-100" />
                    <div className="flex items-center gap-x-2 dark:text-neutral-100">
                        {t("start_learning")}
                    </div>
                </Button>
            </Link>

        </div>
    );
};
