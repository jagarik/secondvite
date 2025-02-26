// src/sections/HeroSection.tsx
import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>宇宙へ旅立とう</h1>
        <p>新しい世界への冒険が今、始まる。</p>
        <div className="store-buttons">
          <a href="#" className="store-button">
            {/* <img src="/appstore.png" alt="App Store" /> */}
          </a>
          <a href="#" className="store-button">
            {/* <img src="/googleplay.png" alt="Google Play" /> */}
          </a>
          <a href="#" className="store-button">
            {/* <img src="/psstore.png" alt="PS Store" /> */}
          </a>
        </div>
      </div>
      {/* キャラクター画像を右下に配置 */}
      {/* <img className="hero-character" src="/character.png" alt="Character" /> */}
    </section>
  );
};

export default HeroSection;
