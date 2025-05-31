import { UnitPath } from "./unit-path";

// Định nghĩa kiểu dữ liệu cho từng node trên zigzag path
interface ZigzagNode {
  type: "start" | "star" | "crown" | "check";
  completed?: boolean;
  active?: boolean;
}

// Props cho component UnitZigzagPath
interface UnitZigzagPathProps {
  data: ZigzagNode[];
}

// Component hiển thị đường zigzag các node unit
export function UnitZigzagPath({ data }: UnitZigzagPathProps) {
  return (
    <div className="flex flex-col gap-8 items-center w-full">
      {/* Lặp qua từng node và render UnitPath tương ứng */}
      {data.map((item, idx) => (
        <div key={idx} className="flex justify-center w-full">
          <UnitPath {...item} />
        </div>
      ))}
    </div>
  );
}

// Đảm bảo component luôn render động (Next.js dynamic)
export const dynamic = "force-dynamic"; 