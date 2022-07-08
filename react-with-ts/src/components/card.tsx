import React, { FC, useState } from "react";

export enum CardColor {
  yellow = "yellow",
  green = "green",
}

interface ICard {
  width?: string; // ? - означает необязательный
  height?: string;
  children: React.ReactNode;
  background: CardColor;
  onClick: (counter: number) => void;
}

const Card: FC<ICard> = ({ width, height, children, background, onClick }) => {
  const [state, setState] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        background:
          background === CardColor.green ? CardColor.green : CardColor.yellow,
        textAlign: "center",
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};
export default Card;
