import React from "react";

export function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-white rounded-md shadow-sm-custom p-4 border-1 mb-4">
      {children}
    </div>
  );
}
