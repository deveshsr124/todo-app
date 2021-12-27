import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	Icon,
	Button,
	TextareaAutosize,
	Card,
	IconButton,
	Alert,
} from "@mui/material";
import { addCard } from "../../actions";

const CardAdd = ({ listId, setOpenForm }) => {
	const dispatch = useDispatch();
	const [titleerr, setTitleErr] = useState(false);
	const [title, setTitle] = useState();
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
		setTitleErr(false);
	};
	return (
		<div>
			<Card sx={{ marginBottom: "5px" }}>
				<TextareaAutosize
					aria-label="empty textarea"
					placeholder="Enter.."
					minRows={3}
					value={title}
					onChange={handleTitleChange}
					autoFocus
					style={{
						width: "100%",
						fontSize: "14px",
						outline: "none",
						resize: "none",
						border: "none",
					}}
				/>
			</Card>
			<Button
				variant="contained"
				onClick={() => {
					if (title !== "") {
						dispatch(addCard(listId, title));
						setTitle("");
						setOpenForm(false);
					} else {
						setTitleErr(true);
					}
				}}
			>
				Save
			</Button>
			<IconButton
				aria-label="close"
				sx={{ marginLeft: "5px" }}
				onClick={() => {
					setOpenForm(false);
				}}
			>
				<Icon>close</Icon>
			</IconButton>
			{titleerr === true ? <Alert severity="error">Enter Title</Alert> : ""}
		</div>
	);
};

export default CardAdd;
