import { LucideIcon } from "lucide-react";

interface ArgumentCardProps {
  icon: LucideIcon;
  title: string;
}

const ArgumentCard = ({ icon: Icon, title }: ArgumentCardProps) => {
  return (
    <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-custom">
      <Icon className="w-6 h-6 text-primary flex-shrink-0" />
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
};

export default ArgumentCard;