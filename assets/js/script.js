const API_KEY = '1Pr6gUiH8Tt73Ous6ZgZoq08yDo';
const API_URL = 'https://ci-jshint.herokuapp.com/api'
const resultModal = new bootstrap.Modal(document.getElementById('resultsModal'));

document.getElementById('status').addEventListener('click', e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data.expiry);
    }
}