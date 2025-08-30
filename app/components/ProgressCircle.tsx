import React from 'react';

interface ProgressCircleProps {
  percentage: number;
  color?: string;
  size?: number;
  strokeWidth?: number;
  className?: string; // Add className prop
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  color = '#3B82F6', // Default to blue-500
  size = 160,
  strokeWidth = 10,
  className = '',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
        ></circle>
        <circle
          className="transition-all duration-500 ease-in-out"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        ></circle>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800">
        {`${percentage}%`}
      </span>
    </div>
  );
};

export default ProgressCircle;
