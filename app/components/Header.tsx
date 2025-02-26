// src/components/Header.tsx
import React from 'react';
import './Header.css';
import { Link } from 'react-router';


const Header: React.FC = () => {
  const menuItems: { label: string; href: string }[] = [
    { label: 'ホーム', href: '/' },
    { label: 'イベントカレンダー', href: '#' },
    { label: 'キャラクター', href: '/charaPage' },
    { label: 'イベント情報', href: '#' },
    { label: 'トップアップ', href: '/Page' },
  ];

  return (
    <header className="header">
      <nav className="header__nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>{item.label}</Link>
              {/* <a href={item.href}>{item.label}</a> */}
            </li>
          ))}
        </ul>
      </nav>
      <div className="header__auth">
        <button className="login-btn">ログイン</button>
      </div>
    </header>
  );
};

export default Header;
