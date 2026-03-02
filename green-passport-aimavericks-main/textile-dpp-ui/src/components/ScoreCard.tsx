import type { LucideIcon } from 'lucide-react';

interface ScoreCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
}

const ScoreCard = ({ title, value, subtitle, icon: Icon, iconBgColor, iconColor }: ScoreCardProps) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-sand-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-sand-900">{value}</p>
          {subtitle && <p className="text-sm text-sand-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
