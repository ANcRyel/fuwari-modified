import { getDefaultHue, getHue, setHue } from "@utils/setting-utils";

export default () => ({
	hue: getHue(),
	defaultHue: getDefaultHue(),

	setHue,
	resetHue() {
		this.hue = this.defaultHue;
	},
});
