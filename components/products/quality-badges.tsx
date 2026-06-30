import { ShieldCheck } from 'lucide-react';
import { DEFAULT_QUALITY_BADGES } from '@/lib/data/products';

type QualityBadgesProps = {
  size?: 'sm' | 'md';
  className?: string;
};

const sizeStyles = {
  sm: 'px-2.5 py-1 text-[10px] gap-1',
  md: 'px-3 py-1.5 text-xs gap-1.5',
};

export default function QualityBadges({ size = 'sm', className = '' }: QualityBadgesProps) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {DEFAULT_QUALITY_BADGES.map((badge) => (
        <span
          key={badge}
          className={`inline-flex items-center rounded-md bg-[#F0FDF4] border border-[#BBF7D0]/60 font-semibold text-[#059669] ${sizeStyles[size]}`}
        >
          <ShieldCheck size={size === 'md' ? 14 : 11} className="shrink-0" />
          {badge}
        </span>
      ))}
    </div>
  );
}
