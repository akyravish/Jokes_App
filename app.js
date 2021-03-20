// jshint esversion:6

const getJokes = (e) => {
	const numberOfJokes = document.querySelector('#number').value;

	const xhr = new XMLHttpRequest();

	xhr.open(
		'GET',
		`https://api.icndb.com/jokes/random/${numberOfJokes}`,
		true
	);

	xhr.onload = () => {
		if (xhr.status === 200) {
			const output = JSON.parse(xhr.responseText);
			let jokesArray = '';
			if (output.type === 'success') {
				output.value.forEach((number) => {
					jokesArray += `<li>${number.joke}</li>`;
				});
			} else {
				jokesArray += '<li>Something went wrong</li>';
			}
			document.querySelector('.jokes').innerHTML = jokesArray;
		}
	};

	xhr.send();

	e.preventDefault();
};

document.querySelector('.get-jokes').addEventListener('click', getJokes);
