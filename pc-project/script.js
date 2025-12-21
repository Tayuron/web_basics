document.addEventListener('DOMContentLoaded', function () {
	const basePrice = 45999

	const ramSelect = document.getElementById('ram-select')
	const hddSelect = document.getElementById('hdd-select')
	const priceDisplay = document.getElementById('product-price')

	function updatePrice() {
		const ramExtra = parseInt(ramSelect.value)
		const hddExtra = parseInt(hddSelect.value)

		const totalPrice = basePrice + ramExtra + hddExtra

		priceDisplay.textContent = `Ціна: ${totalPrice.toLocaleString('uk-UA')} грн`
	}

	ramSelect.addEventListener('change', updatePrice)
	hddSelect.addEventListener('change', updatePrice)

	updatePrice()
})
