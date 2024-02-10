import React, { useContext, useState } from "react";
import styles from "../styles/ListTitle.module.css"
import { Context } from "../store/appContext";

export const ListTitle = ({title, listId}) => {
    const { store, actions } = useContext(Context);
    const [titleInputOpen, setTitleInputOpen] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const handleBlur = () => {
        
        actions.updateListTitle(newTitle, listId);
        setTitleInputOpen(false)
    }
    return (
        <>
            {
                titleInputOpen ? (
                    <input 
                        className = {`${styles.titleInput}`}
                        value={newTitle}
                        onChange={(e) => {
                            setNewTitle(e.target.value)
                        }}
                        onBlur={handleBlur}
                        
                    ></input>
                ): 
                (
                        <div 
                            className = {`${styles.ListTitle}`}
                            onClick={() => {
                                setTitleInputOpen(true)
                            }}
                        >
                            <h3 className={`${styles.title}`}>
                                {title}
                            </h3>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                )
}
        </>
        
    )
}