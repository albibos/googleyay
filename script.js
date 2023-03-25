const form = document.querySelector('form');
const input = document.querySelector('#url-input');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	let url = input.value;
	if (!url.startsWith('http://') && !url.startsWith('https://')) {
		url = 'https://' + url;
	}
	window.location.href = url;
});