import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";

import { Sidebar } from "@/components/sidebar";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// MobileSideBar để hiển thị thanh 3 gạch ngang 
// và khi nhấn vào sẽ mở ra thanh sidebar bên trái
const MobileSideBar = () => {
    return (
        // sử dụng Sheet để tạo một thanh bên có thể trượt vào và ra
        <Sheet> 
            <SheetTrigger>
                <Menu className="text-white"/>
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left">
                <VisuallyHidden>
                    <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
};
export default MobileSideBar;