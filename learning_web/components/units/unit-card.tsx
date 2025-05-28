import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText } from "lucide-react";

interface UnitCardProps {
  title: string;
  description: string;
  completed?: boolean;
  locked?: boolean;
}

export const UnitCard = ({
  title,
  description,
  completed,
  locked,
}: UnitCardProps) => {
  return (
    <div
      className={`w-full rounded-2xl bg-[#5ba5fa] p-6 shadow-lg flex flex-col gap-2 transition-all relative ${locked ? "opacity-50" : "hover:scale-[1.02]"}`}
    >
      <div className="flex items-center justify-between gap-x-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-base text-blue-50 font-medium">{description}</p>
        </div>
        <Button
          variant="outline"
          size="lg"
          disabled={locked}
          className="flex items-center gap-2 border-2 border-white bg-white/30 text-white font-bold text-lg px-6 py-2 rounded-xl shadow hover:bg-white/50 hover:text-blue-700 transition-all"
        >
          <FileText className="w-5 h-5" />
          {completed ? "CONTINUE" : locked ? "LOCKED" : "START"}
        </Button>
      </div>
      {completed && (
        <CheckCircle2 className="absolute top-3 right-3 w-7 h-7 text-white drop-shadow-lg" />
      )}
    </div>
  );
};