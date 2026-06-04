const accordionButtons = document.querySelectorAll("[data-accordion-btn]");

accordionButtons.forEach((button) => { 
	button.addEventListener('click', () => {
		const accordion = button.parentElement;
		const accordionContent = accordion.querySelector("[data-accordion-content]");
		const accordionIcon = button.querySelector("span:last-child");

		const isOpen = !accordionContent.classList.contains("hidden");
		accordionButtons.forEach((btn) => { 
			const Item = btn.parentElement;
			const content = Item.querySelector("[data-accordion-content]");
			const icon = btn.querySelector("span:last-child");

				content.classList.add("hidden");
				icon.innerHTML = "&#8250;";
			
		});
if (!isOpen) {
	accordionContent.classList.remove("hidden");
	accordionIcon.innerHTML = "&#9660;";
}

	});

});