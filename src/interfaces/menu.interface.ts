export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	pages: PagesItem[];
}

export interface PagesItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}
