import { Check } from "lucide-react";

interface FeatureCardProps {
  title: string;
}

const FeatureCard = ({ title }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Check className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default FeatureCard;