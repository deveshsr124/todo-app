import React, { useState, Fragment } from "react";
import TodoCard from "../Card/card";
import Typography from "@mui/material/Typography";
import AddButton from "../AddButton";
import { Droppable } from "react-beautiful-dnd";
import CardAdd from "../Card/CardAdd";

const TodoList = ({ title, card, id }) => {
	const [openform, setOpenForm] = useState(false);

	return (
		<div>
			<Droppable droppableId={String(id)}>
				{(provided) => {
					return (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
							style={{
								width: "330px",
								background: "#ffcc80",
								padding: "5px",
								marginRight: "8px",
								borderRadius: "8px",
							}}
						>
							<Typography textAlign="center" fontWeight="600">
								{title}
							</Typography>
							<Fragment>
								{card.map((item, index) => {
									return (
										<TodoCard
											title={item.title}
											key={item.id}
											id={item.id}
											index={index}
											listId={id}
											setOpenForm={setOpenForm}
										/>
									);
								})}
							</Fragment>
							{provided.placeholder}
							{openform === true ? (
								<CardAdd setOpenForm={setOpenForm} listId={id} />
							) : (
								<AddButton id={id} setOpenForm={setOpenForm} />
							)}
						</div>
					);
				}}
			</Droppable>
		</div>
	);
};

export default TodoList;
