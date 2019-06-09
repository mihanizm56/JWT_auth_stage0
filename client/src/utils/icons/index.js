//иконки вставляем через export default

// import mainLogoSmallIcon from "../../assets/images/icons/main-logo/img/main-logo-small.svg";

export const getIcon = (name: string) => {
	console.log(`test getIcon, icon-name=${name}`);
	switch (name) {
		// case "hare-small":
		// 	return hareSmallImage;

		default:
			return null;
	}
};
