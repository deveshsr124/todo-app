import React from "react";
import TodoCard from "../Card/card";
import Typography from "@mui/material/Typography";
import AddButton from "../AddButton";
import { Droppable } from "react-beautiful-dnd";

const TodoList = ({ title, card, id }) => {
	return (
		<div>
			<Droppable droppableId={String(id)}>
				{(provided) => {
					return (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
							style={{
								width: "320px",
								background: "#ffcc80",
								padding: "5px",
								marginRight: "8px",
								borderRadius: "8px",
							}}
						>
							<Typography textAlign="center" fontWeight="600">
								{title}
							</Typography>
							{card.map((item, index) => {
								return (
									<TodoCard
										title={item.title}
										key={item.id}
										id={item.id}
										index={index}
									/>
								);
							})}
							{provided.placeholder}
							<AddButton list={true} id={id} />
						</div>
					);
				}}
			</Droppable>
		</div>
	);
};

export default TodoList;
