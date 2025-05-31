// Import Footer và Header từ cùng thư mục
import { Footer } from "./footer";
import { Header } from "./header";

// Định nghĩa kiểu Props cho component layout, nhận vào children là ReactNode
type Props = {
    children:React.ReactNode;
};

// Định nghĩa component layout cho toàn bộ trang marketing
const MarketingLayout = ({ children }: Props) => {
    return(
        // Layout dạng flex, chiều dọc, tối thiểu full màn hình
        <div className="min-h-screen flex flex-col">
            <Header /> {/* Phần đầu trang */}
            <main className="flex flex-1 flex-col items-center justify-center">
                {children} {/* Nội dung chính của trang */}
            </main>
            <Footer /> {/* Phần chân trang */}
        </div>
    )
}
export default MarketingLayout;