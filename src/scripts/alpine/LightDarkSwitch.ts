import { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants.ts";
import {
	applyThemeToDocument,
	getStoredTheme,
	setTheme,
} from "@utils/setting-utils.ts";
import type { LIGHT_DARK_MODE } from "@/types/config.ts";

export default () => ({
	seq: [LIGHT_MODE, DARK_MODE, AUTO_MODE] as LIGHT_DARK_MODE[],
	mode: AUTO_MODE as LIGHT_DARK_MODE,

	init() {
		this.mode = getStoredTheme();
		const darkModePreference = window.matchMedia(
			"(prefers-color-scheme: dark)",
		);
		const changeThemeWhenSchemeChanged = (_e: MediaQueryListEvent) => {
			applyThemeToDocument(this.mode);
		};
		darkModePreference.addEventListener("change", changeThemeWhenSchemeChanged);
		this.destroy = () => {
			darkModePreference.removeEventListener(
				"change",
				changeThemeWhenSchemeChanged,
			);
		};
	},

	switchScheme(newMode: LIGHT_DARK_MODE) {
		this.mode = newMode;
		setTheme(newMode);
	},

	toggleScheme() {
		/* let i = 0;
      for (; i < this.seq.length; i++) {
        if (this.seq[i] === this.mode) {
          break;
        }
      } */
		const i = this.seq.indexOf(this.mode);
		this.switchScheme(this.seq[(i + 1) % this.seq.length]);
	},

	showPanel() {
		const panel = document.querySelector("#light-dark-panel");
		if (panel) panel.classList.remove("float-panel-closed");
	},

	hidePanel() {
		const panel = document.querySelector("#light-dark-panel");
		if (panel) panel.classList.add("float-panel-closed");
	},

	// 满足类型检查，在init 中会替换为实际的清理函数
	destroy: () => {},
});
