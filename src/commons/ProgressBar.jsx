import React from "react";
import { useStore } from "../context/BarberContext";

export default function ProgressBar() {
  const { turnoProgress } = useStore();
  return (
    <div className="flex items-center gap-2">
      <div className="w-full h-1 bg-gray-200 rounded-lg">
        <div
          className="h-full bg-selected rounded-lg transition-all duration-200"
          style={{ width: `${turnoProgress}%` }}
        ></div>
      </div>
    </div>
  );
}
