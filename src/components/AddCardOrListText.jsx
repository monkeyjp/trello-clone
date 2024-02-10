import React, {useContext, useState, useRef, useEffect} from "react";
import styles from "../styles/AddCardOrListText.module.css"
import { Context } from "../store/appContext";

export const AddCardOrListText = ({toggleActiveInactive, type, listId}) => {

    const {actions} = useContext(Context);

    const [title, setTitle] = useState("")

    const textAreaRef = useRef(null);
    useEffect(() => {
        // Cuando el componente se active, enfoca el textarea
        if (textAreaRef.current) {
            textAreaRef.current.focus();
        }
    }, []);

    
    const handleInputChange = (e) => {
        setTitle(e.target.value);

        
    };
    //console.log(title);
    
    const handleAddCardOrList = () => {
        //console.log("funciona");
        //console.log(type);
        if (type === "card") {
            console.log(title);
            //console.log("card");
            actions.addCard(title, listId)
        }else {
            //console.log("list");
            actions.addList(title)
        }
        setTitle("")
        toggleActiveInactive()
    }

    const handleBlur = (e) => {
        // Verificar si el evento provino del botón de envío
        if (!e.relatedTarget || e.relatedTarget.tagName.toLowerCase() !== "button") {
            toggleActiveInactive();
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddCardOrList();
        }
    };

    return (
        <div >
            <textarea 
                ref={textAreaRef}
                className={`${styles.inputCardOrList}`} 
                value={title} onChange={handleInputChange} 
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                placeholder=
                    {
                        type === "card" ? 
                            "Enter a title for this card..." :
                            "Enter list title..."
                    }
                >
            </textarea>
            <div className="mb-2">
                <button className={`${styles.addButton} btn`} type="button" onClick={() => {
                    //console.log(title);
                    handleAddCardOrList();
                    }} >
                {
                    type === "card" ? 
                        "Add card" :
                        "Add list"
                }
                </button>
                <i className="fa-solid fa-x" onClick={toggleActiveInactive}></i>

            </div>

        </div>
    )
}