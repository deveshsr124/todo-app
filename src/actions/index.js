import { ADD_CARD, DELETE_CARD, EDIT_CARD, DRAG_CARD } from "./type";

export const addCard = (listId, text) => {
	return {
		type: ADD_CARD,
		payload: { listId, text },
	};
};

export const deleteCard = (cardId, listId) => {
	return {
		type: DELETE_CARD,
		payload: { cardId, listId },
	};
};

export const editCard = (cardId, listId, text) => {
	return {
		type: EDIT_CARD,
		payload: { cardId, listId, text },
	};
};
export const dragCard = (
	droppableIdStart,
	droppableIdEnd,
	droppableIndexStart,
	droppableIndexEnd,
	draggableId
) => {
	return {
		type: DRAG_CARD,
		payload: {
			droppableIdStart,
			droppableIdEnd,
			droppableIndexStart,
			droppableIndexEnd,
			draggableId,
		},
	};
};
