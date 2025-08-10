"use client";

import { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode;
}

export const ClientOnly = ({ children }: Props) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Nếu đang ở server hoặc đang trong quá trình render lần đầu ở client, không hiển thị gì cả
    if (!isClient) {
        return null;
    }

    // Sau khi đã mount xong ở client, hiển thị nội dung
    return (
        <>
            {children}
        </>
    );
};