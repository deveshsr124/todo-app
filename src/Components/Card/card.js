import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Draggable } from "react-beautiful-dnd";

const CardComp = ({ title, id, index }) => {
	return (
		<Draggable draggableId={String(id)} index={index}>
			{(provided) => {
				return (
					<Card
						sx={{ minWidth: 300, marginBottom: "8px" }}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
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
