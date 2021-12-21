import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	Box,
	Icon,
	Typography,
	Button,
	TextareaAutosize,
	Card,
	IconButton,
	Alert,
} from "@mui/material";
import { addCard } from "../../actions";

const AddButton = (props) => {
	const dispatch = useDispatch();
	const [openform, setOpenForm] = useState(false);
	const [titleerr, setTitleErr] = useState(false);
	const [title, setTitle] = useState("");
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
		setTitleErr(false);
	};

	if (openform === true) {
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
							dispatch(addCard(props.id, title));
							setTitle("");
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
	}
	return props.list ? (
		<Button
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				color: "black",
			}}
			onClick={() => {
				setOpenForm(true);
			}}
		>
			<Icon>add</Icon>
			<Typography sx={{ textTransform: "capitalize" }}>
				Add another card
			</Typography>
		</Button>
	) : (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Icon>add</Icon>
			<Typography>Add another List</Typography>
		</Box>
	);
};

export default AddButton;
