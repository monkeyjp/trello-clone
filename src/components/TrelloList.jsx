import React, {useState} from "react";
import { AddCardOrList } from "./AddCardOrList";
import { ListTitle } from "./ListTitle";
import { TrelloCard } from "./TrelloCard";
import styles from "../styles/trelloList.module.css"
import { Draggable, Droppable } from "@hello-pangea/dnd";


export const TrelloList = ({list, index}) => {

    //console.log(list.id)
    
    return (
        <Draggable draggableId={list.id} index={index}  >
            {(provided) => (
                <div >

                    <div 
                        {...provided.draggableProps}
                        {...provided.dragHandleProps} 
                        ref={provided.innerRef} 
                        className={`${styles.trelloList}`}
                        data-drag-handle-id={list.id} >
                        <div >
                            
                            <ListTitle title={list.title} listId={list.id} />
                            <Droppable droppableId={list.id} >
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps} className={`${styles.containerCards}`} >
                                        {
                                            list.cards.map((card, index) => {
                                                return (
                                                    <TrelloCard card={card} key={card.id} index={index}  />
                                                )
                                            })
                                        }
                                        {provided.placeholder}
                                    </div>

                                )}
                            </Droppable>
                            
                            <AddCardOrList type="card" listId={list.id} />
                        </div>

                    </div>
                </div>

            )}
        </Draggable>

    )
}