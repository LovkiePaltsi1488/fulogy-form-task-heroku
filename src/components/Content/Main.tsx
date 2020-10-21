import React, { useState } from "react";
import { Breadcrumbs, Container, Typography } from "@material-ui/core";
import { ProfileSheet } from "./ProfileSheet/ProfileSheet";
import { ProfileData } from "./ProfileData/ProfileData";
import { ProfileForm } from "./ProfileForm/ProfileForm";
import { useStyles } from "./styles";
import { User } from "../Profile";
export interface ContentProps {
	user: User;
}

export const Content: React.FC<ContentProps> = ({ user }) => {
	const styles = useStyles();
	const [editing, setEditing] = useState(false);
	function openEdit() {
		setEditing(true);
	}
	function closeEdit() {
		setEditing(false);
	}
	return (
		<>
			<Container className={styles.contentValue}>
				<Typography className={styles.content__header} variant="h1">
					Личный кабинет
				</Typography>
				<Breadcrumbs
					className={styles.breadcrumbs}
					aria-label="breadcrumb"
					classes={{ separator: styles.breadcrumbs__separator }}
				>
					<Typography className={styles.breadcrumbs__crumb}>Главная</Typography>
					<Typography className={styles.breadcrumbs__crumb}>
						Личный кабинет
					</Typography>
				</Breadcrumbs>
				<ProfileSheet
					openEdit={openEdit}
					opened={editing}
					closeEdit={closeEdit}
					user={user}
				/>
				{!editing && <ProfileData user={user} />}
				{editing && <ProfileForm />}
			</Container>
		</>
	);
};
