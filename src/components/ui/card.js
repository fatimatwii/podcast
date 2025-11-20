import React from "react";

export const Card = ({ children, className }) => {
  return <div className={`p-4 rounded-xl shadow-md ${className}`}>{children}</div>;
};

export const CardHeader = ({ children, className }) => {
  return <div className={`font-bold text-lg ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
