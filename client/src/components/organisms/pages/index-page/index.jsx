import React from "react";
import {
	AddressesFormProvider,
	AddressesStoreProvider,
	CredentialsStoreProvider,
	AddressesFormValuesProvider,
} from "../../../../containers";
import { AddressLayout } from "../../global-package/layouts";

export const IndexPage = props => {
	return (
		<div className="layout-page layout-page--up-fixed layout-page--left-fixed">
			<CredentialsStoreProvider>
				<AddressesStoreProvider>
					<AddressesFormProvider>
						<AddressesFormValuesProvider>
							<AddressLayout {...props} />
						</AddressesFormValuesProvider>
					</AddressesFormProvider>
				</AddressesStoreProvider>
			</CredentialsStoreProvider>
		</div>
	);
};
