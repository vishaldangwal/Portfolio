import React from 'react';

const colorClasses = {
  red: 'bg-red-100 text-red-800',
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  purple: 'bg-purple-100 text-purple-800',
  orange: 'bg-orange-100 text-orange-800',
  gray: 'bg-gray-100 text-gray-800',
};

const Button = ({ color = 'gray', text }) => {
  const colorClass = colorClasses[color] || colorClasses.gray;
  return (
    <span className={`px-2 py-1 rounded-md text-xs ${colorClass}`}>
      {text}
    </span>
  );
};

export default Button;
