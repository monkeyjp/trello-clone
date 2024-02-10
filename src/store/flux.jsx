import uuid from "react-uuid";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			theme: "theme-light",
			lists: {
				"01list": {
					id: "01list",
					title: "To do",
					cards: [
						{
							id: "01card",
							title: "make the bed"
						},
						{
							id: "02card",
							title: "wash dishes"
						},
						{
							id: "03card",
							title: "go to the bank"
						},
						{
							id: "04card",
							title: "eat"
						},
						{
							id: "05card",
							title: "work"
						},
						{
							id: "06card",
							title: "study"
						},
						{
							id: "07card",
							title: "pet cat"
						},
						{
							id: "08card",
							title: "trash"
						},
						{
							id: "09card",
							title: "bath"
						},
						{
							id: "10card",
							title: "sleep"
						},
					]

				},
				"02list": {
					id: "02list",
					title: "In progress",
					cards: [

						{
							id: "11card",
							title: "relax"
						},
						{
							id: "12card",
							title: "watch Tv"
						},
						{
							id: "13card",
							title: "Practice"
						},
						{
							id: "14card",
							title: "Code"
						},
						
					]

				}
			},
			listIds: ["01list", "02list"]
			
		},

		actions: {

			


			changeTheme: () => {
				const store = getStore();
				if (store.theme === "theme-light") {
					setStore({ theme: "theme-dark" })
					console.log(store.theme)
				} else {
					setStore({ theme: "theme-light" })
					console.log(store.theme)
				}
			},
			updateListTitle: (newTitle, listId) => {
				//console.log(listId);
				const store = getStore()
				//console.log (store.lists[listId])
				const list = store.lists[listId]
				list.title = newTitle;
				setStore({
					...store,
					lists: {
						...store.lists,
						[listId] : list
					}
				})
				//console.log(store);
			},
			addCard: (title, listId) => {
				console.log(title);
				console.log(listId);
				const store = getStore();
				const newCardId = uuid();
				const newCard = {
					id : newCardId,
					title: title,
				};
				const list = store.lists[listId];
				console.log(list);
				list.cards = [...list.cards, newCard]
				setStore({
					...store,
					lists: {
						...store.lists,
						[listId]: list
					}
				})

			},
			addList: (title) => {
				const store = getStore()
				const newListId = uuid();
				setStore({
					listIds : [...store.listIds, newListId],
					lists: {
						...store.lists,
						[newListId]: {
							id: newListId,
							title: title,
							cards: []
						}
					}
				})

			},
			updateDataList: (sourceList, destinationList) => {
				const store = getStore()
				setStore({
					...store,
					lists: {
						...store.lists,
						[sourceList.id] : destinationList
					}
				})
			},
			updateDataCards: (sourceList, destinationList) => {
				const store = getStore()
				setStore({
					...store.lists,
					[sourceList.id]: sourceList,
					[destinationList.id] : destinationList
				})
			}

		}
	};
};

export default getState;
