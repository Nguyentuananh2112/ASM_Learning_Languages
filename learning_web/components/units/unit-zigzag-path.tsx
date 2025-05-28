import { UnitPath } from "./unit-path";

interface ZigzagNode {
  type: "start" | "star" | "crown" | "check";
  completed?: boolean;
  active?: boolean;
}

interface UnitZigzagPathProps {
  data: ZigzagNode[];
}

export function UnitZigzagPath({ data }: UnitZigzagPathProps) {
  return (
    <div className="flex flex-col gap-8 items-center w-full">
      {data.map((item, idx) => (
        <div key={idx} className="flex justify-center w-full">
          <UnitPath {...item} />
        </div>
      ))}
    </div>
  );
}

export const dynamic = "force-dynamic"; 