function updatePrices(price) {
	[...document.querySelectorAll("#priceblock_ourprice,#price_inside_buybox,.twisterSwatchPrice")].forEach(el => {
		el.textContent = price;
		el.removeAttribute('hidden');
	})

}

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('DOMContentLoaded', (event) => {
	const newPrice = random(8, 150);
	const decimal = random(11, 99);
	updatePrices(`$${newPrice}.${decimal}`);
});