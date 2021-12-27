import React from "react";
import TodoList from "./todolist";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";
import { dragCard } from "../actions";

const Home = (props) => {
	const handleDragEnd = (result) => {
		//todo reordering  logic
		const { destination, source, draggableId } = result;
		if (!destination) {
			return;
		}

		if (
			source.droppabledId === destination.droppableId &&
			source.index === destination.index
		) {
			return;
		}

		props.dragCard(
			source.droppableId,
			destination.droppableId,
			source.index,
			destination.index,
			draggableId
		);
	};
	return (
		<div>
			<DragDropContext onDragEnd={handleDragEnd}>
				<Typography
					fontSize="25px"
					textAlign="center"
					mt="5%"
					fontWeight="bold"
				>
					Todo App
				</Typography>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						paddingTop: "10%",
					}}
				>
					<Box sx={{ display: "flex", flexDirection: "row" }}>
						{props.lists.map((card) => {
							return (
								<TodoList
									key={card.id}
									title={card.title}
									card={card.cards}
									lists={props.lists}
									id={card.id}
								/>
							);
						})}
					</Box>
				</div>
			</DragDropContext>
		</div>
	);
};
const mapStateToProps = (state) => {
	return { lists: state.lists.todo };
};
export default connect(mapStateToProps, { dragCard })(Home);
