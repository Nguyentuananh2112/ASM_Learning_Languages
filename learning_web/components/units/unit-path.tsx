import { CheckCircle2, Star, Crown } from "lucide-react";

interface UnitPathProps {
  type: "start" | "star" | "crown" | "check";
  completed?: boolean;
  active?: boolean;
}

export const UnitPath = ({ type, completed, active }: UnitPathProps) => {
  let icon = null;
  if (type === "check") icon = <CheckCircle2 className="w-8 h-8" />;
  if (type === "star") icon = <Star className="w-8 h-8" />;
  if (type === "crown") icon = <Crown className="w-8 h-8" />;
  if (type === "start") icon = <Star className="w-8 h-8" />;

  let bg = completed
    ? "bg-[#5ba5fa] text-white"
    : active
    ? "bg-white border-2 border-[#5ba5fa] text-[#5ba5fa]"
    : "bg-gray-200 text-gray-400";
  let shadow = completed || active ? "shadow-lg" : "";

  return (
    <div className="flex flex-col items-center relative">
      {active && (
        <span className="animate-bounce absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-[#5ba5fa] bg-white px-3 py-1 rounded-xl border border-[#5ba5fa] shadow z-10">START</span>
      )}
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-2 ${bg} ${shadow} relative`}
      >
        {icon}
      </div>
    </div>
  );
};