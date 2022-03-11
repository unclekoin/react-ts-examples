import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void; // number, string, etc
}

const Card: FC<CardProps> =
    ({
         children,
         width,
         height,
         variant,
         onClick
     }) => {
        const [state, setState] = useState(0);
        return (
            <div style={{
                width, height,
                border: variant === CardVariant.outlined ? "1px solid grey" : "none",
                backgroundColor: variant === CardVariant.primary ? "lightgray" : ""
            }}
                 onClick={() => onClick(state)}
            >
                {children}
            </div>
        );
    };

export default Card;
