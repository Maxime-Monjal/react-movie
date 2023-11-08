import React from 'react';

type ITooltipProps = {
    text: string;
    children: React.ReactNode;
  }
  

export const Tooltip = ({ text, children }: ITooltipProps) => (
  <div className="relative inline-block group">
    {children}
    <span className="absolute bottom-1 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">    {text}
    </span>
  </div>
);

