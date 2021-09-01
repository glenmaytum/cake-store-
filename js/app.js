// get the filter buttons working
const buttons = document.querySelectorAll('.btn');
const storeItems = document.querySelectorAll('.store-item');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		const filter = e.target.dataset.filter;

		storeItems.forEach((item) => {
			if (filter === 'all') {
				item.style.display = 'block';
			} else {
				if (item.classList.contains(filter)) {
					item.style.display = 'block';
				} else {
					item.style.display = 'none';
				}
			}
		});
	});
});

const searchBox = document.querySelector('#search-item');

searchBox.addEventListener('keyup', (e) => {
	const searchFilter = e.target.value.toLowerCase().trim();
	//display only items that contain filter input

	storeItems.forEach((item) => {
		if (item.textContent.includes(searchFilter)) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
});
