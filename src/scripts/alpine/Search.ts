import { url } from "@utils/url-utils.ts";
import type { SearchResult } from "@/global";

export default () => ({
	keywordDesktop: "",
	keywordMobile: "",
	result: [] as SearchResult[],
	isSearching: false,
	pagefindLoaded: false,
	initialized: false,

	fakeResult: [
		{
			url: url("/"),
			meta: { title: "This Is a Fake Search Result" },
			excerpt:
				"Because the search cannot work in the <mark>dev</mark> environment.",
		},
		{
			url: url("/"),
			meta: { title: "If You Want to Test the Search" },
			excerpt: "Try running <mark>npm build && npm preview</mark> instead.",
		},
	] as SearchResult[],

	togglePanel() {
		const panel = document.getElementById("search-panel");
		panel?.classList.toggle("float-panel-closed");
	},

	setPanelVisibility(show: boolean, isDesktop: boolean): void {
		const panel = document.getElementById("search-panel");
		if (!panel || !isDesktop) return;

		if (show) {
			panel.classList.remove("float-panel-closed");
		} else {
			panel.classList.add("float-panel-closed");
		}
	},

	async search(keyword: string, isDesktop: boolean): Promise<void> {
		if (!keyword) {
			this.setPanelVisibility(false, isDesktop);
			this.result = [];
			return;
		}

		if (!this.initialized) {
			return;
		}

		this.isSearching = true;

		try {
			let searchResults: SearchResult[] = [];

			if (import.meta.env.PROD && this.pagefindLoaded && window.pagefind) {
				const response = await window.pagefind.search(keyword);
				searchResults = await Promise.all(
					response.results.map((item) => item.data()),
				);
			} else if (import.meta.env.DEV) {
				searchResults = this.fakeResult;
			} else {
				searchResults = [];
				console.error("Pagefind is not available in production environment.");
			}

			this.result = searchResults;
			this.setPanelVisibility(this.result.length > 0, isDesktop);
		} catch (error) {
			console.error("Search error:", error);
			this.result = [];
			this.setPanelVisibility(false, isDesktop);
		} finally {
			this.isSearching = false;
		}
	},

	init() {
		const initializeSearch = () => {
			this.initialized = true;
			this.pagefindLoaded =
				typeof window !== "undefined" &&
				!!window.pagefind &&
				typeof window.pagefind.search === "function";
			console.log("Pagefind status on init:", this.pagefindLoaded);
			if (this.keywordDesktop) this.search(this.keywordDesktop, true);
			if (this.keywordMobile) this.search(this.keywordMobile, false);
		};

		if (import.meta.env.DEV) {
			console.log(
				"Pagefind is not available in development mode. Using mock data.",
			);
			initializeSearch();
		} else {
			document.addEventListener("pagefindready", () => {
				console.log("Pagefind ready event received.");
				initializeSearch();
			});
			document.addEventListener("pagefindloaderror", () => {
				console.warn(
					"Pagefind load error event received. Search functionality will be limited.",
				);
				initializeSearch(); // Initialize with pagefindLoaded as false
			});

			// Fallback in case events are not caught or pagefind is already loaded by the time this script runs
			setTimeout(() => {
				if (!this.initialized) {
					console.log("Fallback: Initializing search after timeout.");
					initializeSearch();
				}
			}, 2000); // Adjust timeout as needed
		}
	},
});
