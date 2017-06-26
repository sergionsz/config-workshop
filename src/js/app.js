import '../scss/app.scss';

window.addEventListener('load', () => {
	const body = document.querySelector('body');
	const img = document.createElement('div');
	img.classList.add('bgImage');
	body.appendChild(img);
});
