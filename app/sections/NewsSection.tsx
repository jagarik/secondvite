// src/sections/NewsSection.tsx
import React from 'react';
import './NewsSection.css';

interface NewsItem {
  title: string;
  date: string;
  content: string;
}

const NewsSection: React.FC = () => {
  const newsData: NewsItem[] = [
    {
      title: 'アップデート情報',
      date: '2025/02/20',
      content: '新キャラクター追加、イベント開催情報などを公開！',
    },
    {
      title: 'メンテナンス告知',
      date: '2025/02/15',
      content: 'サーバー定期メンテナンスを実施します。',
    },
  ];

  return (
    <section className="news-section">
      <h2>ニュース</h2>
      <div className="news-list">
        {newsData.map((news, index) => (
          <div className="news-item" key={index}>
            <h3>{news.title}</h3>
            <p className="date">{news.date}</p>
            <p>{news.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
