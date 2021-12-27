import { ADD_CARD, DRAG_CARD, EDIT_CARD, DELETE_CARD } from "../actions/type";
var cardId = 0;
let INTIAL_STATE = {
	todo: [
		{
			title: "Todo",
			id: `list_${0}`,
			cards: [],
		},
		{
			title: "Doing",
			id: `list_${1}`,
			cards: [],
		},
		{
			title: "Done",
			id: `list_${2}`,
			cards: [],
		},
	],
};

export const listReducer = (state = INTIAL_STATE, action) => {
	let newState = { ...state };
	switch (action.type) {
		case ADD_CARD:
			//logic to create new card
			cardId = cardId + 1;
			const newCard = {
				id: `card_${cardId}`,
				title: action.payload.text,
			};
			newState.todo = state.todo.map((list) => {
				if (list.id === action.payload.listId) {
					return { ...list, cards: [...list.cards, newCard] };
				} else {
					return list;
				}
			});

			return newState;
		case DRAG_CARD:
			const {
				droppableIdStart,
				droppableIdEnd,
				droppableIndexStart,
				droppableIndexEnd,
			} = action.payload;
			if (droppableIdStart === droppableIdEnd) {
				const newlist = state.todo.find((list) => droppableIdStart === list.id);
				//selecting the card
				const card = newlist.cards.splice(droppableIndexStart, 1);
				//removing the card and adding it to the index whereever you want to put it
				newlist.cards.splice(droppableIndexEnd, 0, ...card);
			}

			if (droppableIdStart !== droppableIdEnd) {
				//list where drag starts
				const listStart = state.todo.find(
					(list) => droppableIdStart === list.id
				);
				// list where drag ends
				const listEnd = state.todo.find((list) => droppableIdEnd === list.id);
				//selecting the card
				const card = listStart.cards.splice(droppableIndexStart, 1);
				// adding card to the place where drop is going to happen
				listEnd.cards.splice(droppableIndexEnd, 0, ...card);
			}
			return newState;
		case DELETE_CARD:
			newState.todo = state.todo.map((data) =>
				data.id === action.payload.listId
					? {
							...data,
							cards: data.cards.filter(
								(data) => data.id !== action.payload.cardId
							),
					  }
					: { ...data }
			);
			return newState;
		case EDIT_CARD:
			newState.todo = state.todo.map((data) =>
				data.id === action.payload.listId
					? {
							...data,
							cards: data.cards.filter((data) =>
								data.id === action.payload.cardId
									? (data.title = action.payload.text)
									: data.title
							),
					  }
					: { ...data }
			);
			return newState;
		default:
			return state;
	}
};
