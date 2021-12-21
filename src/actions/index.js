export const addCard = (cardId, text) => {
	return {
		type: "ADD_CARD",
		payload: { cardId, text },
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
		type: "DRAG_CARD",
		payload: {
			droppableIdStart,
			droppableIdEnd,
			droppableIndexStart,
			droppableIndexEnd,
			draggableId,
		},
	};
};
