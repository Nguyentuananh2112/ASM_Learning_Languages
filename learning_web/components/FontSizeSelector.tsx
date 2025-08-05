"use client";

import * as React from "react";
import { Type } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

// Định nghĩa các kích cỡ chữ có sẵn
type FontSize = "small" | "medium" | "large";

// Tạo context để quản lý kích cỡ chữ toàn cục
interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const FontSizeContext = React.createContext<FontSizeContextType | undefined>(undefined);

// Hook để sử dụng context
export const useFontSize = () => {
  const context = React.useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
};

// Provider component để cung cấp context
export const FontSizeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Lấy kích cỡ chữ từ localStorage hoặc sử dụng mặc định
  const [fontSize, setFontSizeState] = React.useState<FontSize>(() => {
    // Chỉ chạy trên client side
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("fontSize") as FontSize;
      return saved || "medium";
    }
    return "medium";
  });

  // Hàm để thay đổi kích cỡ chữ
  const setFontSize = React.useCallback((size: FontSize) => {
    setFontSizeState(size);
    // Lưu vào localStorage
    localStorage.setItem("fontSize", size);
    
    // Áp dụng CSS class cho main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.classList.remove("font-size-small", "font-size-medium", "font-size-large");
      mainContent.classList.add(`font-size-${size}`);
    }
  }, []);

  // Áp dụng kích cỡ chữ khi component mount
  React.useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.classList.remove("font-size-small", "font-size-medium", "font-size-large");
      mainContent.classList.add(`font-size-${fontSize}`);
    }
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

// Component chính để chọn kích cỡ chữ
export function FontSizeSelector() {
  const { fontSize, setFontSize } = useFontSize();

  // Không cần hàm getFontSizeLabel vì đã hardcode các label trực tiếp trong JSX

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {/* Icon Type từ lucide-react */}
          <Type className="h-5 w-5" />
          <span className="sr-only">Adjust font size</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setFontSize("small")}
          className={fontSize === "small" ? "bg-accent" : ""}
        >
          Small
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setFontSize("medium")}
          className={fontSize === "medium" ? "bg-accent" : ""}
        >
          Medium
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setFontSize("large")}
          className={fontSize === "large" ? "bg-accent" : ""}
        >
          Large
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 