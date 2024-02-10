import React from "react";
import styles from "../styles/trelloCard.module.css"
import { Draggable } from "@hello-pangea/dnd";
export const TrelloCard = ({card, index}) =>{
    return (
        <Draggable draggableId={card.id} index={index} >
            {
            (provided) => (
                <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} >
                    <div className={`${styles.cardItem}`}>
                        {card.title}
                    </div>

                </div>
            )}
        </Draggable>
    )
}