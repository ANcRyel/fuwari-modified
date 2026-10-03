import { getPostUrlBySlug } from "../../utils/url-utils";

export interface Post {
	id: string;
	data: {
		title: string;
		tags: string[];
		category?: string;
		published: Date;
	};
}

interface Group {
	year: number;
	posts: Post[];
}

export default () => {
	const params = new URLSearchParams(window.location.search);

	return {
		tags: (params.has("tag") ? params.getAll("tag") : []) as string[],
		categories: (params.has("category")
			? params.getAll("category")
			: []) as string[],
		sortedPosts: [] as Post[],
		uncategorized: params.get("uncategorized"),
		groups: [] as Group[],

		getPostUrlBySlug,

		formatDate(date: Date) {
			const month = (date.getMonth() + 1).toString().padStart(2, "0");
			const day = date.getDate().toString().padStart(2, "0");
			return `${month}-${day}`;
		},

		formatTag(tagList: string[]) {
			return tagList.map((t) => `#${t}`).join(" ");
		},

		init() {
			// 将数据日期字符串转换为 Date 对象
			const script = document.querySelector("script[data-sorted-posts]");
			if (script) {
				const rawData = JSON.parse(script.textContent);
				this.sortedPosts = rawData.map((post: any) => ({
					...post,
					data: {
						...post.data,
						published: new Date(post.data.published),
					},
				}));
			}

			let filteredPosts: Post[] = this.sortedPosts;

			if (this.tags.length > 0) {
				filteredPosts = filteredPosts.filter(
					(post) =>
						Array.isArray(post.data.tags) &&
						post.data.tags.some((tag) => this.tags.includes(tag)),
				);
			}

			if (this.categories.length > 0) {
				filteredPosts = filteredPosts.filter(
					(post) =>
						post.data.category && this.categories.includes(post.data.category),
				);
			}

			if (this.uncategorized) {
				filteredPosts = filteredPosts.filter((post) => !post.data.category);
			}

			const grouped = filteredPosts.reduce(
				(acc, post) => {
					const year = post.data.published.getFullYear();
					if (!acc[year]) {
						acc[year] = [];
					}
					acc[year].push(post);
					return acc;
				},
				{} as Record<number, Post[]>,
			);

			const groupedPostsArray = Object.keys(grouped).map((yearStr) => ({
				year: Number.parseInt(yearStr, 10),
				posts: grouped[Number.parseInt(yearStr, 10)],
			}));

			groupedPostsArray.sort((a, b) => b.year - a.year);

			this.groups = groupedPostsArray;
		},
	};
};
