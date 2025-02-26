// src/components/StepNavigation.tsx
import React from "react";
import "./StepNavigation.css";

const steps = ["ログイン", "情報確認", "チャージ"];

interface StepNavigationProps {
  currentStep: number;
}

const StepNavigation: React.FC<StepNavigationProps> = ({ currentStep }) => {
  return (
    <div className="step-navigation">
      {steps.map((step, index) => (
        <div key={index} className={`step ${index < currentStep ? "completed" : ""} ${index === currentStep ? "active" : ""}`}>
          <span className="step-number">{index + 1}</span>
          <span className="step-label">{step}</span>
        </div>
      ))}
    </div>
  );
};

export default StepNavigation;
