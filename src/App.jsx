import React, { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TrelloList } from './components/TrelloList'
import injectContext from './store/appContext'
import { Navbar } from './components/Navbar'
import { Context } from "./store/appContext"
import styles from "./styles/App.module.css"
import { AddCardOrList } from './components/AddCardOrList'
import { DragDropContext, Droppable } from "@hello-pangea/dnd"
import { Footer } from './components/Footer'

function App() {

  const { store, actions } = useContext(Context);
  const data = store;
  //console.log(store);
  const onDragEnd = (result) => {
    const { destination, destination: { droppableId: destDroppableId, index: destIndex }, source, source: { droppableId: sourceDroppableId, index: sourceIndex }, draggableId, type } = result
    console.log("destination: ", destination, "source:", source, "draggableId:", draggableId, "type:", type);
    if (!destination) {
      return
    }
    if (type === "list") {
      const newListIds = store.listIds;
      newListIds.splice(sourceIndex, 1);
      newListIds.splice(destIndex, 0, draggableId)
      return;
    }
    const sourceList = store.lists[sourceDroppableId]
    const destinationList = store.lists[destDroppableId]
    const draggingCard = sourceList.cards.filter((card) => card.id === draggableId)[0]

    if (sourceDroppableId === destDroppableId) {
      sourceList.cards.splice(sourceIndex, 1);
      destinationList.cards.splice(destIndex, 0, draggingCard)
      actions.updateDataList(sourceList, destinationList)
    } else {
      sourceList.cards.splice(sourceIndex, 1);
      destinationList.cards.splice(destIndex, 0, draggingCard)
      actions.updateDataCards(sourceList, destinationList)
    }

  }

  return (
    <div className={`${store.theme} `}>
      <Navbar />
      <div className={` ${styles.body} body`}>
        <div className={`${styles.container} routes container `}>
          <div>

            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId='12345' type='list' direction='horizontal'>
                {
                  (provided) => (

                    <ol {...provided.droppableProps} ref={provided.innerRef} className={`${styles.containerTrelloList} container`} >
                      {
                        data.listIds.map((listId, index) => {

                          const list = store.lists[listId];
                          //console.log(data);
                          return (
                            <li key={listId} className={`${styles.trelloList}`} >
                              <TrelloList list={list}  index={index} />

                            </li>
                          )
                        })
                      }
                        {provided.placeholder}
                      <div className={`${styles.addCard}`}>
                        <AddCardOrList type="list" />
                        
                      </div>
                    </ol>
                  )
                }

              </Droppable>

            </DragDropContext>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default injectContext(App) 
