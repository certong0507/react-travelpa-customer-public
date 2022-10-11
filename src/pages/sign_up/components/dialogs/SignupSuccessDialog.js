import React from "react";
import { connect } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export const SignupSuccessDialog = ({ handleClose, handleSubmit, isOpen, buttonLabel, title, children }) => {
	return (
		<Dialog
			disableEscapeKeyDown
			onClose={(event, reason) => {
				if (reason && reason === "backdropClick") return;
				handleClose();
			}}
			open={isOpen}
			maxWidth="sm"
			style={{ minWidth: "30%" }}
			fullWidth
		>
			<DialogTitle id="confirmation-dialog-title" className="text-center">
				{title}
			</DialogTitle>
			<Divider style={{ width: "93%" }} className="m-auto" />
			<DialogContent>{children}</DialogContent>
			<DialogActions className="justify-content-center mb-2">
				<Button
					disableRipple
					onClick={handleSubmit || handleClose}
					autoFocus
					className="w-50"
					variant="contained"
					size="medium"
				>
					{buttonLabel}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSuccessDialog);
