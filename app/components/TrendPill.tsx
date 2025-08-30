// TrendPill.jsx
import React from 'react';

const TrendPill = ({ value, isPositive = true, className }: { value: number; isPositive?: boolean; className: string }) => {
  const textColor = isPositive ? 'text-green-500' : 'text-red-500';
  const icon = isPositive ? (
    // Upward trending arrow (positive)
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <polyline points="3 17 9 11 13 15 21 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="21 7 15 7 15 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    // Downward trending arrow (negative)
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <polyline points="3 7 9 13 13 9 21 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="21 17 15 17 15 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full border ${isPositive ? 'border-green-500' : 'border-red-500'} ${textColor} ${className}`}>
      {icon}
      <span className="font-semibold">{value}%</span>
    </div>
  );
};

export default TrendPill;
