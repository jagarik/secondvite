import React, { useState } from "react";
import Header from "../components/Header";
import CharacterCard from "./charaCard";
import "./CharaPage.css";
import "./charaPage/side.css";
import Footer from "~/components/Footer";

const characters = [
  { name: "てるき＆こたろう", img: "/assets/teruki.jpg" },
  { name: "ジャスティス", img: "/assets/jasu.jpg" },
  { name: "ドラゴンloserたつや", img: "/assets/tatuya.jpg" },
  { name: "キャラクター4", img: "/assets/char4.jpg" },
  { name: "キャラクター5", img: "/assets/char5.jpg" },
  { name: "キャラクター6", img: "/assets/char6.jpg" },
];

const characterDetails: {
  [key: string]: {
    name: string;
    cv: string;
    storyText: React.ReactNode;
    image: string;
  };
} = {
  "てるき＆こたろう": {
    name: "てるき＆こたろう",
    cv: "後藤 空希＆渡部 宙",
    storyText: (
      <>
        両親を知らず、孤独に苛まれた子供は、月光がそっと差し込む神秘的な森を一人彷徨っていた。<br />
        そんなある晩、運命に導かれるかのように森の奥深くで、静かなる情熱と野性味を宿すこたろうと出会う。<br />
        こたろうは、温かな眼差しと優しい微笑みで子供の心に寄り添い、その孤独で傷ついた魂に、まるで自然の懐のような深い愛情を惜しみなく注ぎ込んだ。
      </>
    ),
    image: "/assets/teruki.jpg",
  },
  "ジャスティス": {
    name: "ジャスティス",
    cv: "横倉 功己",
    storyText: (
      <>
        小さな少年は、胸に燃える正義の灯火を携え、不正に果敢に立ち向かう決意を固めていた。<br />
        彼の瞳には、どんな闇も打ち破る強い信念が輝き、試練の道を一人歩む中で、その純粋な心は決して揺らぐことがなかった。<br />
        やがて、彼の勇気は町の隅々に希望の光をもたらし、暗い世界に小さな奇跡を起こした。
      </>
    ),
    image: "/assets/jasu.jpg",
  },
  "ドラゴンloserたつや": {
    name: "ドラゴンloserたつや",
    cv: "山形 龍也",
    storyText: (
      <>
        長く生きた彼は生きることに飽き、刺激を求めていた。<br />
        そんなある日、煌びやかに輝き、賑やかな音を奏でる建物の中にある遊技の魅力に憑りつかれてしまった。<br />
        そして彼は日に日に遊技でのドーパミンを求めるようになり、ついには自らの命を賭けるほどになってしまった。
      </>
    ),
    image: "/assets/tatuya.jpg",
  },
  "キャラクター4": {
    name: "キャラクター4",
    cv: "CV4 名前",
    storyText: (
      <>
        キャラクター4の物語テキスト。<br />
        ここに物語の詳細が入ります。
      </>
    ),
    image: "/assets/char4.jpg",
  },
  "キャラクター5": {
    name: "キャラクター5",
    cv: "CV5 名前",
    storyText: (
      <>
        キャラクター5の物語テキスト。<br />
        ここに物語の詳細が入ります。
      </>
    ),
    image: "/assets/char5.jpg",
  },
  "キャラクター6": {
    name: "キャラクター6",
    cv: "CV6 名前",
    storyText: (
      <>
        キャラクター6の物語テキスト。<br />
        ここに物語の詳細が入ります。
      </>
    ),
    image: "/assets/char6.jpg",
  },
};

const CharacterPage: React.FC = () => {
  const [chara, setChara] = useState("てるき＆こたろう");
  const currentCharacter = characterDetails[chara];

  return (
    <div className="character-page">
      <Header />
      <div className="content">
        <SideNav setter={setChara} />
        <CharacterCard
          name={currentCharacter.name}
          cv={currentCharacter.cv}
          storyText={currentCharacter.storyText}
          image={currentCharacter.image}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CharacterPage;

const SideNav = ({ setter }: { setter: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="side-nav">
      {characters.map((char, index) => (
        <button key={index} className="side-nav-item" onClick={() => setter(char.name)}>
          <img src={char.img} alt={char.name} />
          <p>{char.name}</p>
        </button>
      ))}
    </div>
  );
};
