const buttons = document.querySelectorAll('button');
	buttons.forEach(function (button) {
	button.addEventListener('mousedown', function(event) {
		let x = event.clientX - event.target.offsetLeft;
		let y = event.clientY - event.target.offsetTop;
		let rippleElement = document.createElement('span');
		rippleElement.style.left = x + 'px';
		rippleElement.style.top = y + 'px';
		this.appendChild(rippleElement);
		setTimeout(function() {
			rippleElement.remove();
		}, 1500);
	});
});