//иконки вставляем через export default
import arrowIcon from "../../assets/icons/arrow.svg";
import plusIcon from "../../assets/icons/plus.svg";
import deleteIcon from "../../assets/icons/basket.svg";

export const getIcon = (name: string) => {
	console.log(`test getIcon, icon-name=${name}`);
	switch (name) {
		case "icon-arrow":
			return arrowIcon;
		case "icon-plus":
			return plusIcon;
		case "icon-delete":
			return deleteIcon;

		default:
			return null;
	}
};
