import React, { useState } from "react";
import { Card, CardContent, Typography, IconButton, Icon } from "@mui/material";

import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../actions";
import EditCard from "./EditCard";

const CardComp = ({ title, id, index, listId, setOpenForm }) => {
	const dispatch = useDispatch();
	const [edit, setEdit] = useState(false);

	return edit === true ? (
		<EditCard text={title} setEdit={setEdit} listId={listId} cardId={id} />
	) : (
		<Draggable draggableId={String(id)} index={index}>
			{(provided) => {
				return (
					<Card
						sx={{
							minWidth: 300,
							marginBottom: "8px",
							position: "relative",
							height: 80,
						}}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<IconButton
							sx={{ position: "absolute", right: "3%" }}
							onClick={() => setEdit(true)}
						>
							<Icon>edit_outlined</Icon>
						</IconButton>
						<IconButton
							sx={{ position: "absolute", right: "3%", bottom: "2%" }}
							onClick={() => {
								dispatch(deleteCard(id, listId));
							}}
						>
							<Icon>delete_outlined</Icon>
						</IconButton>
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom
							>
								{title}
							</Typography>
						</CardContent>
					</Card>
				);
			}}
		</Draggable>
	);
};

export default CardComp;
