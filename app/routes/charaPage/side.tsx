import React, { useState } from "react";
import "./side.css";

const characters = [
  { name: "てるき", img: "/assets/teruki.jpg" },
  { name: "ダン・ヘン", img: "https://via.placeholder.com/50" },
  { name: "三月なのか", img: "https://via.placeholder.com/50" },
  { name: "キャラクター4", img: "https://via.placeholder.com/50" },
  { name: "キャラクター5", img: "https://via.placeholder.com/50" },
  { name: "キャラクター6", img: "https://via.placeholder.com/50" },
];

const SideNav: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 上のキャラクターのインデックス
  const prevIndex = (currentIndex - 1 + characters.length) % characters.length;
  // 下のキャラクターのインデックス
  const nextIndex = (currentIndex + 1) % characters.length;

  // 上のキャラをクリックしたら、それを真ん中に移動
  const handlePrevClick = () => {
    setCurrentIndex(prevIndex);
  };

  // 下のキャラをクリックしたら、それを真ん中に移動
  const handleNextClick = () => {
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="side-nav">
      {/* 上のキャラクター */}
      <div className="side-nav-item prev" onClick={handlePrevClick}>
        <img src={characters[prevIndex].img} alt={characters[prevIndex].name} />
        <p>{characters[prevIndex].name}</p>
      </div>

      {/* 真ん中のキャラクター */}
      <div className="side-nav-item current">
        <img src={characters[currentIndex].img} alt={characters[currentIndex].name} />
        <p>{characters[currentIndex].name}</p>
      </div>

      {/* 下のキャラクター */}
      <div className="side-nav-item next" onClick={handleNextClick}>
        <img src={characters[nextIndex].img} alt={characters[nextIndex].name} />
        <p>{characters[nextIndex].name}</p>
      </div>
    </div>
  );
};

export default SideNav;
