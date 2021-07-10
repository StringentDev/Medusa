// https://fluenticons.co/regular_icons/alert.svg
// https://fluenticons.co/filled_icons/add_circle.svg
// https://fluenticons.co/filled_icons/alert.svg
const icons = document.querySelectorAll('icon');
icons.forEach(async (icon) => {
	name = icon.getAttribute("name")
	if (icon.hasAttribute("filled")) {
		icon.innerHTML = `<svg width="${icon.getAttribute("width")}" viewBox="0 0 ${icon.getAttribute("width").replace("px", "")} ${icon.getAttribute("width").replace("px", "")}" xmlns="http://www.w3.org/2000/svg"><image width="${icon.getAttribute("width")}" xlink:href="https://fluenticons.co/filled_icons/${name}.svg"/></svg>`
	} else {
		icon.innerHTML = `<svg width="${icon.getAttribute("width")}" viewBox="0 0 ${icon.getAttribute("width").replace("px", "")} ${icon.getAttribute("width").replace("px", "")}" xmlns="http://www.w3.org/2000/svg"><image width="${icon.getAttribute("width")}" xlink:href="https://fluenticons.co/regular_icons/${name}.svg"/></svg>`
	}
});
