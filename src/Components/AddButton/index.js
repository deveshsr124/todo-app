import React from "react";

import { Icon, Typography, Button } from "@mui/material";

const AddButton = (props) => {
	return (
		<Button
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				color: "black",
			}}
			onClick={() => {
				props.setOpenForm(true);
			}}
		>
			<Icon>add</Icon>
			<Typography sx={{ textTransform: "capitalize" }}>
				Add another card
			</Typography>
		</Button>
	);
};

export default AddButton;
