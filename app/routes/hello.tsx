import React, { useState } from "react";
import Header from "~/components/Header";
import StepNavigation from "~/components/StepNavigation";
import "./Page.css";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="App">
      <StepNavigation currentStep={currentStep} />

      <div className="charge-content">
        <div className="user-info">
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            className="avatar"
          />
          <p className="game-title">崩壊：スターレイル</p>
        </div>

        <div className="account-info">
          <p>通行証: Mo****com</p>
          <p>
            サーバー: <span className="change-link">通行証を変更 →</span>
          </p>
        </div>

        <div className="buttons">
          {currentStep === 1 && (
            <button onClick={() => setCurrentStep(2)}>ログイン</button>
          )}
          {currentStep === 2 && (
            <button onClick={() => setCurrentStep(3)}>情報確認</button>
          )}
          {currentStep === 3 && <button>チャージ</button>}
        </div>
      </div>
    </div>
  );
}
