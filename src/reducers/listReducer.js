const ADD_CARD = "ADD_CARD";
const DRAG_CARD = "DRAG_CARD";
let cardId = 6;
const INTIAL_STATE = [
	{
		title: "todo List",
		id: `list_${0}`,
		cards: [],
	},
	{
		title: "doing list",
		id: `list_${1}`,
		cards: [],
	},
	{
		title: "done list",
		id: `list_${2}`,
		cards: [],
	},
];

export const listReducer = (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case ADD_CARD:
			//logic to create new card
			const newCard = {
				id: `card_${cardId}`,
				title: action.payload.text,
			};
			cardId = cardId + 1;
			const newStateCard = state.map((list) => {
				if (list.id === action.payload.cardId) {
					return { ...list, cards: [...list.cards, newCard] };
				} else {
					return list;
				}
			});
			return newStateCard;
		case DRAG_CARD:
			const newState = [...state];
			const {
				droppableIdStart,
				droppableIdEnd,
				droppableIndexStart,
				droppableIndexEnd,
				draggableId,
			} = action.payload;
			if (droppableIdStart === droppableIdEnd) {
				const newlist = state.find((list) => droppableIdStart === list.id);
				//selecting the card
				const card = newlist.cards.splice(droppableIndexStart, 1);
				//removing the card and adding it to the index whereever you want to put it
				newlist.cards.splice(droppableIndexEnd, 0, ...card);
			}

			if (droppableIdStart !== droppableIdEnd) {
				//list where drag starts
				const listStart = state.find((list) => droppableIdStart === list.id);
				// list where drag ends
				const listEnd = state.find((list) => droppableIdEnd === list.id);
				//selecting the card
				const card = listStart.cards.splice(droppableIndexStart, 1);
				// adding card to the place where drop is going to happen
				listEnd.cards.splice(droppableIndexEnd, 0, ...card);
			}
			return newState;
		default:
			return state;
	}
};
