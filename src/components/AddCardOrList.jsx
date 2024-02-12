import React, { useState } from "react";
import { AddCardOrListText } from "./AddCardOrListText";
import styles from "../styles/AddCardOrList.module.css"

export const AddCardOrList = ({type, listId}) => {



    const [isActive, setIsActive] = useState(false);

    const toggleActiveInactive = () => {
        //setIsActive(!isActive); 
        if (isActive === false) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    };

    return (
        <div>
            {!isActive && (
                <button 
                    className={`${type === "card" ? styles.addCardButton : styles.addListButton}`} 
                    onClick={toggleActiveInactive}
                >
                    { type === "card" ? 
                        " + Add a card":
                        " + Add another list"
                    }
                </button>
              )}
              {isActive && <AddCardOrListText type={type} listId={listId} toggleActiveInactive={toggleActiveInactive} />}

        </div>
    )
}