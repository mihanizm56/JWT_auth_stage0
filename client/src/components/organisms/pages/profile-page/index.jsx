import React from "react";
import { CredentialsStoreProvider } from "../../../../containers";
import { CredentialLayout } from "../../global-package/layouts";

export const ProfilePage = props => {
	return (
		<div className="layout-page layout-page--up-fixed">
			{/* <CredentialsStoreProvider> */}
			<CredentialLayout {...props} />
			{/* </CredentialsStoreProvider> */}
		</div>
	);
};
