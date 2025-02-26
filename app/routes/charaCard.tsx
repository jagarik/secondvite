import React, { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import "./CharaCard.css";
import clsx from "clsx";

type Props = {
  name: string;
  cv?: string;
  storyText: ReactNode;
  image: string;
};


const CharacterCard = ({ name, cv, storyText, image }: Props) => {
  const [animationState, setAnimationState] = useState<"enter" | "leave" | null>(null);

  useEffect(() => {
    setAnimationState("enter");
    const timeout = setTimeout(() => {
      setAnimationState(null);
    }, 500);

    return () => {
      setAnimationState("leave");
      clearTimeout(timeout);
    }

  }, [name]);

  return (
    <>
      <div className={clsx("character-card", animationState)}>
        <div className="character-fields">
          <h1 className="custom-heading">キャラクター</h1>
          <div className="character-info">
            <div className="character-name">
              <h2>{name}</h2>
              <p className="cv">CV: {cv}</p>
            </div>
            <div className="character-story">
              <h3>STORY</h3>
              <p className="story-text">
                {storyText}
              </p>
            </div>
          </div>
        </div>
        <div className="character-image">
          <img src={image} alt={name} />
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
